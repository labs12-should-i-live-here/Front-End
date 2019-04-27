import React, { Component } from "react";
import "../../../scss/Map.scss";
import ReactMapGL, { NavigationControl } from "react-map-gl";

class Map extends Component {
  state = {
    // init state of map
    viewport: {
      width: "100%",
      height: "100%",
      // San Francisco, CA
      latitude: 37.7749,
      longitude: -122.4194,
      zoom: 3
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} // Token must be set on .env
        mapStyle={"mapbox://styles/brilles/cjuxa750e671g1fml154ev74e"}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <div className="controller">
          <NavigationControl
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map;
