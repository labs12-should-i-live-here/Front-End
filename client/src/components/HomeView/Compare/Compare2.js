import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { RightArrowCircle } from "styled-icons/boxicons-regular/RightArrowCircle";
import { connect } from "react-redux";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { changePinIndex } from "../../../actions";

const PlayGreen = styled(PlayCircle)`
  color: green;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;

const PlayGreenDisabled = styled(PlayCircle)`
  color: gray;
  height: 35px;
  width: 35px;
  border-radius: 6px;
`;

const ArrowWhite = styled(RightArrowCircle)`
  color: white;
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
          {this.props.pinAddresses[1] ? (
            <>
              <p>Click to tour your locations</p>
              <PlayGreen onClick={this.tour} />
            </>
          ) : (
            <PlayGreenDisabled />
          )}
          <Link exact to="/comparison">
            compare <ArrowWhite />
          </Link>
        </header>

        <div className="main-compare-card">
          <div className="top">
            {this.props.pinAddresses[0] ? (
              this.props.pinAddresses.map((pin, index) => (
                <p className="card" key={index}>
                  {<button onClick={this.sendPinIndex(index)}>{pin}</button>}
                </p>
              ))
            ) : (
              <p>No pins... double click map to add</p>
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
