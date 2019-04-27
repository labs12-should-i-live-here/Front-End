import React, { Component } from "react";
import "../../../scss/Map.scss";
import ReactMapGL, {
  NavigationControl,
  LinearInterpolator,
  FlyToInterpolator
} from "react-map-gl";

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
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={"mapbox://styles/brilles/cjuxa750e671g1fml154ev74e"}
        onViewportChange={this._onViewPortChange}
      >
        <div className="controller">
          <NavigationControl onViewportChange={this._onViewPortChange} />
        </div>
        <button onClick={this._goToAddress}>Go to Static address</button>
      </ReactMapGL>
    );
  }
  _onViewPortChange = viewport => {
    this.setState({ viewport });
  };

  _goToAddress = () => {
    const viewport = {
      ...this.state.viewport,
      longitude: -118.353996,
      latitude: 33.919434,
      zoom: 10,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator()
    };
    this.setState({ viewport });
  };
}

export default Map;
