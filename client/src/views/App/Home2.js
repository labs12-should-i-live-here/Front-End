import React, { Component } from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import Map from "../../components/HomeView/Map/Map.js";
import "../../scss/Home2.scss";
import styled from "styled-components";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";

const BlackLeft = styled(NavigateBefore)`
  color: grey;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;
const BlackRight = styled(NavigateNext)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;

class Home2 extends Component {
  render() {
    return (
      <>
        <NavbarB />
        <div className="main-layout">
          <div className="left-pane">
            <Map />
          </div>
          <div className="right-pane">
            <div className="right-top">
              <header>
                <h2>Charts</h2>
                <div className="toggle">
                  <BlackLeft />
                  <BlackRight />
                </div>
              </header>
            </div>
            <div className="right-bottom">
              <header>
                <h2>Compare</h2>
              </header>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home2;
