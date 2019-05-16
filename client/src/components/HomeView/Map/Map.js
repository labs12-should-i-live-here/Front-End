import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPredictionData,
  fetchHistoricalData,
  savePin
} from "../../../actions";
import "../../../scss/Map.scss";
import axios from "axios";
import styled from "styled-components";
import { Pulse } from "styled-icons/boxicons-regular/Pulse";

const RedQuake = styled(Pulse)`
  color: red;
  height: 35px;
  width: 35px;
`;

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
    //Outside Map from LiveSafe Mapbox studio
    style: "mapbox://styles/livesafe/cjvodc5af09t31dm8u2qhri51"
  };

  render() {
    return (
      <div id="map" ref={el => (this.mapContainer = el)} className="map">
        <div id="menu-a">Map Layers</div>
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
    // create map with state values
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

      map.addLayer({
        id: "Counties",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://brilles.8m1jc8xq"
        },
        "source-layer": "2__quake_county-6aj5at",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "rgba(0, 132, 255, 1)",
          "line-width": 1
        }
      });

      map.addLayer({
        id: "Counties Highlighted",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://brilles.8m1jc8xq"
        },
        "source-layer": "2__quake_county-6aj5at",
        paint: {
          "fill-color": "rgba(0, 132, 255, 0.247)"
        },
        filter: ["in", "FIPS", ""]
      });

      map.addLayer({
        id: "Quake Risk",
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
          "line-color": "green",
          "line-width": 1
        }
      });

      map.addLayer({
        id: "Quake Heat Map",
        type: "heatmap",
        source: {
          type: "vector",
          url: "mapbox://livesafe.cjvn8h2c30bcw2xmja9dpoaq7-7iwaw"
        },
        "source-layer": "quakes1",
        paint:{
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            9, 3
            ],"heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(33,102,172,0)",
              0.1, "rgb(103,169,207)",
              0.2, "rgb(209,229,240)",
              0.4, "#fbec57",
              0.8, "#fbc457",
              1, "#fb5757"
              ],
              "heatmap-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 2,
                9, 20
                ]
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
          "line-color": "black","circle-stroke-color": "white",
          "circle-stroke-width": 1
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
        type: "circle",
        source: {
          type: "vector",
          url: "mapbox://livesafe.6j9dlgvl"
        },
        "source-layer": "floods-4gxba6",
        paint: {
          "circle-color": "#4c59f3"
        }
        },);

        map.addLayer({
          id: "Tornado Events",
          type: "circle",
          source: {
            type: "vector",
            url: "mapbox://livesafe.81a8t1f6"
          },
          "source-layer": "tornadoes-3kygrw",
          paint: {
            "circle-color": "#909090"
          }
          },);

          map.addLayer({
            id: "Major Storm Events",
            type: "heatmap",
            source: {
              type: "vector",
              url: "mapbox://livesafe.dnwen5g1"
            },
            "source-layer": "storms-91hh4e",
            paint:{
              "heatmap-intensity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 1,
                9, 3
                ],"heatmap-color": [
                  "interpolate",
                  ["linear"],
                  ["heatmap-density"],
                  0, "rgba(33,102,172,0)",
                  0.1, "rgb(103,169,207)",
                  0.2, "rgb(209,229,240)",
                  0.4, "#fbec57",
                  0.8, "#fbc457",
                  1, "#fb5757"
                  ],
                  "heatmap-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0, 2,
                    9, 5
                    ],

            }
            },);

            map.addLayer({
              id: "Sea Levels",
              type: "fill",
              source: {
                type: "vector",
                url: "mapbox://livesafe.3lxztgam"
              },
              "source-layer": "sea_level-6ugk2j",
              paint: {
                "fill-color": [
                  'interpolate',
                  ['linear'],
                  ['get', 'mag'], 
                  2010 , "#62aaff",
                  2200, "#75CFF0"
                ] && "#75CFF0"}});

      map.on("click,", "Counties", e => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`${e.features[0].properties.NAME} County`)
          .addTo(map);

        const filter = ["in", "FIPS", e.features[0].properties.FIPS];
        map.setFilter("Counties Highlighted", filter);
      });

      const toggleableLayers = [
        "Quake Risk",
        "Quake Heat Map",
        "Quake Events",
        "Tornado Events",
        "Flood Events",
        "Major Storm Events",
        "San Andreas Fault",
      ];
      // const toggleableLayers = ["Quakes"];

      toggleableLayers.map((layer, index) => {
        const id = toggleableLayers[index];
        const link = document.createElement("a");
        link.href = "#";
        // link.className = "active";
        link.textContent = id;
        map.setLayoutProperty("Quake Risk", "visibility", "none");
        map.setLayoutProperty("Counties", "visibility", "none");
        map.setLayoutProperty("Counties Highlighted", "visibility", "none");
        map.setLayoutProperty("Quake Events", "visibility", "none");
        map.setLayoutProperty("Quake Heat Map", "visibility", "none");
        map.setLayoutProperty("San Andreas Fault", "visibility", "none");
        map.setLayoutProperty("Sea Levels", "visibility", "none");
        map.setLayoutProperty("Flood Events", "visibility", "none");
        map.setLayoutProperty("Tornado Events", "visibility", "none");
        map.setLayoutProperty("Major Storm Events", "visibility", "none");
        
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

    map.on("dblclick", e => {
      const userId = this.props.userId;
      const pin = {
        userId: this.props.userId,
        LATITUDE: e.lngLat.lat,
        LONGITUDE: e.lngLat.lng,
        notes: "Is this working?",
        home: 0
      }; // refactor to native format

      // Updates store, DB
      this.props.pins.push(pin);
      this.props.savePin(pin);

      console.log(this.state.coordinates);
      this.props.fetchHistoricalData(this.state.historySelections);
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
          }</p></div>`;

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
  dark
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
  dark
});

export default connect(
  mapStateToProps,
  { fetchPredictionData, fetchHistoricalData, savePin }
)(Map);
