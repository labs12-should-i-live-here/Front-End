import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <div style={c2mainStyle}>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 4000, duration: 1500 }}
        >
          {props => (
            <div style={props}>
              <div style={c2Style}>
                <div style={c2teamStyle}>
                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Hamza Elkhoudiri</div>
                    <div className="tabs-item-description">
                      <h3>Project Manager</h3>
                      <h4>Raleigh, NC</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/hamza.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <p />
                      <a href="https://hamzaelk.com" target="_blank">
                        Portfolio
                      </a>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/hamza-elkhoudiri-a606aa162/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                      <br />
                      <a href="https://github.com/elkhoudh" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Kim Duclos</div>

                    <div className="tabs-item-description">
                      <h3>Web Developer</h3>
                      <h4>Boulder, CO</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/kim.jpeg")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a href="https://github.com/KimDuclos" target="_blank" >GitHub</a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Taylor Blount</div>

                    <div className="tabs-item-description">
                      <h3>Full Stack Web</h3>
                      <h4>Glades</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/taylor.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a
                        href="https://twitter.com/Third3y3Club"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Shreyas Jothish</div>

                    <div className="tabs-item-description">
                      <h3>Data Scientist</h3>
                      <h4>Bangalore, India</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/shreyas.png")}
                      alt=""
                    />

                    <div className="tabs-item-description">
                      <p />
                    </div>
                    <div style={c2linkStyle}>
                    <a
                        href="https://www.linkedin.com/in/shreyasjothish/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                      <br />
                      <a href="https://twitter.com/ShreyasJothish" target="_blank">
                        Twitter
                      </a>
                      <br />
                      <a
                        href="https://github.com/ShreyasJothish"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Manjula Mishra</div>

                    <div className="tabs-item-description">
                      <h3>Data Scientist</h3>
                      <h4>Palo Alto, CA</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/manjula.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a
                        href="https://www.linkedin.com/in/manjula-mishra/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                      <br />
                      <a
                        href="https://github.com/manjulamishra"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Daniel Martin-Alarcon</div>

                    <div className="tabs-item-description">
                      <h3>Data Scientist</h3>
                      <h4>San Francisco, CA</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/daniel.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a
                        href="https://www.linkedin.com/in/danielmartinalarcon/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                      <br />
                      <a href="https://www.martinalarcon.org/" target="_blank">
                        Portfolio
                      </a>
                      <br />
                      <a
                        href="https://github.com/DanielMartinAlarcon"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Arthur Leonard</div>

                    <div className="tabs-item-description">
                      <h3>Web Developer</h3>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/arthur.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a
                        href="https://github.com/ArthurLeonard"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Brian Illes</div>

                    <div className="tabs-item-description">
                      <h3>Web Developer</h3>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/brian.png")}
                      alt=""
                    />

                    <div className="tabs-item-description" />

                    <div style={c2linkStyle}>
                      <a href="https://github.com/brilles" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mobileBorder" />

                  <div style={c2memberStyle}>
                    <div className="tabs-item-title">Laryna Billinghurst</div>

                    <div className="tabs-item-description">
                      <h3>Web Developer</h3>
                      <h4>Las Vegas, NV</h4>
                    </div>

                    <img
                      style={c2iStyle}
                      src={require("./img/laryna.jpg")}
                      alt=""
                    />

                    <div className="tabs-item-description">
                      {/* <p>
                        To explore strange new code languages, to seek out new
                        life and new technology, to boldly go where no one has
                        gone before. To continue to push the boundaries of
                        technological limitations through the skills I am
                        gaining through my coding experience!
                      </p> */}
                    </div>

                    <div style={c2linkStyle}>
                      <a href="https://github.com/larynab" target="_blank">
                        Github
                      </a>
                      <br />
                      <a href="https://www.linkedin.com/in/laryna-billinghurst/" target="_blank">
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

const c2mainStyle = {
  width: "100%"
};
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};
const c2teamStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "1.5rem",
  alignItems: "center"
};
const c2memberStyle = {
  padding: "1.5rem"
}
const c2iStyle = {
  borderRadius: "200px",
  height: "250px",
  width: "250px",
  margin: "0 auto"
};
const c2linkStyle = {
  borderRadius: "360px",
  background: "lavender",
  padding: "1.5rem",
  width: "50px",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: "100px"
};
export default Component2;
