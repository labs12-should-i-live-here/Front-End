import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { ArrowRight } from "styled-icons/feather/ArrowRight";
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

const ArrowBlue = styled(ArrowRight)`
  color: black;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  padding-left: 5px;
`;

class Compare3 extends Component {
  //pulsing icon when addresses on store, change ket to uuid

  render() {
    return (
      <>
        <header>
          <h2>Compare</h2>
          <div className="link">
            <p>
              click to compare! <ArrowBlue />
            </p>

            <Link exact to="/compare">
              <BlackCompare />
            </Link>
          </div>
        </header>
        <div className="main-compare-card">
          {this.props.pinAddresses[0] ? (
            this.props.pinAddresses.map((pin, index) => (
              <p className="card" key={index}>
                {pin}
              </p>
            ))
          ) : (
            <p>No addresses... double click map to add!</p>
          )}
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
