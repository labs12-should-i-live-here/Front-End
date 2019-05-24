import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

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
    },
    index: 0
  };
  componentDidUpdate() {
    if (this.props.pins.length !== this.state.index) {
      this.setData();
      this.setState(prevState => {
        return {
          index: prevState.index + 1
        };
      });
    }
  }
  setData = () => {
    if (this.props.riskData[2]) {
      if (this.props.client.isPremium) {
        this.setState({
          compareData: {
            labels: [
              `${this.props.pins[this.props.pins.length - 3].COUNTY}, ${
                this.props.riskData[this.props.pins.length - 3].risk
                  .categorylabel
              }`,
              `${this.props.pins[this.props.pins.length - 2].COUNTY}, ${
                this.props.riskData[this.props.pins.length - 2].risk
                  .categorylabel
              }`,
              `${this.props.pins[this.props.pins.length - 1].COUNTY}, ${
                this.props.riskData[this.props.pins.length - 1].risk
                  .categorylabel
              }`
            ],
            datasets: [
              {
                label: ["Total Risk"],
                data: [
                  this.props.riskData[this.props.pins.length - 3].risk.category,
                  this.props.riskData[this.props.pins.length - 2].risk.category,
                  this.props.riskData[this.props.pins.length - 1].risk.category
                ],
                backgroundColor: [
                  "rgb(217, 49, 37)",
                  "rgb(217, 49, 37)",
                  "rgb(217, 49, 37)"
                ]
              }
            ]
          }
        });
      }
    } else {
      if (this.props.riskData[1]) {
        this.setState({
          compareData: {
            labels: [
              `${this.props.pins[this.props.pins.length - 2].COUNTY}, ${
                this.props.riskData[this.props.pins.length - 2].risk
                  .categorylabel
              }`,
              `${this.props.pins[this.props.pins.length - 1].COUNTY}, ${
                this.props.riskData[this.props.pins.length - 1].risk
                  .categorylabel
              }`
            ],
            datasets: [
              {
                label: ["Total Risk"],
                data: [
                  this.props.riskData[this.props.pins.length - 2].risk.category,
                  this.props.riskData[this.props.pins.length - 1].risk.category
                ],
                backgroundColor: ["rgb(217, 49, 37)", "rgb(217, 49, 37)"]
              }
            ]
          }
        });
      }
    }
  };

  componentDidMount() {
    this.setData();
  }
  render() {
    return (
      <>
        <Bar
          height={225}
          width={225}
          data={this.state.compareData}
          options={options}
        />
        {this.props.client.isPremium ? (
          ""
        ) : (
          <Link exact to="pricing">
            Upgrade
          </Link>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ riskData, pins, client }) => ({
  riskData,
  pins,
  client
});

export default connect(
  mapStateToProps,
  {}
)(CompareChart);
