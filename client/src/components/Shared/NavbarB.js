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
`;

const WhiteSearch = styled(Search)`
  color: white;
  height: 26px;
  width: 26px;
`;

const MoonLightA = styled(MoonLight)`
  height: 26px;
  width: 26px;
  transform: rotate(-40deg);
  cursor: pointer;
  border-radius: 6px;
`;

const MoonDarkA = styled(MoonDark)`
  height: 26px;
  width: 26px;
  transform: rotate(-40deg);
  cursor: pointer;
  border-radius: 6px;
`;

// remove premiuim to after login
class NavbarB extends Component {
  state = {
    darkmode: false
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
            <form>
              <input type="text" placeholder="Enter a location" />
              <button>
                <WhiteSearch />
              </button>
            </form>
          </div>
          <div className="right">
            {/* <span onClick={this.mode}>
              {darkmode ? <MoonDarkA /> : <MoonLightA />}
            </span> */}

            <NavLink exact to="/pricing" activeClassName="activeA">
              Pricing
            </NavLink>
            <NavLink exact to="/register" activeClassName="activeA">
              Sign up
            </NavLink>
            <NavLink exact to="/login" activeClassName="activeA">
              Log in
            </NavLink>
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
