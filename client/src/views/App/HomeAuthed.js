import React, { Component } from "react";
import NavbarNoAuthed from "../../components/Shared/NavbarAuthed.js";
import Map from "../../components/HomeView/Map/Map.js";
import "../../scss/Home2.scss";
import { connect } from "react-redux";
import Charts from "../../components/HomeView/Charts.js";
import Compare2 from "../../components/HomeView/Compare/Compare2.js";
import Footer from "../../components/HomeView/Footer.js";
import Compare3 from "../../components/HomeView/Compare/Compare3.js";
import Authenticate from "../../components/AuthView/Authenticate.js";

class HomeNotAuthed extends Component {
  render() {
    return (
      <>
        <NavbarNoAuthed />
        <div className={"main-layout " + (this.props.dark ? "dark" : "light")}>
          <div className="left-pane">
            <Map />
          </div>
          <div className="right-pane">
            <div className="right-top">
              <Charts />
            </div>
            <div className="right-bottom">
              <Compare2 />
            </div>
            <div className="right-compare">
              <Compare3 />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ dark, pinAddresses }) => ({
  dark,
  pinAddresses
});

export default connect(mapStateToProps)(HomeNotAuthed);
