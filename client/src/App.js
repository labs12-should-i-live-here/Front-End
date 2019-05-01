import React from 'react';
import { Route, Router } from 'react-router-dom';
import './scss/App.scss';
import Home from './views/App/Home.js';
import SignUp from './views/App/SignUp.js';
import Login from './views/App/Login.js';
import Compare from './views/App/Compare.js';
import StripePayment from './views/App/StripePayment';
import Auth from './Auth0/Auth.js';
import Callback from './Auth0/Callback.js'
import history from './Auth0/History'
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

const auth = new Auth();
// auth.login();


const handleAuthentication = (nextState, replace) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
	  auth.handleAuthentication();
	}
}

function App() {
		return (
			<Router history={history} component={Login}>
		  <>
		    <Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route path="/register" component={SignUp} />
			<Route path="/login" component={Login} />
			<Route path="/compare" component={Compare} />
			<Route path="/callback" render={(props) => {
				handleAuthentication(props);
				return <Callback {...props} />
			}} />
      		<Route path="/payment" component={StripePayment} />
		  </>
		  </Router>
		);
	  }


// class App extends Component {

// 	goTo(route) {
// 		this.props.history.replace(`/${route}`)
// 	  }
	
// 	  login() {
// 		this.props.auth.login();
// 	  }
	
// 	  logout() {
// 		this.props.auth.logout();
// 	  }
	
// 	  componentDidMount() {
// 		const { renewSession } = this.props.auth;
	
// 		if (localStorage.getItem('isLoggedIn') === 'true') {
// 		  renewSession();
// 		}
// 	  }
	
// 	  render() {
// 		const { isAuthenticated } = this.props.auth;
	
// 		return (
// 		  <div>
// 			<Navbar fluid>
// 			  <Navbar.Header>
// 				<Navbar.Brand>
// 				  <a href="#">Auth0 - React</a>
// 				</Navbar.Brand>
// 				<Button
// 				  bsStyle="primary"
// 				  className="btn-margin"
// 				  onClick={this.goTo.bind(this, 'home')}
// 				>
// 				  Home
// 				</Button>
// 				{
// 				  !isAuthenticated() && (
// 					  <Button
// 						bsStyle="primary"
// 						className="btn-margin"
// 						onClick={this.login.bind(this)}
// 					  >
// 						Log In
// 					  </Button>
// 					)
// 				}
// 				{
// 				  isAuthenticated() && (
// 					  <Button
// 						bsStyle="primary"
// 						className="btn-margin"
// 						onClick={this.logout.bind(this)}
// 					  >
// 						Log Out
// 					  </Button>
// 					)
// 				}
// 			  </Navbar.Header>
// 			</Navbar>
// 		  </div>
// 		);
// 	  }
// 	}

export default App;
