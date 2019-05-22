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
      console.log(this.props.riskData[0]);
      console.log(this.props.riskData[1]);

      this.setState({
        compareData: {
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

const mapStateToProps = ({ riskData }) => ({
  riskData
});

export default connect(mapStateToProps)(CompareChart);
