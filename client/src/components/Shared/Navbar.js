import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  Typography,
  Menu
} from "@material-ui/core";
import "../../scss/Navbar.scss";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Greeting(props) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    const user = localStorage.getItem("username");
    let welcome = `Welcome, ${user}`;
    return (
      <h3>
        {props.message}
        <Link to="/logout">
          <button>Log Out</button>
        </Link>
      </h3>
    );
  } else return <Link to="/login">{props.message}</Link>;
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "", isLoggedin: false };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("username");
    let welcome = `Welcome ${user}`;

    //let message;
    console.log(user);
    if (isLoggedIn) {
      this.setState({ message: <h2>{welcome}</h2>, isLoggedIn: true });
    } else {
      this.setState({ message: <button>login</button>, isLoggedIn: false });
      //message = <button>loginn</button>;
    }
  }

  render() {
    // // const { isAuthenticated } = this.props.auth;
    // const user = localStorage.getItem('username');
    // console.log(user);

    // let welcome = "Welcome " + user;
    //  const isLoggedIn = localStorage.getItem('isLoggedIn');
    // let message;
    // if (isLoggedIn) {
    //   message = <h2>{welcome}</h2>;
    // } else {
    //   message = <button>loginn</button>;
    // }

    // return (
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn} />
    //     {button}
    //   </div>
    return (
      // <div>
      //   <Nav fluid>
      //     <Nav.Header>
      //       <Nav.Brand>
      //         <a href="#">Auth0 - React</a>
      //       </Nav.Brand>
      //       <Button
      //         bsStyle="primary"
      //         className="btn-margin"
      //         onClick={this.goTo.bind(this, '')}
      //       >
      //         Home
      //       </Button>
      //        <Button
      //               id="qsLoginBtn"
      //               bsStyle="primary"
      //               className="btn-margin"
      //               onClick={this.login.bind(this)}
      //             >
      //               Log In
      //             </Button>
      //          <Button
      //               id="qsLogoutBtn"
      //               bsStyle="primary"
      //               className="btn-margin"
      //               onClick={this.logout.bind(this)}
      //             >
      //               Log Out
      //             </Button>

      //     </Nav.Header>
      //   </Nav>
      // </div>

      // <Nav fluid = "true">

      //   <div className="Navbar">
      //     <nav className="nav-left">

      //       {/* <Link to="/logout">Log Out</Link> */}
      //       <Link to="/compare">compare</Link>
      //       <Link to="/primeaccess">prime access</Link>
      //     </nav>
      //     <nav className="nav-right">
      //      {/* <Link to="/register">register</Link> */}
      //       {/* <Link to="/login">{this.state.message}</Link> */}
      //       <Greeting message = {this.state.message}></Greeting>
      //     </nav>
      //       {/* <p>{test}</p> */}
      //   </div>

      // </Nav>
      <AppBar
        className="Navbar"
        position="static"
        color="primary"
        style={{ marginBottom: "2%" }}
      >
        <Toolbar className="Navbar">
          <Grid>
<<<<<<< HEAD
          <Button href="/compare">Compare</Button>
            <Button href="/payment">Payment</Button>
            <Button href="/register" color="error">Register</Button>
            <Button href="/login" color="error">Login</Button>
            <Button href="/primeaccess">Prime Access</Button>
          </Grid>
        </IconButton>  
        </Grid>
      </Toolbar>
    </AppBar>
=======
            <Button classsName="liveSafeBTN" style={{ margin: "0% 35% 0% 0%" }}>
              LiveSafe
            </Button>
            <IconButton aria-label="Menu">
              <Grid>
                <Button href="/compare">Compare</Button>
                <Button href="/payment">Payment</Button>
                <Button color="error">Register</Button>
                <Button color="error">Login</Button>
              </Grid>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
>>>>>>> dda269c44f7004c1023a3e3ff5a7f50d7a856fed
    );
  }
}

export default Navbar;
//pr 2