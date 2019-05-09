import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './scss/App.scss';
import Home from './views/App/Home.js';
import Profile from './views/App/Profile';
import SignUp from './views/App/SignUp.js';
import Login from './views/App/Login.js';
import Logout from './views/App/Logout.js';
import Compare from './views/App/Compare.js';
//stripe
import StripePayment from './components/StripePayments/StripePayment';
import { UnpaidPrime } from './views/App/UnpaidPrime';
//auth0
import Auth from './Auth0/Auth.js';
import Callback from './Auth0/Callback.js'
import history from './Auth0/History'
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme1 from './materialUI/Theme1'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
		return (
			<MuiThemeProvider theme={theme1}>
			<Router history={history} component={Login}>
		<>
		
		<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route path="/register" component={SignUp} />
			<Route path="/login" component={Login} />
			<Route path="/profile" component={Profile}/> {/* NEW! */}
			<Route path="/logout" component={Logout} />
			<Route path="/compare" component={Compare} />
			<Route path="/callback" render={(props) => {
				handleAuthentication(props);
				return <Callback {...props} />
			}} />
			{/* stripe */}
      <Route path="/payment" component={StripePayment} />
			<Route path="/primeaccess" component={UnpaidPrime} />
		</>
		</Router>
		</MuiThemeProvider>
		);
	  }




export default App;
