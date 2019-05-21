import auth0 from "auth0-js";
import history from "./History";
// import { AUTH_CONFIG } from "./auth0-variables";
import axios from "axios";
import connect from "react-redux";
import { setLoginVars } from "../actions";
// // ...
// class Ping extends Component {
// 	// ...
// 	securedPing() {
// 		const { getAccessToken } = this.props.auth;
// 		const API_URL = 'https://should-i-live-here.netlify.com/';
// 		const headers = { Authorization: `Bearer ${getAccessToken()}` };
// 		axios
// 			.get(`${API_URL}/private`, { headers })
// 			.then(response => this.setState({ message: response.data.message }))
// 			.catch(error => this.setState({ message: error.message }));
// 	}
// 	securedScopedPing() {
// 		const { getAccessToken } = this.props.auth;
// 		const headers = { Authorization: `Bearer ${getAccessToken()}` };
// 		axios
// 			.get(`${API_URL}/private-scoped`, { headers })
// 			.then(response => this.setState({ message: response.data.message }))
// 			.catch(error => this.setState({ message: error.message }));
// 	}
// }

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  name;
  auth0 = new auth0.WebAuth({
    domain: "dev-sz7on0tz.auth0.com",
    clientID: "tNlC3QYcN3D0WbM0d3SKvxKHXXQJxUZv",
    redirectUri: "http://localhost:3000/callback", //'https://livesafe.netlify.com/callback', //'http://localhost:3000/callback',  //'https://livesafe.netlify.com/callback',
    responseType: "token id_token",
    scope: "openid profile"
  });
  // auth0 = new auth0.WebAuth({
  //   domain: AUTH_CONFIG.domain,
  //   clientID: AUTH_CONFIG.clientId,
  //   redirectUri: AUTH_CONFIG.callbackUrl,
  //   responseType: 'token id_token',
  //   scope: 'openid'
  // });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // this.props.setLoginVars(authResult.idTokenPayload);
        console.log(authResult.idTokenPayload);
        //   this.auth0.client.getUserCountry(authResult.accessToken, function(err, country) {
        //     // This method will make a request to the /userinfo endpoint
        //     // and return the user object, which contains the user's information,
        //     // similar to the response below.
        //     console.log(country)
        // });
        this.auth0.client.userInfo(authResult.accessToken, function(err, user) {
          // This method will make a request to the /userinfo endpoint
          // and return the user object, which contains the user's information,
          // similar to the response below.
          if (err) console.log("error", err);
          console.log("trying to get userinfo", JSON.stringify(user));

          const API_URL = "https://labs12.herokuapp.com"; //http://localhost:3000
          const userid = user.sub;
          localStorage.setItem("username", user.given_name);
          localStorage.setItem("userPic", user.picture);
          localStorage.setItem("userId", userid);

          localStorage.setItem(
            "Name",
            user.given_name + " " + user.family_name
          );
          axios
            .post(`${API_URL}/register`, {
              userid: userid
            })
            .then(response => console.log(response))
            .catch(error => console.log(error));
        });
        //console.log(this.name);

        this.setSession(authResult);
      } else if (err) {
        history.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the Access Token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    // console.log(
    //   "session set, ",
    //   this.accessToken,
    //   this.idToken,
    //   this.expiresAt
    // );

    // navigate to the home route
    history.replace("/");
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      console.log("in renewSession(), authResult = ", authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        // this.logout();
        // console.log(err);
        // alert(
        //   `Could not get a new token (${err.error}: ${err.error_description}).`
        // );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("userPic");
    localStorage.removeItem("Name");
    console.log(window.location.origin);
    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home page
    history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
