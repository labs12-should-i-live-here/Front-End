import React from "react";
import { Grid } from "@material-ui/core";

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
      <Grid className="main-content" container spacing={2}>
          <Grid className="left-panel" item xs={12} md={8}>
            <TwinMap />
          </Grid>
          <Grid className="right-panel" item xs={12} md={4}>
            <Grid className="top-panel">
              <Stats />
            </Grid>
            <Grid className="bottom-panel">
              <CompareDeck />
            </Grid>
          </Grid>
          <footer>
          <Footer />
        </footer>
        </Grid>

      </div>
  );
}

export default Compare;
