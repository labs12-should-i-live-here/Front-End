import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "axios";
import Chart from "chart.js";
import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchHistoricalData,
  fetchPredictionData,
  fetchRiskData,
  savePin
} from "../../../actions";
import "../../../scss/Map.scss";
import counties from "./counties2.json";
import { totalDamage } from "./damages_by_county.js";
import { danger_bins } from "./danger_bins.js";

import "./styles.css";

// const CompareNav = styled.div`
//   width: 100%;
//   height: 40px;
//   position: absolute;
//   z-index: 1;
//   opacity: 1;
//   display: flex;

//   align-items: center;
// `;

// const Button = styled.button`
//   display: block;
//   margin: 0px auto;
//   width: 20%;
//   height: 100%;
//   padding: 10px;

//   border: none;
//   border-radius: 3px;
//   font-size: 12px;
//   text-align: center;
//   color: #fff;
//   background: #e66;
//   opacity: 0.75;
//   cursor: pointer;
// `;

// const MapOverlay = styled.div`
//   font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
//   background-color: #f0ead6;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   position: absolute;
//   top: 100px;
//   right: 30px;
//   font-weight: bold;
//   z-index: 1;
//   width: 25%;
//   height: 100px;
//   padding: 10px;
//   display: block;
// `;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  state = {
    zoom: 3.1,
    minZoom: 2,
    coordinates: { latitude: 37.8283, longitude: -94.5795 },
    historySelections: {
      fipscode: 17033,
      startyear: 1990,
      endyear: 2019
    },
    pins: this.props.pins,
    style: "mapbox://styles/livesafe/cjvodc5af09t31dm8u2qhri51",
    toggler: true
  };
  //TODO: link this link with the fly-in

  scroll = () => {
    document.querySelector(".three").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {

    
    return (
      <div id="map" ref={el => (this.mapContainer = el)} className="map">
        <div id="menu-a">
          <h2>Layers</h2>
        </div>
        <div className="controls">
          <h2>Controls</h2>
          <button id="compare">
            {this.state.toggler ? "Compare" : "Return"}
          </button>

          <a href="https://loving-brown-ae4f7d.netlify.com">Browse</a>
        </div>
        <pre id="features" />

        <div id="map-overlay" className="map-overlay" />
        <div id="chart-title2" className="chart-title2">
          Total Risk
        </div>
        <canvas id="map-chart" className="map-chart">
        
        </canvas>
        {/* <MapOverlay> Amina kodugumunun County'si</MapOverlay>  */}

        {/* {( this.state.pins.length < 2) ? 
        (<div><Button id='compare' style={{display: 'none'}}  >{(this.state.toggler % 2 === 0) ? 'Compare' : 'Return'}</Button>
         <Button id='browse' style={{display: 'none'}} >Browse</Button></div>): 
       
        (<CompareNav>
          <Button id='compare' style={{display: 'block'}} onClick = {this.compare} >{(this.state.toggler % 2 === 0) ? 'Compare' : 'Return'}</Button>
          <Button id='browse'>Browse</Button>
        </CompareNav> )} */}

        {/* <div>
          <button id='compare'>Compare</button>
          <br/>
          <button id='fly'>Browse</button>
        </div> */}
      </div>
    );
  }

  componentDidMount() {
    this.initMap();
    //  if (this.props.dark) {
    //    this.setState({
    //      style: "mapbox://styles/brilles/cjv6tzh284d5x1fqqydk5mi8h"
    //    });
    //  }
  }

  initMap = () => {
    // create map with state values   // create map with state values
    const { zoom, minZoom } = this.state;
    const { longitude, latitude } = this.state.coordinates;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.state.style,
      center: [longitude, latitude],
      zoom,
      minZoom
    });
    

    //connect to menu-b to test it

    // load layers
    map.on("load", () => {


      // map.addSource("countys", {
      //   type: "vector",
      //   url: "mapbox://mapbox.82pkq93d"
      // });

      map.addSource("totalrisk", {
        type: "vector",
        url: "mapbox://livesafe.ctlgoa5o"
      });

      map.addLayer ({
        id: "countys",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://mapbox.82pkq93d"
        },
        "source-layer": "original",
        paint: {
          "fill-outline-color": "rgb(255, 115, 0)",
          "fill-color": "rgba(255, 115, 0, .1)",
          "fill-opacity": 0.3
        },
       //filter: ["in", "FIPS", ""]
      })

      map.addLayer({
        id: "Counties",
        type: "fill",
        source: {
          type: "geojson",
          data: counties
        },
        paint: {
          "fill-outline-color": "rgba(0,0,0,0)",
          "fill-color": "rgba(0,0,0,0)"
        }
      });

      map.addLayer({
        id: "Counties Highlighted",
        type: "fill",
        source: {
          type: "geojson",
          data: counties
        },
        paint: {
          "fill-outline-color": "rgb(255, 115, 0)",
          "fill-color": "rgba(255, 115, 0, .1)"
        },
        filter: ["in", "FIPS", ""]
      });

      map.addLayer({
        id: "Earthquake Risk Zone",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://brilles.2qq6qnqp"
        },
        "source-layer": "1__quake_contour-5vbtwp",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": [
            "interpolate",
            ["linear"],
            ["get", "pga"],
            0.5,
            "hsl(245, 96%, 47%)",
            1.25,
            "hsl(120, 100%, 54%)",
            2,
            "hsl(64, 100%, 40%)",
            10.5,
            "hsl(35, 100%, 40%)",
            54.5,
            "hsl(0, 100%, 40%)"
          ],
          "line-width": 1
        }
      });

      map.addLayer({
        id: "Earthquakes",
        type: "heatmap",
        source: {
          type: "vector",
          url: "mapbox://livesafe.cjvn8h2c30bcw2xmja9dpoaq7-7iwaw"
        },
        "source-layer": "quakes1",
        paint: {
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            1,
            9,
            3
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.1,
            "rgb(103,169,207)",
            0.2,
            "rgb(209,229,240)",
            0.4,
            "#fbec57",
            0.8,
            "#fbc457",
            1,
            "#fb5757"
          ],
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20]
        }
      });

      map.addLayer({
        id: "Quake Events",
        type: "circle",
        source: {
          type: "vector",
          url: "mapbox://brilles.2xbld1lx"
        },
        "source-layer": "quakes1-1p0ws7",
        paint: {
          "circle-color": "red"
        }
      });

      map.addLayer({
        id: "San Andreas Fault",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://livesafe.cjvnzaaao06dg2ypfj08fw02n-2td4t"
        },
        "source-layer": "fl",
        paint: {
          "line-color": "black"
        }
      });

      // map.addLayer({
      //   id: "Risk by County",
      //   type: "fill",
      //   source: {
      //     type: "vector",
      //     url: "mapbox://livesafe.ctlgoa5o"
      //   },
      //   "source-layer": "danger-8xjejj"
      //   },
      // );

      map.addLayer({
        id: "Flood Events",
        type: "heatmap",
        source: {
          type: "vector",
          url: "mapbox://livesafe.6j9dlgvl"
        },
        "source-layer": "floods-4gxba6",
        paint: {
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            1,
            9,
            3
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.4,
            "rgba(33,102,172,0.2)",
            1,
            "rgba(37,102,172,0.5)"
          ],
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20]
        }
      });

      map.addLayer({
        id: "Tornado Events",
        type: "circle",
        source: {
          type: "vector",
          url: "mapbox://livesafe.81a8t1f6"
        },
        "source-layer": "tornadoes-3kygrw",
        paint: {
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            0,
            "hsla(0, 53%, 59%, 0)",
            1,
            "hsla(96, 100%, 49%, 0.63)",
            2,
            "hsl(120, 100%, 49%)",
            3,
            "hsl(51, 100%, 53%)",
            4,
            "hsl(25, 100%, 49%)",
            5,
            "hsl(0, 100%, 49%)"
          ],
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 0, 1, 2, 3],
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            0,
            0,
            1,
            1,
            2,
            3,
            3,
            3,
            4,
            4,
            5,
            5
          ]
        }
      });

      map.addLayer({
        id: "Major Storm Events",
        type: "heatmap",
        source: {
          type: "vector",
          url: "mapbox://livesafe.dnwen5g1"
        },
        "source-layer": "storms-91hh4e",
        paint: {
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            1,
            9,
            3
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.1,
            "rgb(103,169,207)",
            0.2,
            "rgb(209,229,240)",
            0.4,
            "#fbec57",
            0.8,
            "#fbc457",
            1,
            "#fb5757"
          ],
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 5]
        }
      });

      map.addLayer({
        id: "Hurricane Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Hurricane"],
            0,
            "rgba(72,253,48,0.5)",
            0.2,
            "rgba(250, 253, 48,0.5)",
            3.6,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Drought Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Drought"],
            0,
            "rgba(72,253,48,0.5)",
            2,
            "rgba(250, 253, 48,0.5)",
            6.677083461247136,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Fire Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Fire"],
            0,
            "rgba(72,253,48,0.5)",
            1.2,
            "rgba(250, 253, 48,0.5)",
            5.209486152841421,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Heat Wave Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Heat"],
            0,
            "rgba(72,253,48,0.5)",
            1,
            "rgba(250, 253, 48,0.5)",
            5.181783550292085,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Winter Weather Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Winter Weather"],
            0,
            "rgba(72,253,48,0.5)",
            4,
            "rgba(250, 253, 48,0.5)",
            7.817222785508166,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Tornado Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Tornado"],
            0,
            "rgba(72,253,48,0.5)",
            1,
            "rgba(250, 253, 48,0.5)",
            4.663439094112067,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Major Storm Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Storm"],
            0,
            "rgba(48, 253, 203,0.5)",
            4,
            "rgba(72,253,48,0.5)",
            5,
            "rgba(250, 253, 48,0.5)",
            8.19478163844336,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Flood Risk",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.9fbdath3"
        },
        "source-layer": "log_noaa_by_county-crdhqa",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "Flood"],
            0,
            "rgba(72,253,48,0.5)",
            3,
            "rgba(250, 253, 48,0.5)",
            6.539585955617669,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Disaster Damages",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.drz5efzq"
        },
        "source-layer": "damages_by_county-c0mvgf",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "damage"],
            0,
            "rgba(48, 253, 203,0.5)",
            5,
            "rgba(72,253,48,0.5)",
            7,
            "rgba(250, 253, 48,0.5)",
            10,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Disaster Deaths",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.drz5efzq"
        },
        "source-layer": "damages_by_county-c0mvgf",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "deaths"],
            0,
            "rgba(72,253,48,0.5)",
            1,
            "rgba(250, 253, 48,0.5)",
            3.1126050015345745,
            "rgba(253,50,48,0.5)"
          ]
        }
      });

      map.addLayer({
        id: "Sea Levels",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://livesafe.3lxztgam"
        },
        "source-layer": "sea_level-6ugk2j",
        paint: {
          "fill-color":
            [
              "interpolate",
              ["linear"],
              ["get", "mag"],
              2010,
              "#62aaff",
              2200,
              "#75CFF0"
            ] && "#75CFF0"
        }
      });

      const toggleableLayers = [
        "Earthquake Risk Zone",
        "Earthquakes",
        "Tornado Events",
        "Flood Risk",
        "Major Storm Risk",
        "Hurricane Risk",
        "Fire Risk",
        "Heat Wave Risk",
        "Winter Weather Risk",
        "Tornado Risk",
        "Disaster Damages",
        "Disaster Deaths"
      ];
      // const toggleableLayers = ["Quakes"];

      toggleableLayers.map((layer, index) => {
        const id = toggleableLayers[index];
        const link = document.createElement("a");
        link.href = "#";
        // link.className = "active";
        link.textContent = id;
        map.setLayoutProperty("Counties", "visibility", "visible");
        map.setLayoutProperty("Counties Highlighted", "visibility", "visible");
        map.setLayoutProperty("Earthquake Risk Zone", "visibility", "none");
        map.setLayoutProperty("Quake Events", "visibility", "none");
        map.setLayoutProperty("Earthquakes", "visibility", "none");
        map.setLayoutProperty("San Andreas Fault", "visibility", "none");
        map.setLayoutProperty("Sea Levels", "visibility", "none");
        map.setLayoutProperty("Flood Events", "visibility", "none");
        map.setLayoutProperty("Tornado Events", "visibility", "none");
        map.setLayoutProperty("Major Storm Events", "visibility", "none");
        map.setLayoutProperty("Hurricane Risk", "visibility", "none");
        map.setLayoutProperty("Drought Risk", "visibility", "none");
        map.setLayoutProperty("Fire Risk", "visibility", "none");
        map.setLayoutProperty("Heat Wave Risk", "visibility", "none");
        map.setLayoutProperty("Winter Weather Risk", "visibility", "none");
        map.setLayoutProperty("Tornado Risk", "visibility", "none");
        map.setLayoutProperty("Major Storm Risk", "visibility", "none");
        map.setLayoutProperty("Flood Risk", "visibility", "none");
        map.setLayoutProperty("Disaster Damages", "visibility", "none");
        map.setLayoutProperty("Disaster Deaths", "visibility", "none");

        link.onclick = function(e) {
          // toggle layer
          const clickedLayer = this.textContent;

          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, "visibility");

          if (visibility === undefined) {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else if (visibility === "visible") {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };
        // Where the data is coming into from the FLASK app
        const layers = document.getElementById("menu-a");
        return layers.appendChild(link);
      });
      // sea level rise by year
      // const years =[
      //   '2010',
      //   '2020',
      //   '2030',
      //   '2040',
      //   '2050',
      //   '2060',
      //   '2070',
      //   '2080',
      //   '2090',
      //   '2100',
      //   '2150',
      //   '2200'
      // ]

      //         function filterBy(years) {

      //           var filters = ['==', 'year', years];
      //           map.setFilter('year', filters);

      //           document.getElementById('slider').textContent = years[years];
      //           }
      //           filterBy(0);

      // document.getElementById('slider').addEventListener('input', function(e) {
      // var years = parseInt(e.target.value, 10);
      // filterBy(years);})
    });

    map.doubleClickZoom.disable();
    // Create a popup, but don't add it to the map yet.
    var popupNoClose = new mapboxgl.Popup({
      closeButton: false
    });


    let overlay = document.getElementById('map-overlay');
    let chart = document.getElementById('map-chart');
    let chartTitle = document.getElementById('chart-title2');

    map.on("click", "countys", e => {

      map.getCanvas().style.cursor = 'pointer';


      
      console.log('county information:    ', e.features[0])
      const filter = ["in", "FIPS", e.features[0].properties];
      map.setFilter("Counties Highlighted", filter);

      let feature = e.features[0];

      let danger_level = danger_bins[feature.properties.FIPS];
      let data = {
        labels: [
            // "Total Risk",
        ],
        datasets: [
            {
                data: [ danger_level, 5- danger_level ],
                backgroundColor: [
                    "#D00D1E",
                    "#FFFFF4"
                ]
            }]
    };
    
    
    // main danger gauge
    let myDoughnutChart = new Chart(chart, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: false,
          maintainAspectRatio: false,
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI
        }
      });
      // console.log(e.lngLat);
      // new mapboxgl.Popup()
      //   .setLngLat(e.lngLat)
      //   .setHTML(`${e.features[0].properties.NAME} County`)
      //   .addTo(map);

      // const filter = ["in", "FIPS", e.features[0].properties];
      // map.setFilter("Counties Highlighted", filter);

      // let feature = e.features[0];

               // Render found features in an overlay.
      overlay.innerHTML = '';    
     
      let title = document.createElement('h1');
      title.textContent = `${feature.properties.COUNTY}`;

      let population = document.createElement('div');
      population.textContent = 'County Population : ' + feature.properties.population;
      let income = document.createElement('div');
      income.textContent = 'Median Income : $ ' + Object.values(feature.properties)[2];

      const avgDamagePerPersonPerYear = 93;
      const deathSum = 99;
      const injurySum = 990;
      
      overlay.appendChild(title); 
      
      if (totalDamage[0][feature.properties.FIPS]) {
        let countyDamage = Math.round(totalDamage[0][feature.properties.FIPS]);
        let avg = countyDamage/feature.properties.population/23;
       // let percentOfNationalAverage = Math.round(avg/avgDamagePerPersonPerYear);

        let damage = document.createElement('p');
        damage.textContent = "Total Damage : $ " + Math.round(totalDamage[0][feature.properties.FIPS]) + "\n Damage/person/year : $ " + Math.round(avg*10)/10;
      
        let damage2 = document.createElement('p')
        damage2.textContent = "\n % of National Average: " + Math.round(avg/avgDamagePerPersonPerYear*100) + "%";
      
        let deaths = document.createElement('p')
        deaths.textContent = "Deaths caused by disasters: " + Math.round(totalDamage[1][feature.properties.FIPS]);

        let injuries = document.createElement('p')
        injuries.textContent = "Injuries caused by disasters: " + Math.round(totalDamage[2][feature.properties.FIPS]);

       
        overlay.appendChild(damage);
        overlay.appendChild(damage2);
        overlay.appendChild(deaths);
        overlay.appendChild(injuries);
       
      } //end if
      
      let dateRange= document.createElement('p')
      dateRange.textContent = "(Totals over the range 1996-2018)";
      overlay.appendChild(population);
      overlay.appendChild(income);
      overlay.appendChild(dateRange);

      overlay.style.display = 'block';
      chart.style.display = 'block';
      chartTitle.style.display = 'block';
      // // Add features that share the same county name to the highlighted layer.
      // map.setFilter('counties-highlighted', ['in', 'COUNTY', feature.properties.COUNTY]);

      // Display a popup with the name of the county
      popupNoClose.setLngLat(e.lngLat)
          .setText(`${feature.properties.COUNTY}`)
          .addTo(map);
    });

    map.on('mouseleave', 'countys', function() {
      map.getCanvas().style.cursor = '';
      popupNoClose.remove();
      map.setFilter('counties-highlighted', ['in', 'COUNTY', '']);
      overlay.style.display = 'none';
      chart.style.display = 'none';
      chartTitle.style.display = 'none';
  });

    map.on("dblclick", "Counties", e => {
      const userId = this.props.userId;
      const filter = ["in", "FIPS", e.features[0].properties.FIPS];
      map.setFilter("Counties Highlighted", filter);
      const pin = {
        userId: this.props.userId,
        LATITUDE: e.lngLat.lat,
        LONGITUDE: e.lngLat.lng,
        COUNTY: e.features[0].properties.NAME,
        notes: "Is this working?",
        home: 0
      }; // refactor to native format

      // Updates store, DB
      this.props.pins.push(pin);
      this.props.savePin(pin);

      this.props.fetchHistoricalData({
        fipscode: e.features[0].properties.FIPS,
        startyear: 1998,
        endyear: 2019
      });

      this.props.fetchRiskData({
        fipscode: e.features[0].properties.FIPS
      });

      this.props.fetchPredictionData({
        latitude: pin.LATITUDE,
        longitude: pin.LONGITUDE
      });

      const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
        pin.LONGITUDE
      },${pin.LATITUDE}.json?access_token=${
        process.env.REACT_APP_MAPBOX_TOKEN
      }`;

      axios
        .get(URL)
        .then(res => {
          // ! DO NOT STORE THE RESPONSES IN A DB, THAT VIOLATES MAPBOX's TOS.
          this.props.pinAddresses.push(res.data.features[0].place_name);
          const id = this.props.pins.length - 1;
          let popupContent = `<div class="address"><h3>Address:</h3> <p>${
            this.props.pinAddresses[id]
          }</p><h3>County:</h3><p> ${this.props.pins[id].COUNTY}</p></div>`;

          let popup = new mapboxgl.Popup({
            className: "popup"
          }).setHTML(popupContent);

          let marker = new mapboxgl.Marker({
            color: "#2e64ab"
          })
            .setLngLat([pin.LONGITUDE, pin.LATITUDE])
            .setPopup(popup)
            .addTo(map)
            .togglePopup();

          popup.on("open", e => {
            this.setState({
              coordinates: {
                latitude: e.target._lngLat.lat,
                longitude: e.target._lngLat.lng
              }
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
      // TODO: add this area not supported for outside of US
    });

    // add map controls
    map
      // .addControl(
      //   new MapboxGeocoder({
      //     accessToken: mapboxgl.accessToken,
      //     mapboxgl,
      //     countries: "us",
      //     marker: false
      //   })
      // )
      .addControl(new mapboxgl.NavigationControl())
      .addControl(new mapboxgl.FullscreenControl())
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      countries: "us",
      marker: false
    });

    document.getElementById("geocoder").appendChild(geocoder.onAdd(map));

    let toggler = -1;
    // Create a popup for displaying county name
    var countyPopup = new mapboxgl.Popup({
      closeButton: false
    });

    var countyPopup2 = new mapboxgl.Popup({
      closeButton: false
    });

    let pins = this.props.pins;

    document.getElementById("compare").addEventListener("click", function(e) {
      //const { pins } = this.state;

      var features = map.queryRenderedFeatures(e.point, {
        layers: ["counties"]
      });

      toggler++;

      let flyToLocations = [];
      let camera = {};
      for (let i = 0; i < pins.length; i++) {
        let { LATITUDE, LONGITUDE } = pins[i];
        //let center = [latitude, longitude];
        camera = {
          center: [LONGITUDE, LATITUDE],
          zoom: 11.68,
          bearing: Math.floor(Math.random() * 80),
          pitch: 80,
          speed: 0.75, // make the flying slow
          curve: 1, // change the speed at which it zooms out

          // This can be any easing function: it takes a number between
          // 0 and 1 and returns another number between 0 and 1.
          easing: function(t) {
            return t;
          }
        };

        flyToLocations.push(camera);
      }

      playback(0, flyToLocations);
    }); // end compare event listener

    // map.on('mouseenter', 'county-lines', function (e) {
    //   var features = map.queryRenderedFeatures(e.point);
    //   //document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
    //   console.log( features[0].properties.COUNTY, features[0].properties.class, features[0].properties.name, typeof features);
    //   //if (features.properties.NAME)
    //   //document.getElementById('features').innerHTML = JSON.stringify(features.properties.NAME, null, 2);
    //   console.log('zoomend');
    //   // Change the cursor style as a UI indicator.
    //   map.getCanvas().style.cursor = 'pointer';

    //   // Single out the first found feature.
    //   if (features[0].properties.COUNTY) {
    //     //var feature = e.features[0];
    //     ///console.log('e.features[0] = ', feature)

    //       // Query the counties layer visible in the map. Use the filter
    //   // param to only collect results that share the same county name.
    //   var relatedFeatures = map.querySourceFeatures('counties', {
    //   sourceLayer: 'original',
    //   filter: ['in', 'COUNTY', features[0].properties.COUNTY]
    //   });
    //   console.log('related features =', relatedFeatures, relatedFeatures[0].properties)
    //   }//endif

    //   //let bum = Math.floor(Math.random()*2)
    //   if( features[0].properties.COUNTY ){
    //       // Display a popup with the name of the county
    //     countyPopup.setLngLat(e.lngLat)
    //     .setText(features[0].properties.COUNTY)
    //     .addTo(map);
    //   }// } else if (features[0].properties.COUNTY && bum === 0)
    //   //   map.remove(countyPopup);

    // }); //end map.on(click)

    var locations = [
      {
        id: "1",
        title: "Manhattan",
        description:
          "Even if you think you know Manhattan—its world-class museums, fine dining and unforgettable views—the borough always has something new and exciting in store.",
        camera: {
          center: [-74.007, 40.7437],
          bearing: 25.3,
          zoom: 11.5
        }
      },
      {
        id: "4",
        title: "Queens",
        description:
          "Taste food from around the globe, watch Mets baseball and US Open tennis, see cutting-edge art and more in one of the world's most diverse places.",
        camera: {
          center: [-73.8432, 40.6923],
          bearing: 36,
          zoom: 11.37
        }
      },
      {
        title: "Boroughs of new york",
        description:
          "New York City is made up of five boroughs: the Bronx, Brooklyn, Manhattan, Queens and Staten Island. Each one has enough attractions—and enough personality—to be a city all its own.",
        camera: {
          center: [-74.0315, 40.6989],
          zoom: 9.68,
          bearing: 0,
          pitch: 0
        }
      }
    ];
    function playback(index, flyToLocations) {
      //title.textContent = locations[index].title;
      //description.textContent = locations[index].description;

      // map.addLayer({
      //   "id": "counties-highlighted",
      //   "type": "fill",
      //   "source": "counties",
      //   "source-layer": "original",
      //   "paint": {
      //   "fill-outline-color": "#484896",
      //   "fill-color": "#6e599f",
      //   "fill-opacity": 0.75
      //   },
      //   "filter": ["in", "COUNTY", ""]
      //   }, 'settlement-label'); // Place polygon under these labels.
      map.addLayer(
        {
          id: "total-risk",
          type: "fill",
          source: "totalrisk",
          "source-layer": "danger-8xjejj",

          //         "interpolate",
          // ["exponential", 0.5],
          // ["zoom"],
          // 15,
          // "#e2714b",
          // 22,
          // "#eee695"
          //'filter': ['==', 'isCounty', true],
          paint: {
            "fill-color": {
              property: "danger",
              stops: [[0, "#F0334C"], [600, "#FB1"], [3000, "#82F570"]]
            },
            "fill-opacity": 0.35
          }
          // "paint": {
          //   'paint': {
          //     'fill-color': [
          //     'interpolate',
          //     ['linear'],
          //     ['get', 'danger'],
          //     0, '#F2F12D',
          //     250, '#EED322',
          //     450, '#E6B71E',
          //     ],
          //     'fill-opacity': 0.75
          //     }
          // }
        },
        "settlement-label"
      ); // Place polygon under these labels.

      // map.addLayer({
      //   "id": "highlight",
      //   "type": "fill",
      //   "source": 'counties',
      //   "source-layer": "original",
      //   "paint": {
      //   "fill-outline-color": "#2ABB17",
      //   "fill-color": "#fd6b50",
      //   "fill-opacity": 0.25
      //   },
      //  //"filter": ["in", "COUNTY", ""],
      //  "filter": ["==", "COUNTY", ""]
      //   }, 'settlement-subdivision-label'); // Place polygon under the neighborhood labels.

      map.addLayer(
        {
          id: "county-lines",
          type: "line",
          source: "counties",
          "source-layer": "original",
          paint: {
            "line-color": "#2ABB17",
            "line-width": 3
            //"fill-opacity": 0.25
          }
          //"filter": ["==", "borocode", ""]
        },
        "settlement-subdivision-label"
      ); // Place polygon under the neighborhood labels.

      //highlightBorough(locations[index].id ? locations[index].id : '');
      if (toggler % 2 === 0) {
        // Animate the map position based on camera properties
        flyToLocations[index].bearing = Math.floor(Math.random() * 70);
        map.flyTo(flyToLocations[index]);

        map.once("moveend", function() {
          // Duration the slide is on screen after interaction
          window.setTimeout(function() {
            // Increment index
            index = index + 1 === flyToLocations.length ? 0 : index + 1;
            playback(index, flyToLocations);
          }, 6000); // After callback, show the location for 6 seconds.
        });
      } else {
        map.removeLayer("total-risk");
        map.removeLayer("county-lines");
        map.flyTo(flyToLocations[0]);
      }
    }

    // Populate pins on map
    // this.props.pins.map(pin => {
    //   let popup = new mapboxgl.Popup().setText([
    //     pin.latitude,
    //     pin.longitude // add notes / input for notes etc
    //   ]);

    //   new mapboxgl.Marker()
    //     .setLngLat([pin.longitude, pin.latitude])
    //     .setPopup(popup)
    //     .addTo(map);
    // });

    // const marker = new mapboxgl.Marker({
    //   draggable: true
    // })
    //   .setLngLat([longitude, latitude])
    //   .setPopup(popup)
    //   .addTo(map);

    // const update = updatedCoordinates => {
    //   this.setState({ coordinates: updatedCoordinates });
    //   this.props.fetchPredictionData(this.state.coordinates);
    // };

    // function onDragEnd() {
    //   const lngLat = marker.getLngLat();

    //   const updatedCoordinates = {
    //     latitude: lngLat.lat.toPrecision(8),
    //     longitude: lngLat.lng.toPrecision(8)
    //   };
    //   update(updatedCoordinates);
    // }

    // this.props.fetchPredictionData(this.state.coordinates);
    // marker.on("dragend", onDragEnd);
  };
}

const mapStateToProps = ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections,
  pins,
  addingPin,
  userId,
  fetchingAddress,
  pinAddresses,
  dark,
  fipsCodePredictions
}) => ({
  fetchingPredictionData,
  coordinatePredictions,
  fetchingHistoricalData,
  historySelections,
  pins,
  addingPin,
  userId,
  fetchingAddress,
  pinAddresses,
  dark,
  fipsCodePredictions
});

export default connect(
  mapStateToProps,
  { fetchPredictionData, fetchHistoricalData, savePin, fetchRiskData }
)(Map);
