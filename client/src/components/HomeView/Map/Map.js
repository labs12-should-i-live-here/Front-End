import React, { Component } from "react";
import "../../../scss/Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    height: "100vh",
    longitude: -98.5795, //center of US
    latitude: 39.8283,
    zoom: 3.1
  };

  render() {
    return <div id="map"></div>;
  }

  componentDidMount() {
    const { longitude, latitude, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjuxa750e671g1fml154ev74e",
      center: [longitude, latitude],
      zoom
    });
    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([-98.5795, 39.8283]).addTo(map)


    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl,
        countries: "us"
      })
    );
    map.addControl(new mapboxgl.NavigationControl());
  }
}

export default Map;
