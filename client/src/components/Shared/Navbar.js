import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/Navbar.scss";
import { fetchDate } from "../../actions/";
import { connect } from "react-redux";
// import Auth from '../../src/views/App/Auth/Auth';

class Navbar extends Component {
  componentDidMount() {
    this.props.fetchDate();
  }

  render() {
    return (
      <div className="Navbar">
        <p>Navbar</p>
        <Link to="/">Home</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Sign In</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.firstReducer.date
});

export default connect(
  mapStateToProps,
  { fetchDate }
)(Navbar);
