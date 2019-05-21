import React, { Component } from "react";
import { connect } from "react-redux";
import { Compare } from "styled-icons/material/Compare";
import styled from "styled-components";

const CompareGreen = styled(Compare)`
  color: #2eab6d88;
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
          <div className="locations-top">
            {this.props.coordinatePredictions[1] ? (
              <p>comparisons comming soon!</p>
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
  timeMode
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode
});

export default connect(mapStateToProps)(Compare3);
