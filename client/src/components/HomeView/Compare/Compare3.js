import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { Bar } from "react-chartjs-2";

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
  state = {
    locationA: "",
    locationB: ""
  };

  tour = () => {
    console.log("tour of counties to be implemented on this click!");
  };

  sendPinIndex = index => {
    console.log("index from ", index);
    this.props.changePinIndex(index);
  };

  // componentDidMount() {
  //   const
  // }

  render() {
    return (
      <>
        <header>
          <h2>Compare Locations</h2>
        </header>

        <div className="main-compare-card locations">
          <div className="locations-top">
            {this.props.coordinatePredictions[1] ? (
              // <Bar
              //   height={"225"}
              //   width={"225"}
              //   data={this.props}
              //   options={options}
              // />
              <p>asdf</p>
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
