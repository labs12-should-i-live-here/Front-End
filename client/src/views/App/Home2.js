import React, { Component } from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import Map from "../../components/HomeView/Map/Map.js";
import "../../scss/Home2.scss";
import styled from "styled-components";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { Compare } from "styled-icons/material/Compare";
import { connect } from "react-redux";
import Charts from "../../components/HomeView/Charts.js";
import Compare2 from "../../components/HomeView/Compare/Compare2.js";

const BlackCompare = styled(Compare)`
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
        <div className={"main-layout " + (this.props.dark ? "dark" : "light")}>
          <div className="left-pane">
            <Map />
          </div>
          <div className="right-pane">
            <div className="right-top">
              <Charts />
            </div>
            <div className="right-bottom">
              <Compare2 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ dark }) => ({
  dark
});

export default connect(mapStateToProps)(Home2);
