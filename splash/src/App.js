import React from "react";
import "./App.css";

import { createBrowserHistory } from "history";
let classic = createBrowserHistory();

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

import { Router, Route, Switch } from "react-router";
import SplashPage from "views/LandingPage/LandingPage.jsx";

export default function App() {
  return (
    <Router history={classic}>
      <Switch>
        <Route path="/" component={SplashPage} />
      </Switch>
    </Router>
  );
}
