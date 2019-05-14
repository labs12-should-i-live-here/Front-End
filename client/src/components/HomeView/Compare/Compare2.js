import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { ArrowRight2 } from "styled-icons/icomoon/ArrowRight2";
import { connect } from "react-redux";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { changePinIndex } from "../../../actions";
import { MapMarkerAlt } from "styled-icons/fa-solid/MapMarkerAlt";
import { BuildingHouse } from "styled-icons/boxicons-solid/BuildingHouse";

const PlayGreen = styled(PlayCircle)`
  color: rgb(255, 255, 255);
  height: 35px;
  width: 35px;
  border-radius: 6px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
  margin-right: 8px;
`;

const PlayGreenDisabled = styled(PlayCircle)`
  color: rgba(255, 255, 255, 0.459);
  height: 35px;
  width: 35px;
  margin-right: 8px;
  border-radius: 6px;
`;

const HomeRed = styled(BuildingHouse)`
  color: red;
  height: 16px;
  width: 16px;
  margin-right: 8px;
  border-radius: 6px;
`;

const MapPinGreen = styled(MapMarkerAlt)`
  color: #2e64ab9c;
  height: 75px;
  width: 75px;
  margin-right: 5px;
`;

const MapPinGreenSmall = styled(MapMarkerAlt)`
  color: #2e64ab;
  height: 15px;
  width: 15px;
  padding-right: 5px;
`;

const ArrowBlack = styled(ArrowRight2)`
  color: black;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  padding-left: 5px;
  cursor: pointer;
`;

class Compare3 extends Component {
  //pulsing icon when addresses on store, change ket to uuid

  tour = () => {
    console.log("tour of counties to be implemented on this click!");
  };

  sendPinIndex = index => {
    console.log("index from ", index);
    this.props.changePinIndex(index);
  };

  render() {
    return (
      <>
        <header>
          <h2>Pins</h2>
          <div>
            {this.props.pinAddresses[1] ? (
              <>
                <PlayGreen onClick={this.tour} />
              </>
            ) : (
              <>
                {/* <span className="popup show">
                  You must have at least 2 pins to be be able to fly through
                  them. Add some, we promise it's cool!
                </span> */}
                <PlayGreenDisabled />
              </>
            )}
            <Link exact to="/comparison">
              compare <ArrowBlack />
            </Link>
          </div>
        </header>

        <div className="main-compare-card">
          <div className="top">
            {this.props.pinAddresses[0] ? (
              this.props.pinAddresses.map((pin, index) => (
                <p className="card" key={index}>
                  {
                    <>
                      <button onClick={this.sendPinIndex(index)}>
                        <MapPinGreenSmall />
                        <HomeRed />
                        {pin}
                      </button>
                    </>
                  }
                </p>
              ))
            ) : (
              <>
                <p>
                  <MapPinGreen />
                </p>
                <p className="msg">No pins... double click map to add</p>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ fetchingPredictionData, pinAddresses }) => ({
  fetchingPredictionData,
  pinAddresses
});

export default connect(
  mapStateToProps,
  { changePinIndex }
)(Compare3);
