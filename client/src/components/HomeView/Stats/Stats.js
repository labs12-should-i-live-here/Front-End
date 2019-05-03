import React, { Component } from "react";
import "../../../scss/Stats.scss";
// import Plot from "react-plotly.js";

<<<<<<< HEAD
function Stats() {
  return (
    <div className="stats">
      <p>Stats</p>
      <button>save pin</button>
    </div>
  );
=======
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
        {/* <Plot
          data={data}
          layout={{ title: "Projection" }}
          config={{ displayModeBar: false }}
        /> */}
        plot
      </>
    );
  }
>>>>>>> 11adac4beb901b5bade83a0b7cefd11c89d89942
}

export default Stats;
