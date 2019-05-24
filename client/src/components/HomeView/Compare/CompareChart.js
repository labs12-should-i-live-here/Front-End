import React, { Component } from "react";
import { Bar} from "react-chartjs-2";
import { connect } from "react-redux";
import { disasters } from "../Map/disasters_per_county";
import { averages } from "../Map/disaster_averages.js"
import { Link, NavLink } from "react-router-dom";
import { danger_bins } from '../Map/danger_bins.js'
import './styles.css';


var DoughnutChart = require("react-chartjs-2").Doughnut;

let gaugedata ={};

let danger_level1= 0;

let danger_level2  = 0;
let dangerData1 = {};
let dangerData2 = {};

  let options3 = {
          responsive: true,
          maintainAspectRatio: false,
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI
        }

// var MyComponent = React.createClass({
//   render: function() {
//     return <DoughnutChart data={chartData} options={chartOptions}/>
//   }
// });

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

const options2 = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of Recorded Events",
          fontSize: 20
        },
        
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Disaster Type   (Data for 1996-2018)",
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
    },
    index: 0
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
  // componentDidMount() {
  //   console.log(this.props.pins[0].COUNTY, this.props.riskData[0].fipscode, this.props.riskData[0].risk.categorylabel);
  //   console.log(disasters[0][this.props.riskData[0].fipscode], disasters[1][this.props.riskData[0].fipscode], disasters[2][this.props.riskData[0].fipscode]);
    
  //   county1data = [];
  //   county2data = [];
  //   //for (let i = 0; i < allowedComparisons ; i++)
  //     for (let j = 0; j < numOfEvents ; j++)
  //       county1data.push(disasters[j][this.props.riskData[0].fipscode]);

  //     for (let j = 0; j < numOfEvents ; j++)
  //       county2data.push(disasters[j][this.props.riskData[1].fipscode]);

  //     for (let j = 0; j < numOfEvents ; j++)
  //       nationalAverages.push(1/averages[j][this.props.riskData[1].fipscode]*disasters[j][this.props.riskData[1].fipscode]);

  //     console.log(county1data)

  //     // datasets: [{
  //     //   label: 'Sales',
  //     //   type:'line',
  //     //   data: [51, 65, 40, 49, 60, 37, 40],
  //     //   fill: false,
  //     //   borderColor: '#EC932F',
  //     //   backgroundColor: '#EC932F',
  //     //   pointBorderColor: '#EC932F',
  //     //   pointBackgroundColor: '#EC932F',
  //     //   pointHoverBackgroundColor: '#EC932F',
  //     //   pointHoverBorderColor: '#EC932F',
  //     //   yAxisID: 'y-axis-2'
  //     // }

  //   disastersData =   {labels: [ 'Winter', 'Storm', 'Flood', 'Fire', 'Heat', 'Drought', 'Hurricane'],
                               
  //                         datasets: [
  //                                   //  {
  //                                   //     label: 'National Averages',
  //                                   //     type:'line',
  //                                   //     data: nationalAverages,
  //                                   //     fill: false,
  //                                   //     borderColor: '#EC932F',
  //                                   //     // backgroundColor: '#EC932F',
  //                                   //     pointBorderColor: '#EC932F',
  //                                   //     pointBackgroundColor: '#EC932F',
  //                                   //     pointHoverBackgroundColor: '#EC932F',
  //                                   //     pointHoverBorderColor: '#EC932F',
  //                                   //     // yAxisID: 'y-axis-2'
  //                                   //    },
  //                                     {
  //                                       label: `${this.props.pins[0].COUNTY} County`,
  //                                       data: county1data,
  //                                       backgroundColor: "orange"
  //                                    },
  //                                    {
  //                                       label: `${this.props.pins[1].COUNTY} County`,
  //                                       data: county2data,
  //                                       backgroundColor: "yellow"
  //                                    }
                          
  //                                     ]
  //                       };
  //   if (this.props.riskData[1]) {
  //     this.setState({
  //       compareData: {
  //         labels: [
  //           `${this.props.pins[0].COUNTY}, ${
  //             this.props.riskData[0].risk.categorylabel
  //           }`,
  //           `${this.props.pins[1].COUNTY}, ${
  //             this.props.riskData[1].risk.categorylabel
  //           }`
  //         ],
  //         datasets: [
  //           {
  //             label: ["Total Risk"],
  //             data: [
  //               this.props.riskData[0].risk.category,
  //               this.props.riskData[1].risk.category
  //             ],
  //             backgroundColor: ["blue", "blue"]
  //           }
  //         ]
  //       }
  //     })}
  //   }


  
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
    console.log(this.props.pins[0].COUNTY, this.props.riskData[0].fipscode, this.props.riskData[0].risk.categorylabel);
    console.log(disasters[0][this.props.riskData[0].fipscode], disasters[1][this.props.riskData[0].fipscode], disasters[2][this.props.riskData[0].fipscode]);
    
    county1data = [];
    county2data = [];
    //for (let i = 0; i < allowedComparisons ; i++)
      for (let j = 0; j < numOfEvents ; j++){
        if ( j === 1)
        county1data.push(disasters[j][this.props.riskData[0].fipscode]/6);
        else
        county1data.push(disasters[j][this.props.riskData[0].fipscode]);
      }
      for (let j = 0; j < numOfEvents ; j++){
        if ( j === 1)
          county2data.push(disasters[j][this.props.riskData[1].fipscode]/6);
        else
          county2data.push(disasters[j][this.props.riskData[1].fipscode]);
      }

      for (let j = 0; j < numOfEvents ; j++){
        if ( j === 1)
        nationalAverages.push(1/averages[j][this.props.riskData[1].fipscode]*disasters[j][this.props.riskData[1].fipscode]*23/6);
        else
        nationalAverages.push(1/averages[j][this.props.riskData[1].fipscode]*disasters[j][this.props.riskData[1].fipscode]*23);

      }
        

      console.log(nationalAverages)

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

    //   {
    //     label: 'Line Dataset',
    //     data: [50, 50, 50, 50],

    //     // Changes this dataset to become a line
    //     type: 'line'
    // }
danger_level2 = danger_bins[this.props.riskData[1].fipscode];
danger_level1 = danger_bins[this.props.riskData[0].fipscode];
console.log(danger_level1, danger_level2)


// et data = {
//   labels: [
//       // "Total Risk",
//   ],
//   datasets: [
//       {
//           data: [ danger_level, 5- danger_level ],
//           backgroundColor: [
//               "#D00D1E",
//               "#FFFFF4"
//           ]
//       }]
// };

dangerData1= {
      // labels: [`${this.props.pins[0].COUNTY} County`],
      datasets: [
        {
            label: ["Total Risk"],
            data: [ danger_level1, 5- danger_level1 ],
            backgroundColor: [
                "#D00D1E",
                "yellow"
            ]
        }]

}

dangerData2= {
  // labels: `${this.props.pins[1].COUNTY} County`,
  datasets: [
    {
        label: ['National Averages'],
        data: [ danger_level2, 5- danger_level2 ],
        backgroundColor: [
            "#D00D1E",
            "yellow"
        ]
    }]

}
    
// {
//   labels: [
//       // "Total Risk",
//   ],
//   datasets: [
//       {
//           data: [ danger_level, 5- danger_level ],
//           backgroundColor: [
//               "#D00D1E",
//               "#FFFFF4"
//           ]
//       }]
// };

// data: data,

    disastersData =   {labels: [ 'Extreme Winter', 'Storm', 'Flood', 'Fire', 'Heat', 'Drought', 'Hurricane'],
                               
                          datasets: [
                                     {
                                        label: 'National Averages',
                                        type:'line',
                                        data: nationalAverages,
                                        fill: false,
                                        borderColor: 'hotpink',
                                        backgroundColor: 'black',
                                        // pointBorderColor: '#EC932F',
                                        // pointBackgroundColor: '#EC932F',
                                        // pointHoverBackgroundColor: '#EC932F',
                                        // pointHoverBorderColor: '#EC932F',
                                        // yAxisID: 'y-axis-2'
                                       },
                                      {
                                        label: `${this.props.pins[0].COUNTY} County`,
                                        data: county1data,
                                        backgroundColor: "orange",
                                        type: 'bar'
                                     },
                                     {
                                        label: `${this.props.pins[1].COUNTY} County`,
                                        data: county2data,
                                        backgroundColor: "yellow",
                                        type: 'bar'
                                     }
                          
                                      ]
                        };
    this.setData();
  }
  
  render() {
    return (
      <>
      {/* // <Bar
      //   height={225}
      //   width={225}
      //   data={this.state.compareData}
      //   options={options}
      // /> */}
      <div className = 'donut_title'>  
        <div className = 'title'>{this.props.pins[0].COUNTY} County </div>
        <div className = 'title'>{this.props.pins[1].COUNTY} County </div>
      </div>
      <div className = 'gauges'>
        <div className = "doughnut">
          <DoughnutChart data={dangerData1} options={options3} />
        </div>
        <div className = "doughnut">
          <DoughnutChart data={dangerData2} options={options3} />
        </div>
      </div>
      
      <Bar 
        height={225}
        width={225}
        data = {disastersData}
        options={options2}
      />
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
