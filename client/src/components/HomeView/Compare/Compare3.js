import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";

import { fetchRiskData } from "../../../actions";
import CompareChart from "./CompareChart.js";

const CompareGreen = styled(Compare)`
  color: #2e64ab9c;
  height: 45px;
  width: 45px;
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
          <div className="locations-top chart">
            {this.props.riskData[1] ? (
              <div className="last-chart">
                <CompareChart />
              </div>
            ) : (
              <>
                <CompareGreen /> <p>Please add two locations to compare.</p>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  fetchingRiskData,
  riskData
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  fetchingRiskData,
  riskData
});

export default connect(
  mapStateToProps,
  { fetchRiskData }
)(Compare3);
