import React, { Component } from "react";
import NavBarB from "../../components/Shared/NavbarB.js";
// import Search from "../../components/LandingSearch/Search.js";
import Map from "../../components/HomeView/Map/Map.js";
import Component1 from "../../components/AboutView/Component1.js";
import Component2 from "../../components/AboutView/Component2.js";

class About extends Component {
  render() {
    return (
      <div>
        <NavBarB />
        <div style={{ display: "none" }}>
          <Map />
        </div>
        <div className="container">
          <Component1 />
          <Component2 />
          <div className="header" />
          <div id="main">
            <div className="inner">
              <div className="section" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

//lol