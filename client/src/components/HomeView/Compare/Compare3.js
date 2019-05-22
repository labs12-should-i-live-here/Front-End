import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";

import { fetchRiskData } from "../../../actions";
import CompareChart from "./CompareChart.js";

const CompareGreen = styled(Compare)`
  color: #2eab6d88;
  height: 45px;
  width: 45px;
`;
const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of events",
          fontSize: 20
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Year",
          fontSize: 20
        }
      }
    ]
  }
};

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
          <div className="locations-top">
            {this.props.riskData[1] ? (
              <CompareChart />
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
