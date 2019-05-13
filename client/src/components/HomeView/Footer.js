import React, { Component } from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";

var Inform = styled.div`
margin-top: 5px;
color: whitesmoke;
font-size: 12px;`

var Foot = styled.p`
border-top:solid whitesmoke 1px;
display:flex;
flex-direction: row;
justify-content:space-around;
  margin: 15px 3px 9%;
  padding-top: 3px;
  font-size: 30px;
  color: whitesmoke;
  font-size:120%;
`;

var GitLogo = styled.a`
  text-decoration: none;
  color: whitesmoke;
  font-size:150%;` 

  export default class Footer extends Component {
    render() {
      return (
        <>
          <Inform>
            <h4>Live Safe</h4>
            <p> Here we can place inormation about out data soruces so the users can feel safer by having access to all the data we used <br/> Maybe data should fill it out Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
          </Inform>
          <Foot>
              Meet The Team
              <div>&copy; LiveSafe</div>
              sitemap
              <GitLogo href='https://github.com/labs12-should-i-live-here/Front-End'>
                <IoLogoGithub />
              </GitLogo>
          </Foot>
        </>
      )
    }
  }



//react-router-sitemap might be the best option for a sitemap generator. Sitemaps help with the SEO
