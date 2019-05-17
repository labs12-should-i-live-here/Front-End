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
  height: 90px;
  width: 90px;
`;

class Charts extends Component {
  state = {
    graphs: ["Bar", "Line"],
    index: 0
  };

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.graphs.length - 1 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1
        };
      });
    }
  };

  rightClick = () => {
    if (this.state.index === this.state.graphs.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index + 1
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
            <h2>Charts</h2>
            {/* <InfoDark /> */}
          </div>

          {/* {this.props.fipsCodePredictions.count ? (
            <div className="center-time-controls">
              {this.props.timeMode ? (
                <h3>Predicted Extreme Events</h3>
              ) : (
                <h3>Past Extreme Events</h3>
              )}
            </div>
          ) : (
            <p> </p>
          )} */}

          <div className="toggle">
            {this.props.timeMode ? (
              <p onClick={this.changeMode}>See Past</p>
            ) : (
              <p onClick={this.changeMode}>See Predictions</p>
            )}
            <div>
              <BlackLeft onClick={this.leftClick} />
              <BlackRight onClick={this.rightClick} />
            </div>
          </div>
        </header>

        <div className="chart">
          {this.props.fetchingHistoricalData ||
          this.props.fetchingPredictionData ? (
            <p className="loader">
              <Loader type="Oval" color="#2e64ab" height="40" width="40" />
            </p>
          ) : this.props.fipsCodePredictions.count &&
            this.props.coordinatePredictions ? (
            <>
              <h3>
                {this.props.timeMode
                  ? "Predicted Extreme Events"
                  : "Past Extreme Events"}
              </h3>
              <Chart graphs={this.state.graphs} index={this.state.index} />
            </>
          ) : (
            <div className="middle">
              <p>
                <BarChartYellow />
              </p>
              <p className="msg">No Pin selected... double click map to add</p>
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
  timeMode
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  timeMode
});

export default connect(
  mapStateToProps,
  { changeTimeMode }
)(Charts);
