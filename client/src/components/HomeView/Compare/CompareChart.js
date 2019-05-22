import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class CompareChart extends Component {
  state = {
    compareData: {
      labels: [],
      datasets: []
    }
  };
  componentDidMount() {
    if (this.props.riskData[1]) {
      console.log(this.props.riskData[0]);
      console.log(this.props.riskData[1]);

      this.setState({
        compareData: {
          labels: [1, 2, 3, 4],
          datasets: [
            {
              label: this.props.riskData[0].fipscode,
              data: [this.props.riskData[0].risk.category],
              backgroundColor: "red"
            },
            {
              label: this.props.riskData[1].fipscode,
              data: [this.props.riskData[1].risk.category],
              backgroundColor: "orange"
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
