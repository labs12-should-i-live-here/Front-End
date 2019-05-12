import React, { Component } from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import Map from "../../components/HomeView/Map/Map.js";
import "../../scss/Home2.scss";
import { connect } from "react-redux";
import Charts from "../../components/HomeView/Charts.js";
import Compare2 from "../../components/HomeView/Compare/Compare2.js";

class Home2 extends Component {
  render() {
    return (
      <>
        <NavbarB />
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
            <div className="footer">footer</div>
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

export default connect(mapStateToProps)(Home2);
