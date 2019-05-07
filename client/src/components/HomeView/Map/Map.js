import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPredictionData, fetchHistoricalData } from "../../../actions";
import "../../../scss/Map.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    zoom: 3.1,
    minZoom: 2,
    coordinates: {
      latitude: 39.8283,
      longitude: -98.5795
    },
    historySelections: {
      fipscode: 17033,
      startyear: 2000,
      endyear: 2005
    }
  };

  render() {
    return (
      <div id="map" className="map">
        <div id="menu" />
        <div id="time-mode">
          Map Mode:
          <button onClick={() => this.pastMode()}>Past</button>
          <button onClick={() => this.futureMode()}>Future</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initMap();
  }

  pastMode = () => {
    console.log("pastMode");
    this.props.fetchHistoricalData(this.state.historySelections);
  };

  futureMode = () => {
    console.log("futureMode");
  };

  initMap = () => {
    // create map with state values
    const { zoom, minZoom } = this.state;
    const { longitude, latitude } = this.state.coordinates;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjv3zbk1u2uw11fqx8i0zgfkj",
      center: [longitude, latitude],
      zoom,
      minZoom
    });

    // load layers
    map.on("load", () => {
      this.futureMode();
      map.addLayer({
        id: "Counties",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://brilles.8m1jc8xq"
        },
        "source-layer": "2__quake_county-6aj5at",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "rgba(0, 132, 255, 1)",
          "line-width": 1
        }
      });

      map.addLayer({
        id: "Counties Highlighted",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://brilles.8m1jc8xq"
        },
        "source-layer": "2__quake_county-6aj5at",
        paint: {
          "fill-color": "rgba(0, 132, 255, 0.247)"
        },
        filter: ["in", "FIPS", ""]
      });

      map.addLayer({
        id: "Quake Risk",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://brilles.2qq6qnqp"
        },
        "source-layer": "1__quake_contour-5vbtwp",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "green",
          "line-width": 1
        }
      });

      map.on("click", "Counties", e => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`${e.features[0].properties.NAME} County`)
          .addTo(map);

        const filter = ["in", "FIPS", e.features[0].properties.FIPS];
        map.setFilter("Counties Highlighted", filter);
      });

      const toggleableLayers = ["Quake Risk", "Counties"];

      toggleableLayers.map((layer, index) => {
        const id = toggleableLayers[index];
        const link = document.createElement("a");
        link.href = "#";
        // link.className = "active";
        link.textContent = id;
        map.setLayoutProperty("Quake Risk", "visibility", "none");
        map.setLayoutProperty("Counties", "visibility", "none");
        map.setLayoutProperty("Counties Highlighted", "visibility", "none");

        link.onclick = function(e) {
          // toggle layer
          const clickedLayer = this.textContent;

          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, "visibility");

          if (visibility === undefined) {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else if (visibility === "visible") {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };

        const layers = document.getElementById("menu");
        return layers.appendChild(link);
      });
    });

    // add map controls
    map
      .addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl,
          countries: "us"
        })
      )

      .addControl(new mapboxgl.NavigationControl())
      .addControl(new mapboxgl.FullscreenControl())
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );

    const popup = new mapboxgl.Popup({ offset: 20 }).setText("USER marker 1");

    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map);

    const update = updatedCoordinates => {
      this.setState({ coordinates: updatedCoordinates });
      this.props.fetchPredictionData(this.state.coordinates);
    };

    function onDragEnd() {
      const lngLat = marker.getLngLat();

      const updatedCoordinates = {
        latitude: lngLat.lat.toPrecision(8),
        longitude: lngLat.lng.toPrecision(8)
      };
      update(updatedCoordinates);
    }

    this.props.fetchPredictionData(this.state.coordinates);
    marker.on("dragend", onDragEnd);
  };
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections
});

export default connect(
  mapStateToProps,
  { fetchPredictionData, fetchHistoricalData }
)(Map);
