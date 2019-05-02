import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav /*, Button*/ } from "react-bootstrap";

import "../../scss/Navbar.scss";

class Navbar extends Component {
  render() {
    // const { isAuthenticated } = this.props.auth;

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
      <Nav fluid>
        <div className="Navbar">
          <nav className="nav-left">
            <Link to="/payment">Log Out</Link>
            <Link to="/compare">compare</Link>
            <Link to="/payment">payment</Link>
          </nav>
          <nav className="nav-right">
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
          </nav>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
