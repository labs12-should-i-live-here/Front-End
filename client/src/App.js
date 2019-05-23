import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";
import { setLoginVars } from "./actions";
import Auth from "./Auth0/Auth.js";
import Callback from "./Auth0/Callback.js";
import history from "./Auth0/History";
import StripePayment from "./components/StripePayments/StripePayment";
import "./scss/App.scss";
import About from "./views/App/About.js";
import Home2 from "./views/App/Home2.js";
// import Email from "./components/SendGrid/Email";
//stripe
import HomeNotAuthed from "./views/App/HomeNotAuthed.js";
import Landing from "./views/App/Landing";
import Login from "./views/App/Login.js";
import Logout from "./views/App/Logout.js";
import Pricing from "./views/App/Pricing.js";
import Profile3 from "./views/App/Profile3";
import SignUp from "./views/App/SignUp.js";
import { UnpaidPrime } from "./views/App/UnpaidPrime";

const auth = new Auth();

class App extends Component {
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  };

  componentWillMount() {
    this.props.setLoginVars();
    console.log(
      "%c👋 Hey there! You can find the repo here: https://github.com/labs12-should-i-live-here",
      "font-size: 15px; color: #000; background: #fff; margin: 20px;"
    );
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
          {/* {<Route exact path="/" component={Home2} /> } */}
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/home" component={Home2} />
          <Route path="/landing" component={Landing} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile3} /> {/* NEW! */}
          <Route path="/logout" component={Logout} />
          <Route path="/compare" component={Compare} />
          <Route path="/about" component={About} />
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
