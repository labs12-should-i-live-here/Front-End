import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { BarChart } from "styled-icons/boxicons-regular/BarChart";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { Info } from "styled-icons/octicons/Info";
import { changeTimeMode, fetchRiskData } from "../../actions";
import "../../scss/Home2.scss";
import Chart2 from "./Chart2.js";

const InfoDark = styled(Info)`
  color: rgba(0, 0, 0, 0.5);
  height: 17.5px;
  width: 17.5px;
  padding: 3px;
  margin-left: 8px;
  border-radius: 20%;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const BlackLeft = styled(NavigateBefore)`
  color: black;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
`;
const BlackRight = styled(NavigateNext)`
  color: black;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
  margin-left: 3px;
`;

const DisabledLeft = styled(NavigateBefore)`
  color: grey;
  height: 30px;
  width: 30px;
  opacity: 0.4;
  border-radius: 6px;
`;
const DisabledRight = styled(NavigateNext)`
  color: grey;
  height: 30px;
  width: 30px;
  opacity: 0.4;
  border-radius: 6px;
`;

const BarChartYellow = styled(BarChart)`
  color: rgba(217, 49, 37, 0.61);
  height: 50px;
  width: 50px;
`;

class Charts extends Component {
  state = {
    graphs: [
      "BarAll",
      "BarDrought",
      "BarEarthquake",
      "BarFire",
      "BarFlood",
      "BarHeat",
      "BarHurricane",
      "BarStorm",
      "BarTornado",
      "BarWinter"
    ],
    index: 0,
    leftDisable: true,
    rightDisable: false
  };

  leftClick = () => {
    console.log(this.state.index);
    if (this.state.index === 0) {
      this.setState({ leftDisable: true });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1,
          rightDisable: false
        };
      });
    }
  };

  rightClick = () => {
    console.log(this.state.index);
    if (this.state.index === this.state.graphs.length - 1) {
      this.setState({ rightDisable: true });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index + 1,
          leftDisable: false
        };
      });
    }
  };

  changeMode = () => {
    this.props.changeTimeMode();
  };

  render() {
    return (
      <>
        <header>
          <div className="chart-title">
            <h2>Past Events</h2>
            <InfoDark />
          </div>

          <div className="toggle">
            <div>
              {this.props.fipsCodePredictions[0] ? (
                <>
                  <button>
                    {this.state.leftDisable ? (
                      <DisabledLeft />
                    ) : (
                      <BlackLeft onClick={this.leftClick} />
                    )}
                  </button>
                  <button>
                    {this.state.rightDisable ? (
                      <DisabledRight />
                    ) : (
                      <BlackRight onClick={this.rightClick} />
                    )}
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </header>

        <div className="chart">
          {this.props.fetchingHistoricalData ? (
            <div className="loader">
              <Loader type="Oval" color="#2e64ab" height="40" width="40" />
            </div>
          ) : this.props.fipsCodePredictions[0] ? (
            <>
              <h3>
                Past Extreme Events for{" "}
                <span className="county">
                  {this.props.pins[this.props.selectedPinIndex].COUNTY}
                </span>{" "}
                county
              </h3>
              <Chart2 graphs={this.state.graphs} index={this.state.index} />
            </>
          ) : (
            <div className="middle">
              <p>
                <BarChartYellow />
              </p>
              <p className="msg">
                No Location selected. Please double click map to add one.
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  fetchingHistoricalData,
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  pins,
  selectedPinIndex
}) => ({
  fetchingHistoricalData,
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  pins,
  selectedPinIndex
});

export default connect(
  mapStateToProps,
  { changeTimeMode, fetchRiskData }
)(Charts);
