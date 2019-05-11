import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import "../../scss/NavbarB.scss";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/material/Search";

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

// remove premiuim to after login
function NavbarB() {
  return (
    <div className="navbarb">
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
          <NavLink exact to="/payment">
            Pricing
          </NavLink>
          <NavLink exact to="/register">
            Sign up
          </NavLink>
          <NavLink exact to="/login">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarB;
