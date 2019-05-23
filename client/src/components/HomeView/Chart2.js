import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart2 extends Component {
  state = {
    // historical data
    dataAll: {
      labels: [],
      datasets: []
    },
    dataDrought: {
      labels: [],
      datasets: []
    },
    dataEarthquake: {
      labels: [],
      datasets: []
    },
    dataFire: {
      labels: [],
      datasets: []
    },
    dataFlood: {
      labels: [],
      datasets: []
    },
    dataHeat: {
      labels: [],
      datasets: []
    },
    dataHurricane: {
      labels: [],
      datasets: []
    },
    dataStorm: {
      labels: [],
      datasets: []
    },
    dataTornado: {
      labels: [],
      datasets: []
    },
    dataWinter: {
      labels: [],
      datasets: []
    }
  };

  selectedGraph = () => {
    // makes graph items stacked
    const options = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Number of Events",
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

    if (this.props.graphs[this.props.index] === "BarAll") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataAll}
          options={options2}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarDrought") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataDrought}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarEarthquake") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataEarthquake}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarFire") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataFire}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarFlood") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataFlood}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarHeat") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataHeat}
          options={options}
        />
      );
    } else if (
      this.props.graphs[this.props.index] === "BarHurricane"
      // false !== false
      // this.state.dataHurricane.datasets[0] !== undefined &&
      // this.state.dataHurricane.datasets[0].data.reduce((a, b) => a + b) !== 0
    ) {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataHurricane}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarStorm") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataStorm}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarTornado") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataTornado}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "BarWinter") {
      return (
        <Bar
          height={225}
          width={225}
          data={this.state.dataWinter}
          options={options}
        />
      );
    }
  };

  componentDidMount() {
    // Retrieving historical data from store after the request is successfull
    if (this.props.fipsCodePredictions[0].count) {
      const drought = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.drought);

      const earthquake = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.earthquake);

      const fire = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.fire);

      const flood = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.flood);

      const heat = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.heat);

      const hurricane = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.hurricane);

      const storm = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.storm);

      const tornado = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.tornado);

      const winterweather = Object.values(
        this.props.fipsCodePredictions[this.props.selectedPinIndex].history
      ).map(val => val.winterweather);

      // setting the retrieved data to state & therefore view
      this.setState({
        dataAll: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
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
        },
        dataDrought: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Drought",
              data: [...drought],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            }
          ]
        },
        dataEarthquake: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Earthquake",
              data: [...earthquake],
              backgroundColor: "rgba(255, 159, 64, 0.65)"
            }
          ]
        },
        dataFire: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Fire",
              data: [...fire],
              backgroundColor: "rgba(75, 192, 192, 0.65)"
            }
          ]
        },
        dataFlood: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Flood",
              data: [...flood],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            }
          ]
        },
        dataHeat: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Heat",
              data: [...heat],
              backgroundColor: "rgba(255, 206, 86, 0.65)"
            }
          ]
        },
        dataHurricane: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Hurricane",
              data: [...hurricane],
              backgroundColor: "rgba(54, 162, 235, 0.65)"
            }
          ]
        },
        dataStorm: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Storm",
              data: [...storm],
              backgroundColor: "rgba(255, 99, 132, 0.65)"
            }
          ]
        },
        dataTornado: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
            {
              label: "Tornado",
              data: [...tornado],
              backgroundColor: "rgba(214, 162, 235, 0.65)"
            }
          ]
        },
        dataWinter: {
          labels: [
            ...Object.keys(
              this.props.fipsCodePredictions[this.props.selectedPinIndex]
                .history
            )
          ],
          datasets: [
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

const mapStateToProps = ({ fipsCodePredictions, selectedPinIndex }) => ({
  fipsCodePredictions,
  selectedPinIndex
});

export default connect(mapStateToProps)(Chart2);
