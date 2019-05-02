import React, { Component } from "react";
import "../../../scss/Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { connect } from "react-redux";
import { getData } from "../../../actions";

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
    /* 
      !Time Options: Historical(county based), !Projection([lng,lat] based)
      *VISIBLE on load
      L1 Earthquakes heatmap (time travel allowed)
      *Make Available in background
      L2 
      L3
      L4
      L5
      L6
    */

    // GET above data, first layer, then rest
    this.props.getData();

    // create map with state values
    const { lng, lat, zoom, minZoom } = this.state;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/brilles/cjv3zbk1u2uw11fqx8i0zgfkj",
      center: [lng, lat],
      zoom,
      minZoom
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
      .addControl(new mapboxgl.FullscreenControl())
      .addControl(new mapboxgl.NavigationControl())
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
  };
}

const mapStateToProps = ({ layers }) => ({ layers });

export default connect(
  mapStateToProps,
  { getData }
)(Map);
