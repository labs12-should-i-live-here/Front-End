import React, { Component } from 'react'
import NavBarB from '../../components/Shared/NavbarB.js';
import Search from '../../components/LandingSearch/Search.js';
// import Footer from '../../components/HomeView/Footer';
import '../../scss/Landing.scss';
// import Suggestions from '../../components/LandingSearch/Suggestions.js';
// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'



class Landing extends Component {
    render() {
        return (
            <div>
                <NavBarB />
                <div className='landingPage'>
                    <div className='taglineSearch'>
                        <div className='tagline'>
                            Tagline
                            <div className='subtagline'>
                                Sub Tagline
                            </div>
                        </div>
                        <Search />
                    </div>
                </div>
                {/* <Suggestions /> */}
            </div>
        )
    }
}

export default Landing;

// client/src/components/Shared/NavbarB.js