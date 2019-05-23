import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Component1 from "../../components/AboutView/Component1.js"; //spring styling content
import Component2 from "../../components/AboutView/Component2.js"; //spring styling content
import Map from "../../components/HomeView/Map/Map.js";
import NavBarB from "../../components/Shared/NavbarB.js";
import Info from "./Info.js";

class About extends Component {
  state = {
    showTeam: false,
    showInfo: false
  };

  toggleA = e => this.setState({ showTeam: !this.state.showTeam });
  toggleB = e => this.setState({ showInfo: !this.state.showInfo });
  // ,{showInfo: !this.state.showInfo})

  render() {
    return (
      <div>
        <NavBarB />
        <div style={{ display: "none" }}>
          <Map />
        </div>
        <div className="container">
          <Component1 toggleA={this.toggleA} toggleB={this.toggleB}/>
          <Transition
          native
          items={this.state.showTeam}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component2 />
              </animated.div>
            ))
          }
        </Transition>
        <Transition
          native
          items={this.state.showInfo}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Info />
              </animated.div>
            ))
          }
        </Transition>
        </div>
      </div>
    );
  }
}

export default About;
