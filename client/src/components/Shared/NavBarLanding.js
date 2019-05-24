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

const RedHome = styled(Home)`
  color: #f24236;
  height: 35px;
  width: 35px;
  padding: 2px;
  border-radius: 50%;
  background-color: white;
`;

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
  :hover {
    opacity: 1;
  }
`;

const MoonDarkA = styled(MoonDark)`
  height: 23px;
  width: 23px;
  padding: 3px 5px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border-radius: 6px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

// remove premiuim to after login
class NavbarB extends Component {
  state = {
    darkmode: false
  };

  logout = () => {
    localStorage.removeItem("userId");
  };

  mode = () => {
    this.setState({ darkmode: !this.state.darkmode });
    this.props.flipMode();
  };
  render() {
    const { darkmode } = this.state;
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dark }) => ({
  dark
});

export default connect(
  mapStateToProps,
  { flipMode }
)(NavbarB);
