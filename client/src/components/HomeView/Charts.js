import React, { Component } from "react";
import styled from "styled-components";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import "../../scss/Home2.scss";
import Chart from "./Chart.js";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "animate.css";
import { BarChart } from "styled-icons/boxicons-regular/BarChart";

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
// change chart to dynamic
class Charts extends Component {
  //change type to dynamic + icons
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

  render() {
    return (
      <>
        <header>
          <h2>Charts</h2>
          <div className="toggle">
            <BlackLeft onClick={this.leftClick} />
            <BlackRight
              onClick={this.rightClick}
              className={
                this.props.coordinatePredictions.prediction
                  ? "animated tada "
                  : ""
              }
            />
          </div>
        </header>

        <div className="chart">
          {this.props.fetchingPredictionData ? (
            <p className="loader">
              <Loader type="Oval" color="#2e64ab" height="40" width="40" />
            </p>
          ) : this.props.coordinatePredictions[0] ? (
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
  coordinatePredictions
}) => ({
  fetchingPredictionData,
  coordinatePredictions
});

export default connect(mapStateToProps)(Charts);
