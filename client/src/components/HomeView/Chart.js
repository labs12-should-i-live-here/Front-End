import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  state = {
    // prediction data
    data: {},

    // historical data
    data2: {
      labels: [...Object.keys(this.props.fipsCodePredictions.history)],
      datasets: []
    }
  };

  selectedGraph = () => {
    // makes graph items stacked
    const options = {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };

    // renders graph  "cards"
    if (this.props.graphs[this.props.index] === "Bar") {
      return (
        <Bar
          height={325}
          width={400}
          data={this.props.timeMode ? this.state.data : this.state.data2}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "Line") {
      return (
        <Line
          options={{ responsive: true }}
          height={325}
          width={400}
          data={this.props.timeMode ? this.state.data : this.state.data2}
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
        }
      });
    }

    // Retrieving historical data from store after the request is successfull
    if (this.props.fipsCodePredictions.count !== undefined || null) {
      const drought = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.drought
      );

      const earthquake = Object.values(
        this.props.fipsCodePredictions.history
      ).map(val => val.earthquake);

      const fire = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.fire
      );

      const flood = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.flood
      );

      const heat = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.heat
      );

      const hurricane = Object.values(
        this.props.fipsCodePredictions.history
      ).map(val => val.hurricane);

      const storm = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.storm
      );

      const tornado = Object.values(this.props.fipsCodePredictions.history).map(
        val => val.tornado
      );

      const winterweather = Object.values(
        this.props.fipsCodePredictions.history
      ).map(val => val.winterweather);

      // setting the retrieved data to state & therefore view
      this.setState({
        data2: {
          labels: [...Object.keys(this.props.fipsCodePredictions.history)],
          datasets: [
            {
              label: "Drought",
              data: [...drought],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            },
            {
              label: "Earthquake",
              data: [...earthquake],
              backgroundColor: "rgba(255, 159, 64, 0.65)"
            },
            {
              label: "Fire",
              data: [...fire],
              backgroundColor: "rgba(153, 102, 255, 0.65)"
            },
            {
              label: "Flood",
              data: [...flood],
              backgroundColor: "rgba(75, 192, 192, 0.65)"
            },
            {
              label: "Heat",
              data: [...heat],
              backgroundColor: "rgba(255, 206, 86, 0.65)"
            },
            {
              label: "Hurricane",
              data: [...hurricane],
              backgroundColor: "rgba(54, 162, 235, 0.65)"
            },
            {
              label: "Storm",
              data: [...storm],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            },
            {
              label: "Tornado",
              data: [...tornado],
              backgroundColor: "rgba(214, 162, 235, 0.65)"
            },
            {
              label: "Winter Weather",
              data: [...winterweather],
              backgroundColor: "rgba(15, 199, 132, 0.65)"
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
  fipsCodePredictions,
  selectedPinIndex,
  timeMode
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fipsCodePredictions,
  selectedPinIndex,
  timeMode
});

export default connect(mapStateToProps)(Chart);
