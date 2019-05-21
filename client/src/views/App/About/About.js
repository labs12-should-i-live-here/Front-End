import React, { Component } from "react";
import NavBarB from "../../../components/Shared/NavbarB.js";
import Search from "../../../components/LandingSearch/Search.js";
import Map from "../../../components/HomeView/Map/Map.js";
// import '../../../css/index.css';

class About extends Component {
  render() {
    return (
      <div>
        <NavBarB />
        <div style={{ display: "none" }}>
          <Map />
        </div>
        <div className="container">
          <div className="header">
            <div className="globe">
              <h1>
                <i className="fas fa-globe-americas">LiveSafe</i>
              </h1>
            </div>
          </div>
          <body>
          <div id="main">
            <div className="inner">
              <div className="intro aboutIntro">
                <h1>
                  <i className="fas fa-globe-americas aboutH1">LiveSafe</i>
                </h1>
                <h2 classNameName="aboutH2">What is LiveSafe?</h2>
                <h3 className="aboutH3">Mission Statement</h3>
                <article className="aboutArticle">
                  Secure your investments and take pride into your property with
                  new mapping technology for ground analytics. To bring together
                  relevant information about disaster risks in a particular
                  area, to inform the buying and renting decisions of potential
                  homeowners and businesses
                </article>
                <h3 className="aboutH3">The Idea</h3>
                <article className="aboutArticle">
                  The LiveSafe project gives users a one-stop shop for
                  quantifying the risks of natural disasters for a particular
                  zip code in the US. It displays several layers of data,
                  including different kinds of disasters and different
                  timeframes (present, predictions, etc.) A user can interact
                  with the data in two ways: maps and comparisons. The user can
                  look at a map with as many layers as needed, or go into a
                  detailed comparison of two different places with all the
                  in-depth information about those places at once. The data will
                  be granular at the zip code level. The API allows a user to
                  specify an address and directs them to the right zipcode.
                </article>

                <h2 className="aboutH2">Our Team</h2>
                <article className="aboutArticle">
                  Etiam quis viverra lorem, in semper lorem. Sed nisl arcu
                  euismod sit amet nisi euismod sed cursus arcu elementum ipsum
                  arcu vivamus quis venenatis orci lorem ipsum et magna feugiat
                  veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                </article>
              </div>

              <div className="section">
                <div className="tabs">
                  <div className="tabs-links">
                    <div
                      className="tabs-link tabs-link-selected"
                      data-tab="ProjectManager"
                    >
                      Project Manager Hamza
                    </div>
                    <div className="tabs-link" data-tab="Developer1">
                      Developer Kim
                    </div>
                    <div className="tabs-link" data-tab="Developer2">
                      Developer Laryna
                    </div>
                    <div className="tabs-link" data-tab="DS1">
                      Data Science Shreyas
                    </div>
                    <div className="tabs-link" data-tab="Developer3">
                      Developer
                    </div>
                    <div className="tabs-link" data-tab="Developer4">
                      Developer
                    </div>
                  </div>

                  <div className="tabs-items">
                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected tabs-item-selected2"
                      data-tab="ProjectManager"
                    >
                      <div className="tabs-item-title">Hamza Elkhoudiri</div>
                      <div className="tabs-item-description">
                        <h3>Project Manager</h3>
                        <h4>Raleigh, NC</h4>
                      </div>

                      <img src="assets/hamza.png" alt="" />

                      <div className="tabs-item-description">
                        <p />
                        <a href="https://hamzaelk.com" target="_blank">
                          Portfolio
                        </a>
                        <a
                          href="https://www.linkedin.com/in/hamza-elkhoudiri-a606aa162/"
                          target="_blank"
                        >
                          Linkedin
                        </a>
                      </div>

                      <div className="userGit">
                        <a
                          href="https://github.com/elkhoudh"
                          target="_blank"
                          className=""
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>

                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected2"
                      data-tab="Developer1"
                    >
                      <div className="tabs-item-title">Kim Duclos</div>

                      <div className="tabs-item-description">
                        <h3>Web Developer</h3>
                        <h4>Boulder, CO</h4>
                      </div>

                      <img src="assets/kim.jpeg" alt="" />

                      <div className="tabs-item-description">
                        <p />
                      </div>

                      <div className="userGit">
                        <a href="" className="">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>

                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected2"
                      data-tab="Developer2"
                    >
                      <div className="tabs-item-title">
                        Laryna
                        <br />
                        Billinghurst
                      </div>

                      <div className="tabs-item-description">
                        <h3>Web Developer</h3>
                        <h4>Las Vegas, NV</h4>
                      </div>

                      <img src="assets/Laryna.jpg" alt="" />

                      <div className="tabs-item-description">
                        <p>
                          To explore strange new code languages, to seek out new
                          life and new technology, to boldly go where no one has
                          gone before. To continue to push the boundaries of
                          technological limitations through the skills I am
                          gaining through my Lambda experience!
                        </p>
                      </div>

                      <div className="userGit">
                        <a
                          href="https://github.com/larynab"
                          target="_blank"
                          className="Laryna"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>

                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected2"
                      data-tab="DS1"
                    >
                      <div className="tabs-item-title">Shreyas Jothish</div>

                      <div className="tabs-item-description">
                        <h3>Data Scientist</h3>
                        <h4>Bangalore, India</h4>
                      </div>

                      <img src="assets/shreyas.png" alt="" />

                      <div className="tabs-item-description">
                        <p>
                          description
                          <br />
                          <br />
                          part b
                        </p>
                      </div>
                      <div className="userGit">
                        <a href="" className="">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>

                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected2"
                      data-tab="Developer3"
                    >
                      <div className="tabs-item-title">name</div>

                      <div className="tabs-item-description">
                        <h3>title</h3>
                        <h4>location</h4>
                      </div>

                      <img src="" alt="" />

                      <div className="tabs-item-description">
                        <p>
                          description
                          <br />
                          <br />
                          part b
                        </p>
                      </div>
                      <div className="userGit">
                        <a href="" className="">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>

                    <div className="mobileBorder" />

                    <div
                      className="tabs-item tabs-item-selected2"
                      data-tab="Developer4"
                    >
                      <div className="tabs-item-title">name</div>

                      <div className="tabs-item-description">
                        <h3>title</h3>
                        <h4>location</h4>
                      </div>

                      <img src="" alt="" />

                      <div className="tabs-item-description">
                        <p>
                          description
                          <br />
                          part a<br />
                          <br />
                          part b
                        </p>
                      </div>

                      <div className="userGit">
                        <a href="" className="">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer id="footer">
                <div className="inner-footer">
                  <section className="footer-about">
                    {/* <ul className="icons">
                  <li>
                    <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" className="icon"><i className="fab fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#" className="icon"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" className="icon2"><i className="fab fa-500px"></i></a>
                  </li>
                </ul>  */}
                  </section>
                </div>
              </footer>
            </div>
          </div>
          </body>
        </div>
      </div>
    );
  }
}

export default About;
