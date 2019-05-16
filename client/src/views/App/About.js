import React, { Component } from 'react'
import NavBarB from '../../components/Shared/NavbarB.js';
import Search from '../../components/LandingSearch/Search.js';
// import Footer from '../../components/HomeView/Footer';
import '../../scss/Landing.scss';
import Map from "../../components/HomeView/Map/Map.js";
// import Suggestions from '../../components/LandingSearch/Suggestions.js';
// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'



class Landing extends Component {
    render() {
        return (
            <div>
                <NavBarB /> 
                    <div style={{ display: "none" }}>
                        <Map />
                    </div>
                </div>
            // </div>
        )
    }
}

export default Landing;
