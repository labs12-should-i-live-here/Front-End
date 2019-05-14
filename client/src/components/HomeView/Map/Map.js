import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPredictionData,
  fetchHistoricalData,
  savePin
} from "../../../actions";
import "../../../scss/Map.scss";
import axios from "axios";
import styled from "styled-components";
import { Pulse } from "styled-icons/boxicons-regular/Pulse";
const RedQuake = styled(Pulse)`
  color: red;
  height: 35px;
  width: 35px;
`;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  map;
  state = {
    zoom: 3.1,
    minZoom: 2,
    coordinates: { latitude: 37.8283, longitude: -94.5795 },
    historySelections: {
      fipscode: 17033,
      startyear: 1990,
      endyear: 2014
    },
    pins: this.props.pins,
    style: "mapbox://styles/livesafe/cjvn7ns5m4pzs1clqctev9l5i"
  };

  render() {
    return (
      <div id="map" ref={el => (this.mapContainer = el)} className="map">
        <div id="menu-a" />
      </div>
    );
  }

  componentDidMount() {
    this.initMap();
    //  if (this.props.dark) {
    //    this.setState({
    //      style: "mapbox://styles/brilles/cjv6tzh284d5x1fqqydk5mi8h"
    //    });
    //  }
  }

  pastMode = () => {
    this.props.fetchHistoricalData(this.state.historySelections);
  };

  initMap = () => {
    // create map with state values
    const { zoom, minZoom } = this.state;
    const { longitude, latitude } = this.state.coordinates;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.state.style,
      center: [longitude, latitude],
      zoom,
      minZoom
    });

    // load layers
    map.on("load", () => {
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

      map.addLayer({
        id: "Quake Heat Map",
        type: "heatmap",
        source: {
          type: "vector",
          url: "mapbox://livesafe.cjvn8h2c30bcw2xmja9dpoaq7-7iwaw"
        },
        "source-layer": "quakes1"
      });
      
      map.addLayer({
        id: "Quakes",
        type: "circle",
        source: {
          type: "vector",
          url: "mapbox://brilles.2xbld1lx"
        },
        "source-layer": "quakes1-1p0ws7",
        paint: {
          "circle-color": "purple"
        }
      });

      map.addLayer({
        id: "San Andreas Fault",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://livesafe.cjvnzaaao06dg2ypfj08fw02n-2td4t"
        },
        "source-layer": "fl"
      });

      map.on("click,", "Counties", e => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`${e.features[0].properties.NAME} County`)
          .addTo(map);

        const filter = ["in", "FIPS", e.features[0].properties.FIPS];
        map.setFilter("Counties Highlighted", filter);
      });

      const toggleableLayers = [
        "Quake Risk",
        "Counties",
        "Quakes",
        "Quake Heat Map",
        "San Andreas Fault"
      ];
      // const toggleableLayers = ["Quakes"];

      toggleableLayers.map((layer, index) => {
        const id = toggleableLayers[index];
        const link = document.createElement("a");
        link.href = "#";
        // link.className = "active";
        link.textContent = id;
        map.setLayoutProperty("Quake Risk", "visibility", "none");
        map.setLayoutProperty("Counties", "visibility", "none");
        map.setLayoutProperty("Counties Highlighted", "visibility", "none");
        map.setLayoutProperty("Quakes", "visibility", "none");
        map.setLayoutProperty("Quake Heat Map", "visibility", "none");
        map.setLayoutProperty("San Andreas Fault", "visibility", "none");

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

        const layers = document.getElementById("menu-a");
        return layers.appendChild(link);
      });
    });

    map.doubleClickZoom.disable();

    map.on("dblclick", e => {
      const userId = this.props.userId;
      const pin = {
        userId: this.props.userId,
        LATITUDE: e.lngLat.lat,
        LONGITUDE: e.lngLat.lng,
        notes: "Is this working?",
        home: 0
      }; // refactor to native format

      // Updates store, DB
      this.props.pins.push(pin);
      this.props.savePin(pin);

      console.log(this.state.coordinates);
      this.props.fetchPredictionData({
        latitude: pin.LATITUDE,
        longitude: pin.LONGITUDE
      });

      const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
        pin.LONGITUDE
      },${pin.LATITUDE}.json?access_token=${
        process.env.REACT_APP_MAPBOX_TOKEN
      }`;
      axios
        .get(URL)
        .then(res => {
          // ! DO NOT STORE THE RESPONSES IN A DB, THAT VIOLATES MAPBOX's TOS.
          this.props.pinAddresses.push(res.data.features[0].place_name);
          const id = this.props.pins.length - 1;
          let popupContent = `<div class="address"><h3>Address:</h3> <p>${
            this.props.pinAddresses[id]
          }</p></div>`;

          let popup = new mapboxgl.Popup({
            className: "popup"
          }).setHTML(popupContent);

          let marker = new mapboxgl.Marker({
            color: "#2e64ab"
          })
            .setLngLat([pin.LONGITUDE, pin.LATITUDE])
            .setPopup(popup)
            .addTo(map)
            .togglePopup();

          popup.on("open", e => {
            this.setState({
              coordinates: {
                latitude: e.target._lngLat.lat,
                longitude: e.target._lngLat.lng
              }
            });
          });
        })
        .catch(error => {
          console.log(error);
        });

      // TODO: add this area not supported for outside of US
    });

    // add map controls
    map
      // .addControl(
      //   new MapboxGeocoder({
      //     accessToken: mapboxgl.accessToken,
      //     mapboxgl,
      //     countries: "us",
      //     marker: false
      //   })
      // )
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

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      countries: "us",
      marker: false
    });

    document.getElementById("geocoder").appendChild(geocoder.onAdd(map));

    // Populate pins on map
    // this.props.pins.map(pin => {
    //   let popup = new mapboxgl.Popup().setText([
    //     pin.latitude,
    //     pin.longitude // add notes / input for notes etc
    //   ]);

    //   new mapboxgl.Marker()
    //     .setLngLat([pin.longitude, pin.latitude])
    //     .setPopup(popup)
    //     .addTo(map);
    // });

    // const marker = new mapboxgl.Marker({
    //   draggable: true
    // })
    //   .setLngLat([longitude, latitude])
    //   .setPopup(popup)
    //   .addTo(map);

    // const update = updatedCoordinates => {
    //   this.setState({ coordinates: updatedCoordinates });
    //   this.props.fetchPredictionData(this.state.coordinates);
    // };

    // function onDragEnd() {
    //   const lngLat = marker.getLngLat();

    //   const updatedCoordinates = {
    //     latitude: lngLat.lat.toPrecision(8),
    //     longitude: lngLat.lng.toPrecision(8)
    //   };
    //   update(updatedCoordinates);
    // }

    // this.props.fetchPredictionData(this.state.coordinates);
    // marker.on("dragend", onDragEnd);
  };
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections,
  pins,
  addingPin,
  userId,
  fetchingAddress,
  pinAddresses,
  dark
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections,
  pins,
  addingPin,
  userId,
  fetchingAddress,
  pinAddresses,
  dark
});

export default connect(
  mapStateToProps,
  { fetchPredictionData, fetchHistoricalData, savePin }
)(Map);
