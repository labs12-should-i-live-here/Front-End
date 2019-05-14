import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
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
    data: {},

    data2: {
      labels: [...Object.keys(this.props.fipsCodePredictions.history)],
      datasets: []
    }
  };

  selectedGraph = () => {
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

    let data = {
      datasets: [
        {
          label: "test1",
          data: [1]
        },
        {
          label: "test2",
          data: [2]
        }
      ],
      labels: ["label"]
    };

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
    //Historical

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
    //Predictions
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

      this.setState({
        data2: {
          labels: [...Object.keys(this.props.fipsCodePredictions.history)],
          datasets: [
            {
              label: "Drought",
              data: [...drought],
              backgroundColor: "rgba(255, 206, 86, 0.6)"
            },
            {
              label: "Earthquake",
              data: [...earthquake],
              backgroundColor: "rgba(75, 192, 192, 0.6)"
            },
            {
              label: "Fire",
              data: [...fire],
              backgroundColor: "rgba(153, 102, 255, 0.6)"
            },
            {
              label: "Flood",
              data: [...flood],
              backgroundColor: "rgba(255, 99, 132, 0.6)"
            },
            {
              label: "Heat",
              data: [...heat],
              backgroundColor: "rgba(54, 162, 235, 0.6)"
            },
            {
              label: "Hurricane",
              data: [...hurricane],
              backgroundColor: "rgba(54, 235, 114, 0.6)"
            },
            {
              label: "Storm",
              data: [...storm],
              backgroundColor: "rgba(235, 54, 235, 0.6)"
            },
            {
              label: "Tornado",
              data: [...tornado],
              backgroundColor: "rgba(217, 235, 54, 0.6)"
            },
            {
              label: "Winter Weather",
              data: [...winterweather],
              backgroundColor: "rgba(235, 96, 54, 0.6)"
            }
          ]
        }
      });
    }

    // var ctx = document.getElementById("canvas").getContext("2d");

    // window.myBar = new Chart(ctx, {
    //   type: "bar",
    //   data: this.state.data2,

    // });
  }

  render() {
    // else if (this.props.graphs[this.props.index] === "Stacked") {
    //   return
    // }

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
