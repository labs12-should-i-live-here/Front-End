import React, { Component } from "react";
import "../../../scss/Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import counties from "./data/counties.json";
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    lng: -98.5795, // center of US
    lat: 39.8283,
    zoom: 3.1,
    minZoom: 2
  };

  componentDidMount() {
    const { lng, lat, zoom, minZoom } = this.state;
    const userSavedLngLat = [lng, lat];
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjv3zbk1u2uw11fqx8i0zgfkj",
      center: [lng, lat],
      zoom,
      minZoom
    });

    // map.on("load", () => {
    //   map.addLayer({
    //     id: "Counties",
    //     type: "fill",
    //     source: {
    //       type: "geojson",
    //       data: counties
    //     },
    //     paint: {
    //       "fill-color": "rgba(145, 145, 145, 0.175)",
    //       "fill-outline-color": "rgba(10, 153, 41, .75)"
    //     }
    //   });

    //   map.addLayer({
    //     id: "Counties Highlighted",
    //     type: "fill",
    //     source: {
    //       type: "geojson",
    //       data: counties
    //     },
    //     paint: {
    //       "fill-outline-color": "green",
    //       "fill-color": "rgba(145, 145, 145, 0.4)",
    //       "fill-opacity": 0.75
    //     },
    //     filter: ["in", "FIPS", ""]
    //   });

    //   map.on("click", "Counties", e => {
    //     new mapboxgl.Popup()
    //       .setLngLat(e.lngLat)
    //       .setHTML(`${e.features[0].properties.NAME} County`)
    //       .addTo(map);

    //     const filter = ["in", "FIPS", e.features[0].properties.FIPS];
    //     map.setFilter("Counties Highlighted", filter);
    //   });

    // const toggleableLayers = ["Counties", "Counties Highlighted"];

    // toggleableLayers.map(layer => {
    //   const link = document.createElement("a");
    //   link.href = "#";
    //   link.className = "active";
    //   link.textContent = layer;

    //   link.onclick = e => {
    //     // toggle layer
    //     const clickedLayer = link.textContent;
    //     e.preventDefault();
    //     e.stopPropagation();
    //     const visibility = map.getLayoutProperty(clickedLayer, "visibility");
    //     if (visibility === "visible") {
    //       map.setLayoutProperty(clickedLayer, "visibility", "none");
    //       this.className = "";
    //     } else {
    //       this.className = "active";
    //       map.setLayoutProperty(clickedLayer, "visibility", "visible");
    //     }
    //   };

    //   const layers = document.getElementById("menu");
    //   layers.appendChild(link);
    // });
    // });

    // const overlay = document.getElementById("map-overlay");

    // const popup = new mapboxgl.Popup({ offset: 20 }).setText("USER marker 1");

    // const marker = new mapboxgl.Marker({ draggable: true, fill: "green" })
    //   .setLngLat(userSavedLngLat)
    //   .setPopup(popup)
    //   .addTo(map);

    // function onDragEnd() {
    //   const lngLat = marker.getLngLat();
    //   console.log(`LONGITUDE: ${lngLat.lng}, LATITUDE: ${lngLat.lat}`);
    //   axios
    //     .post(
    //       "http://flask-env.ye8czngppq.us-east-2.elasticbeanstalk.com/prediction",
    //       { latitude: lngLat.lat, longitude: lngLat.lng }
    //     )

    //     .then(res => console.log(res))
    //     .catch(error => console.log(error));
    // }

    // marker.on("dragend", onDragEnd);
    axios
      .get(
        "https://api.mapbox.com/datasets/v1/brilles/cjv5mw37j104b2xmx6vf16b6m/features?access_token=pk.eyJ1IjoiYnJpbGxlcyIsImEiOiJjanJkdjRlOWwwbTNsNDlwbzU0ZDhreWoyIn0.yxDY7UlW1i-3IrB9aQW7bQ"
      )
      .then(res => console.log(res));

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl,
        countries: "us"
      })
    );
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
  }

  render() {
    return (
      <div id="map">
        <div id="menu" />
      </div>
    );
  }
}

export default Map;
