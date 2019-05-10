import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav /*, Button*/ } from "react-bootstrap";

import "../../scss/Navbar.scss";



function Greeting(props) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = localStorage.getItem('username');
  if (isLoggedIn) {
    
    let welcome = `Welcome, ${user}`;
    return <h3>{welcome}<Link to="/logout"><button>Log Out</button></Link></h3>;
  }    
    
  else 
    return <Link to="/login">{props.message}</Link>;

}

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {message: '', isLoggedin: false}
  }
  
  componentDidUpdate() {

  }
  componentDidMount() {
    //fetchDate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('username');
    let welcome = `Welcome ${user}`;
    
    //let message;
    console.log(user)
    if (isLoggedIn) {
    this.setState( { message : <h2>{welcome}</h2>, isLoggedIn: true });
    } else {
      this.setState( { message : <button>login</button> , isLoggedIn: false});
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
    <Nav fluid = "true">
      
      <div className="Navbar">
        <nav className="nav-left">

         
          {/* <Link to="/logout">Log Out</Link> */}
          <Link to="/compare">compare</Link>
          <Link to="/payment">payment</Link>
        </nav>
        <nav className="nav-right">
         {/* <Link to="/register">register</Link> */}
          {/* <Link to="/login">{this.state.message}</Link> */}
          <Greeting message = {this.state.message}></Greeting>
        </nav>
          {/* <p>{test}</p> */}
      </div>
      
    </Nav>
    );
  }
}

export default Navbar;
