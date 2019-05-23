import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component1 extends Component {
  render() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <div className="intro aboutIntro">
              <h2 style={hStyle}>What is LiveSafe?</h2>
              <h3 style={hStyle}>Mission Statement</h3>
              <article style={articleStyle}>
                Secure your investments and take pride into your property with
                new mapping technology for ground analytics. To bring together
                relevant information about disaster risks in a particular area,
                to inform the buying and renting decisions of potential
                homeowners and businesses
              </article>
              <h3 style={hStyle}>The Idea</h3>
              <article style={articleStyle}>
                The LiveSafe project gives users a one-stop shop for quantifying
                the risks of natural disasters for a particular zip code in the
                US. It displays several layers of data, including different
                kinds of disasters and different timeframes (present,
                predictions, etc.) A user can interact with the data in two
                ways: maps and comparisons. The user can look at a map with as
                many layers as needed, or go into a detailed comparison of two
                different places with all the in-depth information about those
                places at once. The data will be granular at the zip code level.
                The API allows a user to specify an address and directs them to
                the right zipcode.
              </article>

              <button style={btn} onClick={this.props.toggleA}>Toggle Our Team</button>
              <article style={articleStyle}>
                Through the selection process, we chose a big project to tackle.
                Each of us come from different backgrounds and education.
                Through hard work and determination we were able to lead
                eachother to a finished product. We are proud of the work put
                into this project, and your continue use as a user fulfill our
                purpose as developers and data scientists.
              </article>
              

              <button style={btn} onClick={this.props.toggleB}>Toggle Info</button>
              <article style={articleStyle}>All the information used for this application is captured into documentation.</article>
              
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}
}

const c1Style = {
  background: "steelblue",
  marginTop: "50px",
  color: "white",
  padding: "1.5rem",
  fontSize: "1.2em"
};
const hStyle = {
    paddingBottom: "1.5rem",
    fontWeight: "bold"
  };
const articleStyle = {
    paddingBottom: "1.5rem"
}
const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component1;
