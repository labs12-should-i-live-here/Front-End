import React, { Component } from "react";
import "../../../scss/Map.scss";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    height: "100vh",
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 5
  };

  render() {
    return <div id="map" />;
  }
  componentDidMount() {
    const { longitude, latitude, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjuxa750e671g1fml154ev74e",
      center: [longitude, latitude],
      zoom
    });
  }
}

export default Map;
