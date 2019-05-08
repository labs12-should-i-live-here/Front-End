import React from "react";
import "./App.css";

import { createBrowserHistory } from "history";

import "./assets/scss/material-kit-pro-react.scss";

import { Router, Route, Switch } from "react-router";
import SplashPage from "./views/LandingPage/LandingPage";

let classic = createBrowserHistory();
function App() {
  return (
    <Router history={classic}>
      <Switch>
        <Route path="/" component={SplashPage} />
      </Switch>
    </Router>
  );
}

export default App;
