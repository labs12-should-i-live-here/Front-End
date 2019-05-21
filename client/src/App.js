import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import "./scss/App.scss";
import Home2 from "./views/App/Home2.js";
import Profile3 from "./views/App/Profile3";
import SignUp from "./views/App/SignUp.js";
import Login from "./views/App/Login.js";
import Logout from "./views/App/Logout.js";
import Compare from "./views/App/Compare.js";
import Landing from "./views/App/Landing";
import Pricing from "./views/App/Pricing.js";
import About from "./views/App/About/About.js";
// import Email from "./components/SendGrid/Email";
//stripe
import HomeNotAuthed from "./views/App/HomeNotAuthed.js";
import StripePayment from "./components/StripePayments/StripePayment";
import { UnpaidPrime } from "./views/App/UnpaidPrime";
import Auth from "./Auth0/Auth.js";
import Callback from "./Auth0/Callback.js";
import history from "./Auth0/History";
import { connect } from "react-redux";
import { setLoginVars } from "./actions";

const auth = new Auth();

class App extends Component {
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  };

  componentWillMount() {
    this.props.setLoginVars();
  }
  render() {
    return (
      <Router history={history} component={Login}>
        <>
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem("isLoggedIn") ? <Home2 /> : <HomeNotAuthed />
            }
          />
          {/* <Route exact path="/" component={Home2} /> */}
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/home" component={Home2} />
          <Route path="/landing" component={Landing} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile3} /> {/* NEW! */}
          <Route path="/logout" component={Logout} />
          <Route path="/compare" component={Compare} />
          {/* <Route path="/Email" componet={Email} />  --> potential UI for mass email via SendGrid */}
          <Route
            path="/callback"
            render={props => {
              this.handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route path="/payment" component={StripePayment} />
          <Route path="/primeaccess" component={UnpaidPrime} />
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ client, fetchingInfo }) => ({
  client,
  fetchingInfo
});

export default connect(
  mapStateToProps,
  { setLoginVars }
)(App);
