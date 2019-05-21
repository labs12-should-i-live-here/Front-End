import Auth from "../../Auth0/Auth";
import { connect } from "react-redux";
import React from "react";

const auth = new Auth();

function Login() {
  auth.login();
  // const style = {
  //   position: "absolute",
  //   display: "flex",
  //   justifyContent: "center",
  //   height: "100vh",
  //   width: "100vw",
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   backgroundColor: "white"
  // };

  // return (
  //   <div style={style}>
  //     <h4>logging you in...</h4>
  //   </div>
  // );
}

export default Login;
