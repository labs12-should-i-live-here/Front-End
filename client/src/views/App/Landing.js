import React, { Component } from 'react'
import NavBarB from '../../components/Shared/NavbarB.js';
import Search from '../../components/LandingSearch/Search.js';
// import Footer from '../../components/HomeView/Footer';
import '../../scss/Landing.scss';
import Map from "../../components/HomeView/Map/Map.js";
import NavBarLanding from '../../components/Shared/NavBarLanding.js';
// import Suggestions from '../../components/LandingSearch/Suggestions.js';
// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'



class Landing extends Component {
    render() {
        return (
            <div>
                <NavBarLanding />
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
                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        </div>
                        <div className='btnBox'>
                            <button className='btn'>Heat Maps</button>
                        </div>

                    </div>
                    <div className="infoBox">
                        <div className="infoImage">
                            <div className='img2'>
                            </div>
                        </div>
                        <div className="textBox">
                            1914 translation by H. Rackham
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
    I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
    the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                        </div>
                        <div className='btnBox'>
                            <button className='btn'>Earthquakes</button>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="infoImage">
                            <div className='img3'>
                            </div>
                        </div>
                        <div className="textBox">
                            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                        </div>
                        <div className='btnBox'>
                            <button className='btn'>Counties</button>
                        </div>


                    </div>
                </div>
                <div style={{ display: "none" }}>
                    <Map />
                </div>
            </div>
            // </div>
        )
    }
}

export default Landing;
