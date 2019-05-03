import React, { Component } from "react";
import "../../../scss/Stats.scss";
import Plot from "react-plotly.js";

class Stats extends Component {
  state = {
    trace1: {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [10, 15, 13, 17, 20, 16, 15],
      type: "scatter"
    }
  };

  render() {
    const data = [this.state.trace1];

    return (
      <>
        <Plot
          data={data}
          layout={{ title: "Projection" }}
          config={{ displayModeBar: false }}
        />
      </>
    );
  }
}

export default Stats;
