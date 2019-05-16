import React, { Component } from "react";
import styled from "styled-components";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import "../../scss/Home2.scss";
import Chart from "./Chart.js";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { BarChart } from "styled-icons/boxicons-regular/BarChart";
import { changeTimeMode } from "../../actions";
import { Info } from "styled-icons/octicons/Info";

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
  color: #2e64ab9c;
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
            <InfoDark />
          </div>

          {this.props.fipsCodePredictions.count ? (
            <div className="center-time-controls">
              {this.props.timeMode ? (
                <h3>Future Data</h3>
              ) : (
                <h3>Historical Data</h3>
              )}
            </div>
          ) : (
            <p> </p>
          )}

          <div className="toggle">
            {this.props.timeMode ? (
              <p onClick={this.changeMode}>Toggle Future</p>
            ) : (
              <p onClick={this.changeMode}>Toggle Past</p>
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
            <Chart graphs={this.state.graphs} index={this.state.index} />
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
