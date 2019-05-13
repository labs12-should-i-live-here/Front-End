import React, { Component } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  state = {
    data: {
      labels: ["Dry Spells", "Cold", "Heat", "Rain", "Heat Wave"],
      datasets: [
        {
          label: "Projected events",
          data: [
            this.props.coordinatePredictions[
              this.props.coordinatePredictions.length - 1
            ].prediction.dry_spells["2019"].avg,
            this.props.coordinatePredictions[
              this.props.coordinatePredictions.length - 1
            ].prediction.extreme_cold_events["2019"].avg,
            this.props.coordinatePredictions[
              this.props.coordinatePredictions.length - 1
            ].prediction.extreme_heat_events["2019"].avg,
            this.props.coordinatePredictions[
              this.props.coordinatePredictions.length - 1
            ].prediction.extreme_precipitation_events["2019"].avg,
            this.props.coordinatePredictions[
              this.props.coordinatePredictions.length - 1
            ].prediction.heat_wave_incidents["2019"].avg
          ],
          backgroundColor: [
            "rgba(249,194,46, 0.6)",
            "rgba(83,179,203, 0.6)",
            "rgba(241,89,70, 0.6)",
            "rgba(12,164,165, 0.6)",
            "rgba(224,26,79, 0.6)"
          ]
        }
      ]
    }
  };

  selectedGraph = () => {
    if (this.props.graphs[this.props.index] === "Bar") {
      return (
        <Bar
          height={325}
          width={400}
          data={this.state.data}
          // options={{
          //   title: {
          //     display: "Line",
          //     text: "Extreme Events",
          //     fontSize: 15
          //   }
          // }}
        />
      );
    } else if (this.props.graphs[this.props.index] === "Line") {
      return <Line height={325} width={400} data={this.state.data} />;
    }
  };

  render() {
    return <div className="carousel">{this.selectedGraph()}</div>;
  }
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions
}) => ({
  fetchingPredictionData,
  coordinatePredictions
});

export default connect(mapStateToProps)(Chart);
