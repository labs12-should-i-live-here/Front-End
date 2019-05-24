import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { disasters } from "../Map/disasters_per_county";
import { averages } from "../Map/disaster_averages.js"

const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Risk Score",
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

let disastersData = {};
let numOfEvents = 7;
let county1data = [];
let county2data = [];
let allowedComparisons = 2;
let nationalAverages = [];

class CompareChart extends Component {
  state = {
    compareData: {
      labels: [],
      datasets: []
    }
  };


  // data: {
  //   labels: ["Fire", "Storm", "Hurricane", "Drought", "Tornado", "Earthquake"],
  //   datasets: [
  //     {
  //       label: "County 1",
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: 'blue'
  //     },
  //     {
  //       label: "County 2",
  //       data: [10, 9, 13, 18, 5, 8],
  //       backgroundColor: 'yellow'
  //     },
  //     {
  //       label: "County 3",
  //       data: [16, 6, 7, 8, 6, 5],
  //       backgroundColor: 'red'
  //     }
  //   ]
  // },
  componentDidMount() {
    console.log(this.props.pins[0].COUNTY, this.props.riskData[0].fipscode, this.props.riskData[0].risk.categorylabel);
    console.log(disasters[0][this.props.riskData[0].fipscode], disasters[1][this.props.riskData[0].fipscode], disasters[2][this.props.riskData[0].fipscode]);
    
    county1data = [];
    county2data = [];
    //for (let i = 0; i < allowedComparisons ; i++)
      for (let j = 0; j < numOfEvents ; j++)
        county1data.push(disasters[j][this.props.riskData[0].fipscode]);

      for (let j = 0; j < numOfEvents ; j++)
        county2data.push(disasters[j][this.props.riskData[1].fipscode]);

      for (let j = 0; j < numOfEvents ; j++)
        nationalAverages.push(1/averages[j][this.props.riskData[1].fipscode]*disasters[j][this.props.riskData[1].fipscode]);

      console.log(county1data)

      // datasets: [{
      //   label: 'Sales',
      //   type:'line',
      //   data: [51, 65, 40, 49, 60, 37, 40],
      //   fill: false,
      //   borderColor: '#EC932F',
      //   backgroundColor: '#EC932F',
      //   pointBorderColor: '#EC932F',
      //   pointBackgroundColor: '#EC932F',
      //   pointHoverBackgroundColor: '#EC932F',
      //   pointHoverBorderColor: '#EC932F',
      //   yAxisID: 'y-axis-2'
      // }

    disastersData =   {labels: [ 'Winter', 'Storm', 'Flood', 'Fire', 'Heat', 'Drought', 'Hurricane'],
                               
                          datasets: [
                                    //  {
                                    //     label: 'National Averages',
                                    //     type:'line',
                                    //     data: nationalAverages,
                                    //     fill: false,
                                    //     borderColor: '#EC932F',
                                    //     // backgroundColor: '#EC932F',
                                    //     pointBorderColor: '#EC932F',
                                    //     pointBackgroundColor: '#EC932F',
                                    //     pointHoverBackgroundColor: '#EC932F',
                                    //     pointHoverBorderColor: '#EC932F',
                                    //     // yAxisID: 'y-axis-2'
                                    //    },
                                      {
                                        label: `${this.props.pins[0].COUNTY} County`,
                                        data: county1data,
                                        backgroundColor: "orange"
                                     },
                                     {
                                        label: `${this.props.pins[1].COUNTY} County`,
                                        data: county2data,
                                        backgroundColor: "yellow"
                                     }
                          
                                      ]
                        };
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
      <>
      <Bar
        height={225}
        width={225}
        data={this.state.compareData}
        options={options}
      />
      
      <Bar 
        height={225}
        width={225}
        data = {disastersData}
        // options={options}
      />
      </>
    );
  }
}

const mapStateToProps = ({ riskData, pins }) => ({
  riskData,
  pins
});

export default connect(mapStateToProps)(CompareChart);
