import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart2 extends Component {
  state = {
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

    console.log("state of graph", this.state);
    // renders graph  "cards"
    if (this.props.graphs[this.props.index] === "Bar") {
      return (
        <Bar
          height={"225"}
          width={"225"}
          data={this.state.data2}
          options={options}
        />
      );
    } else if (this.props.graphs[this.props.index] === "Line") {
      return (
        <Line
          height={225}
          width={225}
          data={this.state.data2}
          options={options}
        />
      );
    }
  };

  componentDidMount() {
    // Retrieving historical data from store after the request is successfull
    if (this.props.fipsCodePredictions.count) {
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

const mapStateToProps = ({ fipsCodePredictions, selectedPinIndex }) => ({
  fipsCodePredictions,
  selectedPinIndex
});

export default connect(mapStateToProps)(Chart2);
