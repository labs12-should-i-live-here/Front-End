import React, { Component } from "react";
import Navbar from "../../components/Shared/Navbar.js";
import Map from "../../components/HomeView/Map/Map.js";
import Stats from "../../components/HomeView/Stats/Stats.js";
import CompareDeck from "../../components/HomeView/Compare/CompareDeck.js";
import Footer from "../../components/HomeView/Footer";
import Auth from "../../Auth0/Auth.js";
import "../../scss/Home.scss";
import { Grid } from "@material-ui/core";

const auth = new Auth();

class Home extends Component {
  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    return (
      <div className="homeBody">
        <Navbar auth={auth} />
        <Grid className="main-content" container spacing={2}>
          <Grid className="left-panel" item xs={12} md={8}>
            <Map />
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
}

export default Home;
