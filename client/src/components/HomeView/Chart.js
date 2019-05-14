import React, { Component } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import styled from "styled-components";
import { Info } from "styled-icons/octicons/Info";

const InfoDark = styled(Info)`
  color: rgba(0, 0, 0, 0.5);
  height: 15px;
  width: 15px;
  margin-left: 96.5%;
  padding: 1px;
  border-radius: 6px 0px 6px 0;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;

class Chart extends Component {
  state = {
    data: {
      labels: ["Dry Spells", "Cold", "Heat", "Rain", "Heat Wave"],
      datasets: [
        {
          label: "Dry Spells",
          data: [
            Object.values(
              this.props.coordinatePredictions[this.props.selectedPinIndex]
                .prediction.dry_spells["2019"].avg
            )
          ],
          backgroundColor: "rgba(249,194,46, 0.6)"
        },
        {
          label: "Extreme Cold Events",
          data: [
            this.props.coordinatePredictions[this.props.selectedPinIndex]
              .prediction.extreme_cold_events["2019"].avg
          ],
          backgroundColor: "rgba(122,194,46, 0.6)"
        },
        {
          label: "Extreme Heat Events",
          data: [
            this.props.coordinatePredictions[this.props.selectedPinIndex]
              .prediction.extreme_heat_events["2019"].avg
          ],
          backgroundColor: "green"
        },
        {
          label: "Extreme Rain Events",
          data: [
            this.props.coordinatePredictions[this.props.selectedPinIndex]
              .prediction.extreme_precipitation_events["2019"].avg
          ],
          backgroundColor: "purple"
        },
        {
          label: "Heat Wave Incidents",
          data: [
            this.props.coordinatePredictions[this.props.selectedPinIndex]
              .prediction.heat_wave_incidents["2019"].avg
          ],
          backgroundColor: "orange"
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
      return (
        <Line
          options={{ responsive: true }}
          height={325}
          width={400}
          data={this.state.data}
        />
      );
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="carousel">{this.selectedGraph()}</div>
        <InfoDark />
      </>
    );
  }
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions,
  selectedPinIndex
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  selectedPinIndex
});

export default connect(mapStateToProps)(Chart);
