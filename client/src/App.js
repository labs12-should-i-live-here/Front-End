import React from 'react';
import { Route } from 'react-router-dom';
import './scss/App.scss';
import Home from './views/App/Home.js';
import SignUp from './views/App/SignUp.js';
import Login from './views/App/Login.js';
import Compare from './views/App/Compare.js';
import React, { Component } from 'react';

// auth0
import Callback from './containers/auth-zero/Callback/Callback.js';
import Auth from './containers/auth-zero/Auth/Auth.js';

const auth = new Auth();
const handleAuthentication = ({ location }) => {
	if (/access_token|id_token|error/.test(location.hash)) {
		auth.handleAuthentication();
	}
};

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/register" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route path="/compare" component={Compare} />

				<Route path="/callback" render={props => {
						handleAuthentication(props);
						return <Callback {...props} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
