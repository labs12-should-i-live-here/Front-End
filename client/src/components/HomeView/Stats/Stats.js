import React, { Component } from "react";
import "../../../scss/Stats.scss";
import { connect } from "react-redux";
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js-cartesian-dist';

const PlotlyComponent = createPlotlyComponent(Plotly);

function Logger (prop){
  console.log('In logger, predictions: ', prop.pred.prediction);
  console.log('In logger, fips data: ', prop.historical);
  if(prop.historical.history){
    console.log('In logger, history =', Object.keys(prop.historical.history));
    console.log('In logger, values =  ', Object.values(prop.historical.history));

  }




  // let x = [];
  // if(prop.pred){
  //   for (let i = 0; i < 40; i++)
  //    x.push(prop.pred.prediction);
  // }
  return null;
}

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],     // more about "x": #scatter-x
        y: [6, 2, 3, 2 , 5, 8, 4, 6, 3,5],     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        }
      },
      {
        type: 'bar',      // all "bar" chart attributes: #bar
        x: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],     // more about "x": #scatter-x
        y: [6, 2, 3, 2 , 5, 8, 4, 6, 3,5],
        name: 'bar chart example' // #bar-name
      }
    ],
    fipsData: {}
  } };
 
  //JSON.parse(JSON.stringify(obj))
  componentWillReceiveProps(){
    console.log('In component receivedprops. prediction = ', this.props.coordinatePredictions.prediction /*.dry_spells*/);
    console.log('In component receivedprops. prediction = ', this.props.fipsCodePredictions /*.dry_spells*/);

  let fipsData = [];
    //console.log('In logger, predictions: ', prop.pred.prediction);
  console.log('In componentWillReceiveProps(), fips data: ', this.props.fipsCodePredictions);
  if(this.props.fipsCodePredictions.history){
    console.log('In componentWillReceiveProps(), history =', Object.keys(this.props.fipsCodePredictions.history));
    console.log('In componentWillReceiveProps(), values =  ', Object.values(this.props.fipsCodePredictions.history));
    fipsData = Object.values(this.props.fipsCodePredictions.history);
    console.log('first earthquake, flood, storm value',fipsData[0].earthquake,fipsData[0].flood,fipsData[0].storm);
  }


  const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  // pass in your object structure as array elements
  let name = getNestedObject(this.props.coordinatePredictions, ['prediction', 'dry_spells']);
  let dates = 'bum';
  let mame = 'bum';
  console.log('name = ', name)
  if( name){
    dates = Object.keys(name)
    mame = Object.values(Object.values(name))
  }
  let average = [];
  let max = [];
  if (mame.length >6  ){
  for (let i = 0; i < 10; i++){
    average.push(mame[i].avg);
    max.push(mame[i].max);
  }
}
  // console.log('In logger. dry_spells avg = ', average, max);  
  // console.log('In logger. dry_spells keys = ', dates);
  // console.log('In logger. dry_spells values = ', mame);
  // to access nested array, just pass in array index as an element the path array.
  // let city = getNestedObject(prop.pred, ['prediction']);
  // console.log('In logger', city);
  

    this.setState({data: [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: dates,     // more about "x": #scatter-x
        y: average,     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        },
        name: 'average'
      },
      {
        type: 'bar',      // all "bar" chart attributes: #bar
        x: dates,     // more about "x": #scatter-x
        y: max,
        name: 'max' // #bar-name
      }
    ],
    //pred: this.props.coordinatePredictions
    fipsData: fipsData
  });

  }//end componentwillReceiveProps
  
render() {
  
    //let pred = this.props.coordinatePredictions.prediction;
    //pred = JSON.parse(pred);
   
    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],     // more about "x": #scatter-x
        y: [6, 2, 3, 2 , 5, 8, 4, 6, 3,5],     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        }
      },
      {
        type: 'bar',      // all "bar" chart attributes: #bar
        x: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],     // more about "x": #scatter-x
        y: [6, 2, 3, 2 , 5, 8, 4, 6, 3,5],
        name: 'bar chart example' // #bar-name
      }
    ];
    let layout = {                     // all "layout" attributes: #layout
      title: 'Extreme Weather Events',  // more about "layout.title": #layout-title
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
      },
      annotations: [            // all "annotation" attributes: #layout-annotations
        {
          text: 'simple annotation',    // #layout-annotations-text
          x: 0,                         // #layout-annotations-x
          xref: 'paper',                // #layout-annotations-xref
          y: 0,                         // #layout-annotations-y
          yref: 'paper'                 // #layout-annotations-yref
        }
      ]
    };
    let config = {
      showLink: false,
      displayModeBar: true
    };

    if (this.state.fipsData.length >2)
        console.log('State fipsData is -----------------------> ', Object.values(this.state.fipsData[0]));
    let firstarr = [];
    // for (let i = 0; i < this.state.fipsData.length; i++)
    //   firstarr.push()

    var trace1 = {
      x: [2000, 2001, 2002, 2003, 2004, 2005],
      y: [20, 14, 23, 13, 17, 21, 9],
      name: 'Floods',
      type: 'bar'
    };
    
    var trace2 = {
      x: [2000, 2001, 2002, 2003, 2004, 2005],
      y: [20, 14, 23, 13, 17, 21, 9],
      name: 'Earthquakes',
      type: 'bar'
    };

    var trace3 = {
      x: [2000, 2001, 2002, 2003, 2004, 2005],
      y: [20, 14, 23, 13, 17, 21, 9],
      name: 'Hurricane',
      type: 'bar'
    };

    var trace4 = {
      x: [2000, 2001, 2002, 2003, 2004, 2005],
      y: [20, 14, 23, 13, 17, 21, 9],
      name: 'Storm',
      type: 'bar'
    };

    var trace5 = {
      x: [2000, 2001, 2002, 2003, 2004, 2005],
      y: [20, 14, 23, 13, 17, 21, 9],
      name: 'Fire',
      type: 'bar'
    };
    
    var data2 = [trace1, trace2, trace3, trace4, trace5];
    
    var layout2 = {barmode: 'stack'};
    
    
    // Enter a speed between 0 and 180
var level = Math.floor(Math.random()*180);

// Trig to calc meter point
var degrees = 180 - level,
     radius = .5;
var radians = degrees * Math.PI / 180;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data3 = [{ type: 'scatter',
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: 'risk',
    text: level,
    hoverinfo: 'text+name'},
  { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
  rotation: 90,
  text: ['GET OUT!', 'Very Risky', 'Risky', 'Average', 'Safe',
            'Very Safe', ''],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:['#FF0000', '#FF8000',
                         '#FFB266', '#FFFF66',
                         '#B2FF66', '#00FF00',
                         'rgba(255, 255, 255, 0)']},
  labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout3 = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: '<b>Risk Level</b> <br> ',
  height:500,
  width: 500,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};



      //pred = pred.toJSON();
    
    //console.log('coordinate predictions',/* this.props.coordinatePredictions.prediction, */ pred /*, JSON.stringify(pred).dry_spells*/)
    return (
      <div>
            {this.props.fetchingPredictionData ||
            this.props.fetchingHistoricalData ? (
              <div>
              <h2>FETCHING DATA...</h2>
              <PlotlyComponent className="whatever"  layout={layout} config={config}/>
              </div>
            ) : (
              <div>
              <Logger pred = {this.props.coordinatePredictions} historical = {this.props.fipsCodePredictions} />
              {/* <Logger historical = {this.props.fipsCodePredictions} />  */}
              <PlotlyComponent className="nobodyknows" data= {data3} layout={layout3} config={config}/>
              <PlotlyComponent className="nobodyknows" data= {data2} layout={layout2} config={config}/>
              <PlotlyComponent className="nobodyknows" data={this.state.data} layout={layout} config={config}/>
              
              


              
              </div>
            )}
            
      
 
      </div>
    );
  }
  
  pastMode = () => {
    console.log("pastMode");
    // this.props.fetchHistoricalData(this.state.historySelections);
  };


}// end component

const mapStateToProps = ({
  error,
  fetchingPredictionData,
  fetchingHistoricalData,
  coordinatePredictions,
  fipsCodePredictions
}) => ({
  error,
  fetchingPredictionData,
  fetchingHistoricalData,
  coordinatePredictions,
  fipsCodePredictions
});

export default connect(mapStateToProps)(Stats);
