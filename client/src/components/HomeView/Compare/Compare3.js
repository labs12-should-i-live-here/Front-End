import React, { Component } from "react";

import Loader from "react-loader-spinner";
import { Compare } from "styled-icons/material/Compare";
import styled from "styled-components";

const CompareGreen = styled(Compare)`
  color: #2eab6d88;
  height: 90px;
  width: 90px;
`;

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
          <div className="top">
            <CompareGreen />
          </div>
        </div>
      </>
    );
  }
}
export default Compare3;
