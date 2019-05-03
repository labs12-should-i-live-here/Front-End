import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import "../../../scss/Map.scss";
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    lng: -98.5795, // center of US
    lat: 39.8283,
    zoom: 3.1,
    minZoom: 2
  };

  render() {
    return (
      <div id="map">
        <div id="menu" />
      </div>
    );
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    // create map with state values
    const { lng, lat, zoom, minZoom } = this.state;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjv3zbk1u2uw11fqx8i0zgfkj",
      center: [lng, lat],
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
        layers.appendChild(link);
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
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      console.log(
        `LONGITUDE: ${lngLat.lng.toPrecision(
          8
        )}, LATITUDE: ${lngLat.lat.toPrecision(8)}`
      );
      axios
        .post(
          "http://flask-env.ye8czngppq.us-east-2.elasticbeanstalk.com/prediction",
          {
            latitude: lngLat.lat.toPrecision(8),
            longitude: lngLat.lng.toPrecision(8)
          }
        )

        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    marker.on("dragend", onDragEnd);
    axios
      .get(
        "https://api.mapbox.com/datasets/v1/brilles/cjv5mw37j104b2xmx6vf16b6m/features?access_token=pk.eyJ1IjoiYnJpbGxlcyIsImEiOiJjanJkdjRlOWwwbTNsNDlwbzU0ZDhreWoyIn0.yxDY7UlW1i-3IrB9aQW7bQ"
      )
      .then(res => {
        const counties = res.data.features;
        console.log(counties);
      });
  };
}

export default Map;
