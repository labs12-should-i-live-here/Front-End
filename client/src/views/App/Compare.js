import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import Footer from "../../components/HomeView/Footer";
import TwinMap from "../../components/CompareView/TwinMap";
import Stats from "../../components/HomeView/Stats/Stats.js";
import CompareDeck from "../../components/HomeView/Compare/CompareDeck.js";
import "../../scss/Compare.scss"

function Compare() {
  return (
    <div className="compareBody">
      <Navbar />
      <div className="main-content">
          <div className="left-panel">
            <TwinMap />
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

export default Compare;
