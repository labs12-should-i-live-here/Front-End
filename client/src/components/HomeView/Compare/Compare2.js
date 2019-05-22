import "animate.css";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { BuildingHouse } from "styled-icons/boxicons-solid/BuildingHouse";
import { MapMarkerAlt } from "styled-icons/fa-solid/MapMarkerAlt";
import { changePinIndex } from "../../../actions";
import { Notepad } from "styled-icons/boxicons-regular/Notepad";
import { Save } from "styled-icons/boxicons-regular/Save";

const PlayGreen = styled(PlayCircle)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
  margin-right: 8px;
`;

const Saved = styled(Save)`
  color: gray;
  height: 20px;
  width: 20px;
  margin-left: 5px;
`;

const Notes = styled(Notepad)`
  color: gray;
  height: 20px;
  width: 20px;
  margin-left: 5px;
`;

const Home = styled(BuildingHouse)`
  color: gray;
  height: 20px;
  width: 20px;
  margin-left: 5px;
`;

const DotsBlack = styled(DotsVerticalRounded)`
  color: black;
  height: 18px;
  width: 18px;
  border-radius: 6px;
  opacity: 0.7;
  :hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
  }
  cursor: pointer;
  margin-right: 8px;
`;

const PlayGreenDisabled = styled(PlayCircle)`
  color: black;
  height: 35px;
  width: 35px;
  margin-right: 8px;
  border-radius: 6px;
`;

const MapPinGreen = styled(MapMarkerAlt)`
  color: #2e64ab9c;
  height: 45px;
  width: 45px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const MapPinGreenSmall = styled(MapMarkerAlt)`
  color: #2e64ab;
  height: 15px;
  width: 15px;
  padding-right: 5px;
  cursor: pointer;
`;

class Compare3 extends Component {
  //pulsing icon when addresses on store, change ket to uuid
  state = {
    notes: false
  };
  tour = () => {
    console.log("tour of counties to be implemented on this click!");
  };

  sendPinIndex = index => {
    console.log("index from ", index);
    this.props.changePinIndex(index);
  };

  render() {
    return (
      <>
        <header>
          <h2>Locations</h2>
        </header>

        <div className="main-compare-card">
          <div className="top">
            {this.props.fetchingHistoricalData ? (
              <div className="loader">
                <Loader type="Oval" color="#2e64ab" height="40" width="40" />
              </div>
            ) : this.props.pins[0] ? (
              this.props.pinAddresses.map((pin, index) => (
                <div
                  className="card animated bounceInRight"
                  onClick={() => this.sendPinIndex(index)}
                  key={index}
                >
                  {
                    <>
                      <details>
                        <summary>
                          <div className="card-left animated bounceInRight">
                            <MapPinGreenSmall />
                            {/* <HomeRed /> */}
                          </div>
                          {pin} ({this.props.pins[index].COUNTY} county)
                        </summary>
                        {localStorage.getItem("isLoggedIn") ? (
                          <div>
                            <form>
                              <div className="options">
                                <h4>
                                  Unsaved <Saved />
                                </h4>
                                <button>Save</button>
                                <h4>
                                  Not home <Home />
                                </h4>
                                <button>Set Home</button>
                              </div>

                              <div className="notes">
                                <h4>
                                  Notes <Notes />
                                </h4>
                                {this.state.notes ? (
                                  <p>some note</p>
                                ) : (
                                  <p>No notes</p>
                                )}
                                <div>
                                  <input
                                    type="text"
                                    name="note"
                                    placeholder="Add a note"
                                  />
                                  <button>Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        ) : (
                          <p>Please login to access these features</p>
                        )}

                        {/* <div className="card-right">
                          <DotsBlack />
                        </div> */}
                      </details>
                    </>
                  }
                </div>
              ))
            ) : (
              <div className="middle">
                <p>
                  <MapPinGreen />
                </p>
                <p className="msg">
                  No Locations. Please double click map to add.
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  fetchingHistoricalData,
  fetchingPredictionData,
  pinAddresses,
  pins
}) => ({
  fetchingHistoricalData,
  fetchingPredictionData,
  pinAddresses,
  pins
});

export default connect(
  mapStateToProps,
  { changePinIndex }
)(Compare3);
