import React, { Component } from "react";
import "./style.css";
import FurnishedImg5 from "../../images/background.PNG";
import iconImage from "../../images/icon.svg";
import cartImage from "../../images/cart.svg";
import arrowImage from "../../images/arrow.svg";
import cardImage from "../../images/image.png";
import wallArtImage from "../../images/wall_art.png";
import brassImage from "../../images/brass.png";
import superCoolImage from "../../images/super_cool.png";

class MarketplaceMerchantProfile extends Component {
  render() {
    return (
      <div>
        <div
          className="container text-center"
          style={{ padding: 0, height: "100%" }}
        >
          <div
            style={{
              backgroundImage: `url(${FurnishedImg5})`,
              backgroundSize: "100% 137px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                background: "white",
                position: "relative",
                top: "15px",
                borderRadius: "25px 20px 0px 0px",
                padding: "10px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i className="fa fa-times-circle fa-2x mt-3"></i>
                </div>
                <div>
                  <img src={iconImage} alt="icon" className="mt-3" style={{}} />
                  <img src={cartImage} alt="icon" className="mt-3 pl-3" />
                </div>
              </div>
              <div>
                <b>Furnish Store</b>
              </div>
              <span style={{ fontSize: "9px" }}>City, USA</span>
              <div>
                <img
                  src={FurnishedImg5}
                  alt="furnish"
                  className="mt-3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="text-left mt-2">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="search store"
                    className="change"
                    style={{
                      border: "0px",
                      backgroundColor: "#f7f7f7",
                      height: "42px",
                      paddingLeft: "32px",
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  />
                  <i
                    className="fa fa-search"
                    style={{ marginLeft: "-42px" }}
                    aria-hidden="true"
                  ></i>
                </form>
              </div>
              <div className="d-flex overflow-auto mt-4">
                <div
                >
                  <button
                    style={{
                      width: "70px",
                      color: "white",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderRadius: "25px",
                      backgroundColor: "black"
                    }}
                  >
                    All
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      width: "90px",
                      color: "black",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      marginLeft: "10px",
                      border: "1px solid #707070",
                    }}
                  >
                    Clothes
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      width: "90px",
                      color: "black",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      marginLeft: "10px",
                      border: "1px solid #707070",
                    }}
                  >
                    Gadgets
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      width: "70px",
                      color: "black",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      marginLeft: "10px",
                      border: "1px solid #707070",
                    }}
                  >
                    Stuff
                  </button>
                </div>
              </div>
              <div style={{ clear: "left", paddingTop: "50px" }}>
                <span
                  style={{
                    float: "left",
                    fontWeight: 400,
                  }}
                >
                  Home Furnishings
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "25px",
                    fontSize: "13px",
                  }}
                >
                  View all
                  <img
                    src={arrowImage}
                    alt="arrow"
                    style={{ paddingLeft: "15px" }}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-around" style={{ clear: "left" }}>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={cardImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Geometric <br></br>Footstool
                  </span>
                </div>
                </div>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={wallArtImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Wall Art
                  </span>
                </div>
                </div>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={brassImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Brass <br></br>Earings
                  </span>
                </div>
                </div>
                </div>
                <div className="d-flex justify-content-around">
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={superCoolImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Super Cool <br></br>records
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={brassImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Brass <br></br>Earings
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "30px"
                  }}
                >
                  <img
                    src={cardImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span style={{ fontSize: "12px", fontWeight: 500 }}>
                    Geometric <br></br>Footstool
                  </span>
                </div>
                </div>
                <div style={{ clear: "left", paddingTop: "50px" }}>
                <span
                  style={{
                    float: "left",
                    fontWeight: 400,
                  }}
                >
                  Home Furnishings
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "25px",
                    fontSize: "13px",
                  }}
                >
                  View all
                  <img
                    src={arrowImage}
                    alt="arrow"
                    style={{ paddingLeft: "15px" }}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-around" style={{ clear: "left" }}>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={cardImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Geometric <br></br>Footstool
                  </span>
                </div>
                </div>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={wallArtImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Wall Art
                  </span>
                </div>
                </div>
                <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={brassImage}
                    alt="arrow"
                    style={{ paddingBottom: "15px" }}
                  />
                  <br></br>
                  <span>
                    <b>$160.00</b>
                  </span>
                  <br></br>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#494646",
                    }}
                  >
                    Brass <br></br>Earings
                  </span>
                </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketplaceMerchantProfile;
