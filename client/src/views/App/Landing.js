import React, { Component } from 'react'
import NavBarB from '../../components/Shared/NavbarB.js';
import Search from '../../components/LandingSearch/Search.js';
// import Footer from '../../components/HomeView/Footer';
import '../../scss/Landing.scss';
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
                <NavBarAuthed />
                <div className='landingPage'>
                    <div className='taglineSearch'>
                        <div className='tagline'>
                            Know the risk before you decide
                            <div className='subtagline'>
                                We'll help you find a safe home
                            </div>

                            <a href="/home"><button className='topBtn'>Learn More</button></a>
                            <div id="geocoder" className='landingSearchBar'></div>
                        </div>

                    </div>
                    {/* <Suggestions /> */}
                </div>
                <div id="learnMore" className="marketingTitleBox">
                    <div className="infoTitle">
                        You'll never have to live in fear.
                    </div>

                </div>
                <div className="infoBoxes">

                <div className="infoBox">
                        <div className="infoImage">
                            <div className='img1'>
                            </div>
                        </div>
                        <div className="textBox">
                            <div className='infoTitle'>Risk Data</div>
                            <div className='infoContent'>Learn the weather risks in your area.</div>
                            </div>
                        <div className='btnBox'>
                            <button className='btn'>Risks</button>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="infoImage">
                            <div className='img2'>
                            </div>
                        </div>
                        <div className="textBox">
                            <div className='infoTitle'>Damage Reports</div>
                            <div className='infoContent'>Discover weather related damage near you.</div>
                            </div>
                        <div className='btnBox'>
                            <button className='btn'>Damage</button>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="infoImage">
                            <div className='img3'>
                            </div>
                        </div>
                        <div className="textBox">
                            <div className='infoTitle'>Death Stats</div>
                            <div className='infoContent'>Know about dangerous conditions before moving.</div>
                            </div>
                        <div className='btnBox'>
                            <button className='btn'>Deaths</button>
                        </div>
                    </div>
                <div style={{ display: "none" }}>
                    <Map />
                </div>
            </div>
        </div>
        )
    }
}

export default Landing;
