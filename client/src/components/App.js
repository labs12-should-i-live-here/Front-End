import React, { useState, useEffect } from "react";
import "../scss/App.scss";
import axios from "axios";
import Callback from '../views/App/Auth/Callback/Callback'; // Auth0 callback
import Auth from '../views/App/Auth/Auth'; // import Auth0 - content that can be used in App.js stored in authControls.js

// move authControls content to this file? Ex: https://github.com/labs11-ad-network/labs11-adNetwork-FE/blob/master/src/App.js

function App() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const url = "https://labs12.herokuapp.com/";
    axios
      .get(url)
      .then(res => {
        setTest(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    // this is a test for E2E sake

    <div className="App">
      <p>{test}</p>
    </div>
  );
}

class App extends Component {
	goTo(route) {
		this.props.history.replace(`/${route}`);
	}

	login() {
		this.props.auth.login();
	}

	logout() {
		this.props.auth.logout();
	}

	componentDidMount() {
		const { renewSession } = this.props.auth;

		if (localStorage.getItem('isLoggedIn') === 'true') {
			renewSession();
		}
	}

	render() {
		const { isAuthenticated } = this.props.auth;

		return (  
			<div>
				<Navbar fluid>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Auth0 - React</a>
						</Navbar.Brand>
						<Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>
							Home
						</Button>
						{!isAuthenticated() &&
							<Button bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}>
								Log In
							</Button>}
						{isAuthenticated() &&
							<Button bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}>
								Log Out
							</Button>}
						{isAuthenticated() &&
							userHasScopes(['write:messages']) &&
							<Button bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'admin')}>
								Admin
							</Button>};
					</Navbar.Header>
				</Navbar>
			</div>
		);
	}
}

export default App;