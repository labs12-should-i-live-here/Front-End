import React from "react";
import { Route, Router } from "react-router-dom";
import "./scss/App.scss";
import Home from "./views/App/Home.js";
import SignUp from "./views/App/SignUp.js";
import Login from "./views/App/Login.js";
import Compare from "./views/App/Compare.js";
import StripePayment from "./views/App/StripePayment";
import Auth from "./Auth0/Auth.js";
import Callback from "./Auth0/Callback.js";
import history from "./Auth0/History";
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <Router history={history} component={Login}>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/compare" component={Compare} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/payment" component={StripePayment} />
      </>
    </Router>
  );
}

export default App;
