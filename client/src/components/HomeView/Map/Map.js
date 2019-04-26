import React, { Component } from "react";
import "../../../scss/Map.scss";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 37.7749,
      longitude: -122.4194,
      zoom: 3
    }
  };

  render() {
    console.log("token", process.env.REACT_APP_MAPBOX_TOKEN);
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={"mapbox://styles/brilles/cjuxa750e671g1fml154ev74e"}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
