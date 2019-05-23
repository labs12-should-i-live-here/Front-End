<<<<<<< HEAD
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import "../../scss/NavbarB.scss";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/material/Search";
import { Moon as MoonLight } from "styled-icons/boxicons-regular/Moon";
import { Moon as MoonDark } from "styled-icons/boxicons-solid/Moon";
import { connect } from "react-redux";
import { flipMode } from "../../actions";
=======
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
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408

const RedHome = styled(Home)`
  color: #f24236;
  height: 35px;
  width: 35px;
  padding: 2px;
<<<<<<< HEAD
=======
  padding-left: 10px;
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
  border-radius: 50%;
  background-color: white;
`;

<<<<<<< HEAD
const WhiteSearch = styled(Search)`
  color: white;
  height: 26px;
  width: 26px;
`;

const MoonLightA = styled(MoonLight)`
  height: 23px;
  width: 23px;
  color: black;
  padding: 3px 5px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border-radius: 6px;
  opacity: 0.7;
=======
const MoonLightA = styled(MoonLight)`
  height: 24px;
  width: 24px;
  color: #fff;
  padding: 0 5px;
  opacity: 0.6;
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
  :hover {
    opacity: 1;
  }
`;

<<<<<<< HEAD
const MoonDarkA = styled(MoonDark)`
  height: 23px;
  width: 23px;
  padding: 3px 5px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border-radius: 6px;
  opacity: 0.7;
=======
const MoonDarkA = styled(AdjustBrightness)`
  height: 25px;
  width: 25px;
  color: white;
  padding: 0 5px;
  opacity: 0.6;
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
  :hover {
    opacity: 1;
  }
`;

// remove premiuim to after login
class NavbarB extends Component {
  state = {
<<<<<<< HEAD
    darkmode: false
  };

  logout = () => {
    localStorage.removeItem("userId");
  };
=======
    darkmode: false,
    open: false,
    bigNav: false
  };
  componentDidMount() {}
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408

  mode = () => {
    this.setState({ darkmode: !this.state.darkmode });
    this.props.flipMode();
  };
<<<<<<< HEAD
  render() {
    const { darkmode } = this.state;
=======

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

>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
    return (
      <div className={"navbarb " + (darkmode ? "dark" : "light")}>
        <div className="nav">
          <div className="left">
            <Link exact to="/">
              <RedHome />
            </Link>
            <Link exact to="/">
              LiveSafe
            </Link>
          </div>
          <div className="center">
            {/* <form>
              <input type="text" placeholder="Enter a location" />
              <button>
                <WhiteSearch />
              </button>
            </form> */}
<<<<<<< HEAD
            <div id="geocoder" class="geocoder" />
          </div>
          <div className="right notauth">
            <NavLink exact to="/login" activeClassName="activeA">
              Sign up or Login
            </NavLink>

            <NavLink exact to="/landing" activeClassName="activeA">
              Product
            </NavLink>

            <NavLink exact to="/about" activeClassName="activeA">
              About
              </NavLink>

            <NavLink exact to="/pricing" activeClassName="activeA">
              Pricing
            </NavLink>

            <span onClick={this.mode}>
              <button className="icons">
                {darkmode ? <MoonDarkA /> : <MoonLightA />}
              </button>
            </span>
          </div>
=======
            {/* <div id="geocoder" class="geocoder" /> */}
            <Link to="/login">
                Log In
            </Link>
            <Link to="/register">
                Sign Up
            </Link>
            <Link to="/Payment">
                Payment
            </Link>
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
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = ({ dark }) => ({
  dark
=======
const mapStateToProps = ({ dark, client, fetchingInfo }) => ({
  dark,
  client,
  fetchingInfo
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
});

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  { flipMode }
=======
  { flipMode, setLoginVars }
>>>>>>> 04a9949eea7bb76bb868d92ad117f7e545c7c408
)(NavbarB);
