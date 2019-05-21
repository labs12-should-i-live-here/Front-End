import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Component1() {
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

              <h2 style={hStyle}>Our Team</h2>
              <article style={articleStyle}>
                Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
                sit amet nisi euismod sed cursus arcu elementum ipsum arcu
                vivamus quis venenatis orci lorem ipsum et magna feugiat
                veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
              </article>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  marginTop: "50px",
  color: "white",
  padding: "1.5rem"
};
const hStyle = {
    paddingBottom: "1.5rem"
  };
const articleStyle = {
    paddingBottom: "1.5rem"
}