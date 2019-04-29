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
    return (
      <>
        <div id="map" />
      </>
    );
  }

  componentDidMount() {
    const { longitude, latitude, zoom } = this.state;

    const userSavedLngLat = [-98.5795, 39.8283]; // @TODO: GET from redux store (an array of markers)

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjuxa750e671g1fml154ev74e",
      center: [longitude, latitude],
      zoom
    });

    const popup = new mapboxgl.Popup({ offset: 20 }).setText("USER marker 1"); // chang to dynamic

    const marker = new mapboxgl.Marker({ draggable: true, fill: "green" })
      .setLngLat(userSavedLngLat)
      .setPopup(popup)
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      console.log(`LONGITUDE: ${lngLat.lng}, LATITUDE: ${lngLat.lat}`);
    }

    marker.on("dragend", onDragEnd);

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
