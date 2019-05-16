import React from "react";
import { Route, Router} from "react-router-dom";
import "./scss/App.scss";
import Home2 from "./views/App/Home2.js";
import Profile from "./views/App/Profile";
import SignUp from "./views/App/SignUp.js";
import Login from "./views/App/Login.js";
import Logout from "./views/App/Logout.js";
import Compare from "./views/App/Compare.js";
import Landing from "./views/App/Landing";
import Pricing from "./views/App/Pricing.js";
// import Email from "./components/SendGrid/Email";
//stripe
import StripePayment from "./components/StripePayments/StripePayment";
import { UnpaidPrime } from "./views/App/UnpaidPrime";
import Auth from "./Auth0/Auth.js";
import Callback from "./Auth0/Callback.js";
import history from "./Auth0/History";

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
        <Route exact path="/" component={Home2} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/home" component={Home2} />
        <Route path="/landing" component={Landing} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} /> {/* NEW! */}
        <Route path="/logout" component={Logout} />
        <Route path="/compare" component={Compare} />
        {/* <Route path="/Email" componet={Email} />  --> potential UI for mass email via SendGrid */}
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/payment" component={StripePayment} />
        <Route path="/primeaccess" component={UnpaidPrime} />
      </>
    </Router>
  );
}

export default App;
