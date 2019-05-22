import React, { Component } from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import Map from "../../components/HomeView/Map/Map.js";
import "../../scss/Home2.scss";
import { connect } from "react-redux";
import Charts from "../../components/HomeView/Charts.js";
import Charts2 from "../../components/HomeView/Charts2.js";
import Compare2 from "../../components/HomeView/Compare/Compare2.js";
import Compare3 from "../../components/HomeView/Compare/Compare3.js";
import Footer from "../../components/HomeView/Footer.js";
import Auth from "../../Auth0/Auth.js";
import ReactJoyRide, { STATUS } from 'react-joyride';
import { setLoginVars } from "../../actions";

const auth = new Auth();

class Home2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      run: true,
      steps: [
        {
          title: 'Welcome to the LiveSafe app!',
          content: (
                <div>
                  {/* <h1>Welcome to the LiveSafe app!</h1><br /> */}<br />
                  <h1>Please take a quick tour of our site. You may skip the tour any time.</h1><br />
                  <h3>Press next to begin</h3>
                </div>
              ),
          placement: 'center',
          styles: {
                options: {
                  width: 500,
                  height: 500
                }
              },
          locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
          target: '.main-layout',
        },
        {
          title: 'Begin by seaching for a U.S. address.',
          content: ( <div>  
              <h3>The map will navigate to that location.</h3>
              <img src="https://i.ibb.co/f9QHXvG/Screenshot-from-2019-05-21-13-22-41.png" alt="Manhattan" border="0" />
                            
          </div>),
          placement: 'left',
          styles: {
            options: {
              // width: 500
            }
          },
          target: '.navbarb .nav .center',
          
        },
        {
          title: 'Use the map navigation buttons to navigate the map.',
          content: (
            <div>
              <br />
              <img src="https://i.ibb.co/nc629cF/Screenshot-from-2019-05-21-13-35-55.png" alt = "Fullscreen mode" border="0" />
              <h1> We recommend toggling full screen mode for a better experience.</h1> 
              <br /><img src="https://i.ibb.co/4WdGqgW/Screenshot-from-2019-05-21-13-36-19.png" alt = "Your location" border="0" /> 
              <h1>Click this button to pan to your current location. Your location data will not be stored.</h1>        
                  
            </div>
          ),
          target: '.mapboxgl-ctrl-top-right',
          placement: 'left'
        },
        {
          title: (<h1><u>Double clicking</u> on the desired location will load Natural Disaster data for that location.</h1>),
          content: (
            <div>
              <br />
              <img src="https://i.ibb.co/68x5YpK/Screenshot-from-2019-05-21-13-54-40.png" alt="Selected Pins" border="0" />
              <h1> A pin will be displayed on the chosen location.</h1> 
              <br />
              <h1> You may place as many pins as you like on the map.</h1>
                  
            </div>
          ),
          target: '.map',
          placement: 'center'
        },
        {
          title: 'Toggle disasters by category.',
          content: (
            <div>
              <br />
              <img src="https://i.ibb.co/ZSGryz2/Screenshot-from-2019-05-21-14-10-19.png" alt="County Layers" border="0" />             
              <h1>  Counties will display a color-coded layer which represents the relative risk for the selected disaster type.</h1> 
              <br />
              <h1>Counties will display a layer which represents relative risk for selected disaster type</h1>
                                
            </div>
          ),
          target: '#menu-a',
          placement: 'right'
        },
        {
          title: (<h1> You will find Historical Data and Future Predictions in the <img src="https://i.ibb.co/5662M4C/Screenshot-from-2019-05-21-15-05-31.png" alt ="Historical Data" border="0" /> and <img src="https://i.ibb.co/jbd4sBF/Screenshot-from-2019-05-21-15-07-45.png" alt="Screenshot-from-2019-05-21-15-07-45" border="0" /> sections.</h1>),
          content: (
            <div>
              <br />
              <h1>You can toggle a specific location in the <img src="https://i.ibb.co/g6Q7pg0/Screenshot-from-2019-05-21-15-02-35.png" alt="locations" border="0" /> section to display data about that location.</h1>
            </div>
          ),
          styles: {
            options: {
              height: 500
            }
          },
          target: '.right-pane',
          placement: 'left'
        },
        {
          title: (<h1>Compare risk levels for <u>two or more counties</u> side by side (Please consider a one time payment to compare more than two counties).</h1>),
          content: (
            <div>
              <br />
              <h1>That is, ahem, if <img src="https://i.ibb.co/fHD5qqK/Screenshot-from-2019-05-21-15-19-34.png" alt="Screenshot-from-2019-05-21-15-19-34" /> finishes with the graphs.</h1>
              {/* <img src="https://i.ibb.co/ZSGryz2/Screenshot-from-2019-05-21-14-10-19.png" alt="County Layers" border="0" />              <h1>  Counties will display a color coded layer for that disaster type which represents relative risk.</h1>  */}
              {/* <br /> */}
              <br />
              <h1> You may be wondering how to make a payment. The link is well hidden.  Let him that hath understanding find that link.</h1>
              <br />
              <h1>You may need to scroll down to see this section.</h1>
                                
            </div>
          ),
          target: '.right-compare',
          placement: 'left'
        },
        {
          title: (<h1> Press this button to begin a tour of the selected counties.</h1>),
          content: (
            <div>
              <h1> The color of the layer represents the relative <u>TOTAL RISK</u> of the underlying county based on <u>all natural disaster categories</u>.  </h1>
              <br />
              <img src="https://i.ibb.co/tCWhdP3/Screenshot-from-2019-05-21-15-45-29.png" alt="Compare tour" border="0" />
              <br />
              <h1>Click the button again to stop the tour and return to the location first selected.</h1>
                                
            </div>
          ),
          target: '#compare',
          placement: 'bottom'
        },
        {
          title: (<h1> You may view two locations side by side by clicking this button.</h1>),
          content: (
            <div>
              <h1> The color of the layer represents the relative <u>TOTAL RISK</u> of the underlying county based on <u>all natural disaster categories</u>.  </h1>
              <br />
              <br />
              <img src="https://i.ibb.co/G945MDy/Screenshot-from-2019-05-21-15-50-58.png" alt="Browse mode" border="0" />             <br />
              <h1>Click the button again to exit browsing mode.</h1>
                                
            </div>
          ),
          styles: {
            options: {
              width: 550
            }
          },
          target: '#browse',
          placement: 'bottom'
        },
        {
          title: (<img src="https://i.ibb.co/StzBjpv/Screenshot-from-2019-05-21-15-56-55.png" alt="Screenshot-from-2019-05-21-15-56-55" border="0" />),
          content: (
            <div>
              <h1> Thank you for visiting LiveSafe. </h1>
              <br />
              <h1>You may find out more about our sources and methodologies by clicking on the About link.</h1>
              <br />
              {/* <img src="https://i.ibb.co/G945MDy/Screenshot-from-2019-05-21-15-50-58.png" alt="Browse mode" border="0" />             <br /> */}
              <h1> Don't forget to share our site.</h1>
                                
            </div>
          ),
          styles: {
            options: {
              width: 450
            }
          },
          target: '.map',
          placement: 'center'
        },
        // {
        //   content: (
        //     <div>
        //       <h3>All about us</h3>
        //       <svg
        //         width="50px"
        //         height="50px"
        //         viewBox="0 0 96 96"
        //         version="1.1"
        //         xmlns="http://www.w3.org/2000/svg"
        //         preserveAspectRatio="xMidYMid"
        //       >
        //         <g>
        //           <path
        //             d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
        //             fill="#000000"
        //           />
        //         </g>
        //       </svg>
        //     </div>
        //   ),
        //   placement: 'left',
        //   target: '.demo__about h2',
        // },
      ],
    };
  }




  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }


  handleJoyrideCallback = data => {
    const { status, type } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: false });
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  };


  render() {

    const { run, steps } = this.state;
    console.log(steps)
    // if (this.props.fetchingInfo) {
    //   return <p>loading</p>;
    // } else {
    return (
      <>
        <div className = 'demo-wrapper'>
        <ReactJoyRide
          callback={this.handleJoyrideCallback}
          continuous
          run={true}
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={steps}
          styles={{
            options: {
              zIndex: 1000,
            }
          }}
        />
        </div>

          
        <NavbarB />
        <div className={"main-layout " + (this.props.dark ? "dark" : "light")}>
          <div className="left-pane">
            <Map />
          </div>

          <div className="right-pane">
          
            <div className="right-bottom">
              <Compare2 />
            </div>
            <div className="right-middle">
              <Charts2 />
            </div>
            <div className="right-top">
              <Charts />
            </div>

            <div className="three" />
            <div className="right-compare">
              <Compare3 />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ dark, pinAddresses, fetchingInfo }) => ({
  dark,
  pinAddresses,
  fetchingInfo
});

export default connect(
  mapStateToProps,
  { setLoginVars }
)(Home2);
