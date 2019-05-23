import React, { Component } from "react";
import { connect } from "react-redux";
import Charts from "../../components/HomeView/Charts.js";
import Charts2 from "../../components/HomeView/Charts2.js";
import Compare2 from "../../components/HomeView/Compare/Compare2.js";
import Compare3 from "../../components/HomeView/Compare/Compare3.js";
import Footer from "../../components/HomeView/Footer.js";
import Map from "../../components/HomeView/Map/Map.js";
import NavbarNoAuthed from "../../components/Shared/NavbarAuthed.js";
import "../../scss/Home2.scss";

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
            <div className="right-bottom">
              <Compare2 />
            </div>
            <div className="right-middle">
              <Charts2 />
            </div>
            <div className="right-top">
              <Charts />
            </div>

            <div className="three" />
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
