import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Risk Scale",
          fontSize: 20
        },
        ticks: {
          min: 0,
          max: 5,
          stepSize: 1
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Counties",
          fontSize: 20
        }
      }
    ]
  }
};
class CompareChart extends Component {
  state = {
    compareData: {
      labels: [],
      datasets: []
    }
  };
  componentDidMount() {
    if (this.props.riskData[1]) {
      this.setState({
        compareData: {
          labels: [
            `${this.props.pins[0].COUNTY}, ${
              this.props.riskData[0].risk.categorylabel
            }`,
            `${this.props.pins[1].COUNTY}, ${
              this.props.riskData[1].risk.categorylabel
            }`
          ],
          datasets: [
            {
              label: ["Total Risk"],
              data: [
                this.props.riskData[0].risk.category,
                this.props.riskData[1].risk.category
              ],
              backgroundColor: ["blue", "blue"]
            }
          ]
        }
      });
    }
  }
  render() {
    return (
      <Bar
        height={"225"}
        width={"225"}
        data={this.state.compareData}
        options={options}
      />
    );
  }
}

const mapStateToProps = ({ riskData, pins }) => ({
  riskData,
  pins
});

export default connect(mapStateToProps)(CompareChart);
