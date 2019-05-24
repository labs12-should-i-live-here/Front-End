import React, { Component } from "react";
import NavBarB from "../../components/Shared/NavbarB.js";
import Search from "../../components/LandingSearch/Search.js";
// import Footer from '../../components/HomeView/Footer';
import "../../scss/Landing.scss";
import Map from "../../components/HomeView/Map/Map.js";
import NavBarAuthed from '../../components/Shared/NavbarAuthed';
import NavBarLanding from '../../components/Shared/NavBarLanding.js';
// import Suggestions from '../../components/LandingSearch/Suggestions.js';
// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Landing extends Component {
render() {
return (
    <div>
    <div>
        <NavBarB />

        {/* top content */}
        <div className="landingPage">
            <div className="taglineSearch">
                <div className="tagline">
                    Know the risk before you decide
                    <div className="subtagline">We'll help you find a safe home</div>
                        <a href="https://livesafe.netlify.com"><button className="topBtn">Learn More</button></a>
                            <div id="geocoder" className="landingSearchBar">

                            </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div id="learnMore" className="marketingTitleBox">
            <div className="infoTitle">You'll never have to live in fear.</div>
        </div>

        <div className="infoBoxes">

            {/* first info box */}
            <div className="infoBox">
                <div className="infoImage">
                    <div className="img2" />
                </div>
                <div className="textBox">
                    <div className="infoBoxTitle">Risk Data</div>
                        <div className="infoBoxContent">
                            Learn about the weather risks around you.
                        </div>
                    </div>
                <div className="btnBox">
                    <button className="btn">Damage</button>
                </div>
            </div>
                
            {/* second info box */}
            <div className="infoBox">
                <div className="infoImage">
                    <div className="img2" />
                </div>
                <div className="textBox">
                    <div className="infoBoxTitle">Damage Data</div>
                        <div className="infoBoxContent">
                            Get to know the property damage stats near you.
                        </div>
                    </div>
                <div className="btnBox">
                    <button className="btn">Damage</button>
                </div>
            </div>

            {/* second info box */}
            <div className="infoBox">
                <div className="infoImage">
                    <div className="img3" />
                </div>
                <div className="textBox">
                    <div className="infoBoxTitle">Death Reports</div>
                        <div className="infoBoxContent">
                            Learn about weather-related deaths near your home.
                        </div>
                    </div>
                <div className="btnBox">
                    <button className="btn">Death</button>
                </div>
            </div>
        </div>

        <div style={{ display: "none" }}>
            <Map />
        </div>    
        </div>
        ); 
}
}
export default Landing;
