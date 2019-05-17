import React, { Component } from "react";
import Navbar from "../../components/Shared/Navbar.js";
import Footer from "../../components/HomeView/Footer";
import Auth from "../../Auth0/Auth.js";
import "../../scss/UserForm.scss";
import AccInfo from "../../components/HomeView/Profile.js";

const auth = new Auth();

export default class Profile extends Component {
  render() {
    return (
      <>
        <Navbar auth={auth} />
        <AccInfo />
        <Footer />
      </>
    );
  }
}
