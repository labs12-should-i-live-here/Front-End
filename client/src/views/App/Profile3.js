import React, { Component } from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import "../../scss/Profile3.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Profile3 extends Component {
  render() {
    console.log(this.props.client);
    return (
      <div>
        <NavbarB />
        <div className="profile-page">
          <div className="nav-copy">
            <img src={this.props.client.userPic} alt="user profile" />
            <h3>{this.props.client.name}</h3>
          </div>
          <p>Free account</p>
          <Link exact to="logout">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ client }) => ({
  client
});

export default connect(mapStateToProps)(Profile3);
