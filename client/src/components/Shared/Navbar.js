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
    <nav className="nav-left">
      <Link to="/">home</Link>
      <Link to="/compare">compare</Link>
      </nav><nav className="nav-right">
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      </nav>
      {/* <p>{test}</p> */}
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
