import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  state = {
    // prediction data
    data: {},
    dataHeat: {},
    dataRain: {},
    dataHeatWave: {},
    dataDrySpells: {},
    dataCold: {}
  };

  selectedGraph = () => {
    // makes graph items stacked
    const options = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Number of events",
              fontSize: 20
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Year",
              fontSize: 20
            }
          }
        ]
      }
    };
    const options2 = {
      scales: {
        xAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: "Year",
              fontSize: 20
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: "Number of Events",
              fontSize: 20
            }
          }
        ]
      }
    };

    // renders graph  "cards"
    if (this.props.graphs[this.props.index] === "Bar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.data}
          options={options2}
        />
      );
    } else if (this.props.graphs[this.props.index] === "HeatBar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.dataHeat}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "RainBar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.dataRain}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "HeatWaveBar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.dataHeatWave}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "DrySpellsBar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.dataDrySpells}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "ColdBar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.dataCold}
          options={options}
        />
      );
    }
  };

  componentDidMount() {
    // Retrieving prediction data from store after the request is successfull
    if (this.props.coordinatePredictions[0]) {
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

      // setting the retrieved data to state & therefore view
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
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            },
            {
              label: "Extreme Rain Events",
              data: [...extreme_precipitation_events_array],
              backgroundColor: "rgba(54, 162, 235, 0.65)"
            },
            {
              label: "Heat Wave Incidents",
              data: [...heat_wave_incidents_array],
              backgroundColor: "rgba(75, 192, 192, 0.65)"
            },
            {
              label: "Dry Spells",
              data: [...dry_spells_array],
              backgroundColor: "rgba(255, 206, 86, 0.65)"
            },
            {
              label: "Extreme Cold Events",
              data: [...extreme_cold_events_array],
              backgroundColor: "rgba(153, 102, 255, 0.65)"
            }
          ]
        },
        dataHeat: {
          labels: [
            ...Object.keys(
              this.props.coordinatePredictions[0].prediction.dry_spells
            )
          ],
          datasets: [
            {
              label: "Extreme Heat Events",
              data: [...extreme_heat_events_array],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            }
          ]
        },
        dataRain: {
          labels: [
            ...Object.keys(
              this.props.coordinatePredictions[0].prediction.dry_spells
            )
          ],
          datasets: [
            {
              label: "Extreme Rain Events",
              data: [...extreme_precipitation_events_array],
              backgroundColor: "rgba(54, 162, 235, 0.65)"
            }
          ]
        },
        dataHeatWave: {
          labels: [
            ...Object.keys(
              this.props.coordinatePredictions[0].prediction.dry_spells
            )
          ],
          datasets: [
            {
              label: "Heat Wave Incidents",
              data: [...heat_wave_incidents_array],
              backgroundColor: "rgba(75, 192, 192, 0.65)"
            }
          ]
        },
        dataDrySpells: {
          labels: [
            ...Object.keys(
              this.props.coordinatePredictions[0].prediction.dry_spells
            )
          ],
          datasets: [
            {
              label: "Dry Spells",
              data: [...dry_spells_array],
              backgroundColor: "rgba(255, 206, 86, 0.65)"
            }
          ]
        },
        dataCold: {
          labels: [
            ...Object.keys(
              this.props.coordinatePredictions[0].prediction.dry_spells
            )
          ],
          datasets: [
            {
              label: "Extreme Cold Events",
              data: [...extreme_cold_events_array],
              backgroundColor: "rgba(153, 102, 255, 0.65)"
            }
          ]
        }
      });
    }
  }

  render() {
    return (
      <>
        <div className="carousel">{this.selectedGraph()}</div>
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
