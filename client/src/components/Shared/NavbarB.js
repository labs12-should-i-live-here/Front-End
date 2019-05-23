import "animate.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Moon as MoonLight } from "styled-icons/boxicons-solid/Moon";
import { UserCircle } from "styled-icons/boxicons-regular/UserCircle";
import { AdjustBrightness } from "styled-icons/typicons/AdjustBrightness";
import { KeyboardArrowRight } from "styled-icons/material/KeyboardArrowRight";
import { flipMode, setLoginVars } from "../../actions";
import "../../scss/NavbarB.scss";

const User = styled(UserCircle)`
  color: #fff;
  height: 25px;
  width: 25px;
  padding: 0 5px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const RightCaret = styled(KeyboardArrowRight)`
  color: #fff;
  height: 26px;
  width: 26px;
  padding: 0 5px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const RedHome = styled(Home)`
  color: #f24236;
  height: 35px;
  width: 35px;
  padding: 2px;
  padding-left: 10px;
  border-radius: 50%;
  background-color: white;
`;

const MoonLightA = styled(MoonLight)`
  height: 24px;
  width: 24px;
  color: #fff;
  padding: 0 5px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const MoonDarkA = styled(AdjustBrightness)`
  height: 25px;
  width: 25px;
  color: white;
  padding: 0 5px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

// remove premiuim to after login
class NavbarB extends Component {
  state = {
    darkmode: false,
    open: false,
    bigNav: false
  };
  componentDidMount() {}

  mode = () => {
    this.setState({ darkmode: !this.state.darkmode });
    this.props.flipMode();
  };

  enter = () => {
    this.setState({ open: true });
  };

  leave = () => {
    if (!this.state.bigNav) {
      this.setState({ open: false });
    }

    // this.closeBigNav();
  };

  toggleBigNav = () => {
    this.setState({ bigNav: !this.state.bigNav });
  };

  render() {
    const { darkmode } = this.state;

    return (
      <div className={"navbarb " + (darkmode ? "dark" : "light")}>
        <div className="nav">
          <div className="left">
            <NavLink exact to="/">
              <RedHome />
            </NavLink>
            <NavLink exact to="/">
              LiveSafe
            </NavLink>
          </div>
          <div className="center">
            {/* <form>
              <input type="text" placeholder="Enter a location" />
              <button>
                <WhiteSearch />
              </button>
            </form> */}
            <div id="geocoder" className="geocoder" />
          </div>
          {localStorage.getItem("isLoggedIn") ? (
            <div className="right">
              {/* <NavLink exact to="/pricing" activeClassName="activeA">
              Pro
            </NavLink> */}

              {/* <NavLink exact to="/about"> About </NavLink> */}
              {/* <a
              href="https://labs12-should-i-live-here.github.io/about/"
              target="_blank"
            >
              About
            </a> */}

              <button
                onMouseEnter={this.enter}
                onMouseLeave={this.leave}
                exact
                to="/profile"
                className="profile-link animated bounceInRight"
                // activeClassName="activeB "
                style={
                  this.state.open && this.state.bigNav
                    ? { width: "225px" }
                    : { width: "130px" }
                }
              >
                {this.state.open && this.state.bigNav ? (
                  <>
                    <RightCaret onClick={this.toggleBigNav} />
                    <NavLink className="profile" exact to="/profile">
                      <User />
                    </NavLink>
                    <span onClick={this.mode}>
                      {darkmode ? <MoonDarkA /> : <MoonLightA />}
                    </span>
                  </>
                ) : (
                  ""
                )}

                <div className="profile-outer" onClick={this.toggleBigNav}>
                  <img
                    className="user-image"
                    src={this.props.client.userPic}
                    alt="user profile image"
                  />

                  <span>{this.props.client.name}</span>
                </div>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dark, client, fetchingInfo }) => ({
  dark,
  client,
  fetchingInfo
});

export default connect(
  mapStateToProps,
  { flipMode, setLoginVars }
)(NavbarB);
