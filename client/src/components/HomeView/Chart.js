import React, { Component } from "react";
import { Line, Radar, Bar } from "react-chartjs-2";
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
      labels: [
        ...Object.keys(
          this.props.coordinatePredictions[0].prediction.dry_spells
        )
      ],
      datasets: [
        {
          label: "Dry Spells",
          data: [],
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
    } else if (this.props.graphs[this.props.index] === "Radar") {
      return <Radar data={this.state.data} height={325} width={400} />;
    }
  };

  componentDidMount() {
    const dry_spells_array = Object.values(
      this.props.coordinatePredictions[this.props.selectedPinIndex].prediction
        .dry_spells
    ).map(val => val.avg);

    const extreme_cold_events_array = Object.values(
      this.props.coordinatePredictions[this.props.selectedPinIndex].prediction
        .extreme_cold_events
    ).map(val => val.avg);

    const extreme_heat_events_array = Object.values(
      this.props.coordinatePredictions[this.props.selectedPinIndex].prediction
        .extreme_heat_events
    ).map(val => val.avg);

    const extreme_precipitation_events_array = Object.values(
      this.props.coordinatePredictions[this.props.selectedPinIndex].prediction
        .extreme_precipitation_events
    ).map(val => val.avg);

    const heat_wave_incidents_array = Object.values(
      this.props.coordinatePredictions[this.props.selectedPinIndex].prediction
        .heat_wave_incidents
    ).map(val => val.avg);
    this.setState({
      data: {
        labels: [
          ...Object.keys(
            this.props.coordinatePredictions[0].prediction.dry_spells
          )
        ],
        datasets: [
          {
            label: "Extreme Heat Events",
            data: [...extreme_heat_events_array],
            backgroundColor: "rgba(255, 206, 86, 0.6)"
          },
          {
            label: "Extreme Rain Events",
            data: [...extreme_precipitation_events_array],
            backgroundColor: "rgba(75, 192, 192, 0.6)"
          },
          {
            label: "Heat Wave Incidents",
            data: [...heat_wave_incidents_array],
            backgroundColor: "rgba(153, 102, 255, 0.6)"
          },
          {
            label: "Dry Spells",
            data: [...dry_spells_array],
            backgroundColor: "rgba(255, 99, 132, 0.6)"
          },
          {
            label: "Extreme Cold Events",
            data: [...extreme_cold_events_array],
            backgroundColor: "rgba(54, 162, 235, 0.6)"
          }
        ]
      }
    });
  }

  render() {
    // Object.keys(this.props.coordinatePredictions[0].prediction.dry_spells)

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
