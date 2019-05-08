import React from "react";
import "./App.css";

import { createBrowserHistory } from "history";

import "./assets/scss/material-kit-pro-react.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplashPage from "./views/LandingPage/LandingPage";

let classic = createBrowserHistory();
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={(props) => <SplashPage {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
