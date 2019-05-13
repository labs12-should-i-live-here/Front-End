import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { RightArrowCircle } from "styled-icons/boxicons-regular/RightArrowCircle";
import { connect } from "react-redux";

const BlackCompare = styled(Compare)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
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

  render() {
    return (
      <>
        <header>
          <h2>Pins</h2>
          <Link exact to="/comparison">
            compare <ArrowWhite />
          </Link>
        </header>

        <div className="main-compare-card">
          <div className="top">
            {this.props.pinAddresses[0] ? (
              this.props.pinAddresses.map((pin, index) => (
                <p className="card" key={index}>
                  {pin}
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

export default connect(mapStateToProps)(Compare3);
