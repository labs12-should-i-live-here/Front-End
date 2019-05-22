import React, { Component } from "react";
// import loading from "./loading.svg";
import Loader from "react-loader-spinner";

class Callback extends Component {
  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 100,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    };

    return (
      <div style={style}>
        {/* <h4>logging you in...</h4> */}
        <Loader type="Oval" color="#2e64ab" height="40" width="40" />
      </div>
    );
  }
}

export default Callback;
