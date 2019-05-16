import React, { Component } from "react";

import Loader from "react-loader-spinner";

class Compare3 extends Component {
  //pulsing icon when addresses on store, change ket to uuid

  tour = () => {
    console.log("tour of counties to be implemented on this click!");
  };

  sendPinIndex = index => {
    console.log("index from ", index);
    this.props.changePinIndex(index);
  };

  render() {
    return (
      <>
        <header>
          <h2>Compare Locations</h2>
        </header>

        <div className="main-compare-card locations">
          <div className="top">To be completed</div>
        </div>
      </>
    );
  }
}
export default Compare3;
