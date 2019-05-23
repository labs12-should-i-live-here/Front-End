import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { BarChart } from "styled-icons/boxicons-regular/BarChart";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { Info } from "styled-icons/octicons/Info";
import { changeTimeMode } from "../../actions";
import "../../scss/Home2.scss";
import Chart from "./Chart.js";

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

const BarChartYellow = styled(BarChart)`
  color: rgba(217, 49, 37, 0.61);
  height: 50px;
  width: 50px;
`;

class Charts extends Component {
  state = {
    graphs: [
      "Bar",
      "HeatBar",
      "RainBar",
      "HeatWaveBar",
      "DrySpellsBar",
      "ColdBar"
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
            <h2>Predicted Events</h2>
            <InfoDark />
          </div>

          <div className="toggle">
            <div>
              {this.props.coordinatePredictions[0] ? (
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
          {this.props.fetchingPredictionData ? (
            <p className="loader">
              <Loader type="Oval" color="#2e64ab" height="40" width="40" />
              Fetching predictions for next 20 years
            </p>
          ) : this.props.coordinatePredictions[0] ? (
            <>
              <h3>
                Predicted Extreme Events for <br /> <br />
                <span className="address">
                  {this.props.pinAddresses[this.props.selectedPinIndex]}
                </span>{" "}
              </h3>
              <Chart graphs={this.state.graphs} index={this.state.index} />
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
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  pins,
  selectedPinIndex,
  pinAddresses
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode,
  pins,
  selectedPinIndex,
  pinAddresses
});

export default connect(
  mapStateToProps,
  { changeTimeMode }
)(Charts);
