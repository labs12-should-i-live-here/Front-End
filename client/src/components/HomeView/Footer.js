import React, { Component } from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import icon from "../../assets/icon.svg";
import { NavLink } from "react-router-dom";

var Inform = styled.div`
  margin-top: 5px;
  color: whitesmoke;
  font-size: 12px;
  line-height: 1.2;
`;

var Title = styled.h4`
  margin-bottom: 10px;
`;

var Source = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

var Foot = styled.p`
  border-top: solid whitesmoke 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px 3px 2% 0;
  padding-top: 3px;
  font-size: 20px;
  color: whitesmoke;
  font-size: 100%;
`;

var I = styled.img`
  block-size: 21px;
  outline-color: whitesmoke;
`;

var GitLogo = styled.a`
  text-decoration: none;
  color: whitesmoke;
  font-size: 135%;
`;

export default class Footer extends Component {
  render() {
    return (
      <>
        <Inform>
          <Title>𝕿𝖎𝖛𝖊 𝕳𝖆𝖋𝖊</Title>
          <div>
            {" "}
            The Live Safe Team has built this interactive website to bring
            together relevant information about disaster risks in a particular
            area, to inform the buying and renting decisions of potential
            homeowners.
          </div>
          <br />

          <h6> • Data Sources:</h6>
          <Source>
            <a href="https://www.ncdc.noaa.gov/stormevents/ftp.jsp">
              Storm Events
            </a>{" "}
            ♘ <a href="https://climate.azavea.com/">Climate Data</a> ♘{" "}
            <a href="https://github.com/usgs/libcomcat">API</a> ♘ <br />
            <a href="https://www.fema.gov/media-library/assets/documents/7877">
              {" "}
              FEMA Disaster Guide
            </a>{" "}
            ♘ <a href="https://www.ready.gov/earthquakes">Earthquake Prep</a>
          </Source>
        </Inform>
        <Foot>
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/info">
            Info
          </NavLink>
          {/* <div>&copy; LiveSafe</div> */}
          {/* sitemap */}
          <GitLogo href="https://github.com/labs12-should-i-live-here/Front-End">
            <IoLogoGithub />
          </GitLogo>
          <a href="https://rebellion.earth/">
            <I src={icon} />
          </a>
        </Foot>
      </>
    );
  }
}

//react-router-sitemap might be the best option for a sitemap generator. Sitemaps help with the SEO
