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
                <div className='landingPage'>
                    <div className='taglineSearch'>
                        <div className='tagline'>
                            Know the risk before you decide
                            <div className='subtagline'>
                                We'll help you find a safe home
                            </div>
                            <div className='btnBox'>
                            <button className='btn'>Counties</button>
                        </div>   
                            <div id="geocoder" className='landingSearchBar'></div>
                        </div>

                    </div>
                    {/* <Suggestions /> */}
                </div>
                <div className="marketingTitleBox">
                    <div className="infoTitle">
                        We have all the stats on weather threats across the US. <br />
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
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
        voluptate velit esse quam nihil molestiae 
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
        but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because 
        occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
        which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right 
        to find fault with a man who
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
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda 
        est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
        repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores 
        alias uatur aut perferendi
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
