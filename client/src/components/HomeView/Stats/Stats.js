import React, { Component } from "react";
import "../../../scss/Stats.scss";
import { connect } from "react-redux";

class Stats extends Component {
  render() {
    return (
      <div>
        {this.props.fetchingHistoricalData ? (
          <h2>FETCHING DATA</h2>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ error, fetchingHistoricalData }) => ({
  error,
  fetchingHistoricalData
});

export default connect(mapStateToProps)(Stats);
