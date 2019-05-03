import React, { Component } from "react";
import Navbar from "../../components/Shared/Navbar.js";
import Map from "../../components/HomeView/Map/Map.js";
import Stats from "../../components/HomeView/Stats/Stats.js";
import CompareDeck from "../../components/HomeView/Compare/CompareDeck.js";
import Footer from "../../components/HomeView/Footer";
import "../../scss/Home.scss";
import Auth from "../../Auth0/Auth.js";

const auth = new Auth();

class Home extends Component {
  render() {
    return (
      <div>
        Home view
        <Navbar auth={auth} />
        <div className="main-content">
          <div className="left-panel">
            <Map />
          </div>
          <div className="right-panel">
            <div className="top-panel">
              <Stats />
            </div>
            <div className="bottom-panel">
              <CompareDeck />
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home;
