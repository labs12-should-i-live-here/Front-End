import React, { Component } from "react";
import "../../../scss/Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import counties from "./data/counties.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    height: "100vh",
    longitude: -98.5795, //center of US
    latitude: 39.8283,
    zoom: 3.1
  };

  render() {
    return (
      <>
        <nav id="menu" />
        <div id="map" />
      </>
    );
  }

  componentDidMount() {
    const { longitude, latitude, zoom } = this.state;

    const userSavedLngLat = [-98.5795, 39.8283]; // @TODO: GET from redux store (an array of markers)

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjv3zbk1u2uw11fqx8i0zgfkj",
      center: [longitude, latitude],
      zoom,
      minZoom: 2
    });
    map.on("load", () => {
      map.addLayer({
        id: "counties-layer",
        type: "fill",
        source: {
          type: "geojson",
          data: counties
        },
        paint: {
          "fill-color": "rgba(10, 153, 41, 0.2.75)",
          "fill-outline-color": "rgba(10, 153, 41, 1)"
        }
      });
      map.on("click", "counties-layer", e => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`${e.features[0].properties.NAME} County`)
          .addTo(map);
      });
    });

    //  counties.features.map(county => {
    //    console.log(county)
    //  })

    // const overlay = document.getElementById("map-overlay");

    // const popup = new mapboxgl.Popup({ offset: 20 }).setText("USER marker 1");

    // const marker = new mapboxgl.Marker({ draggable: true, fill: "green" })
    //   .setLngLat(userSavedLngLat)
    //   .setPopup(popup)
    //   .addTo(map);

    // function onDragEnd() {
    //   const lngLat = marker.getLngLat();
    //   console.log(`LONGITUDE: ${lngLat.lng}, LATITUDE: ${lngLat.lat}`);
    // }

    // marker.on("dragend", onDragEnd);

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl,
        countries: "us"
      })
    );
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
}

export default Map;
