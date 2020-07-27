import React, { Component } from "react";
import Slider from "react-slick";
import downArrowImage from "../../images/down_arrow.svg";
import searchImage from "../../images/search.svg";
import truckImage from "../../images/truck.png";
import cartImage from "../../images/cart.svg";
import arrowImage from "../../images/arrow.svg";
import FurnishedImg5 from "../../images/background.PNG";
import cardImage from "../../images/image.png";
import wallArtImage from "../../images/wall_art.png";
import brassImage from "../../images/brass.png";
import footerImage from "../../images/footer_image.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

class MarketplaceMerchantProfile extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="text-left pt-3">
            <div
              style={{
                color: "#4da6f1",
                fontWeight: 500,
                paddingLeft: "15px",
              }}
            >
              Delievery address
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ paddingLeft: "15px" }}
          >
            <div>
              <div
                style={{
                  fontWeight: 700,
                  wordSpacing: "5px",
                }}
              >
                1176 94th Ave NE
                <img
                  src={downArrowImage}
                  alt="apple"
                  style={{ paddingLeft: "5px" }}
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={searchImage}
                  alt="icon"
                  style={{ paddingRight: "15px" }}
                />
                <img src={cartImage} alt="icon" />
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{ marginTop: "35px", paddingLeft: "15px" }}
          >
            <div
              style={{
                borderBottom: "1px solid grey",
                fontSize: "14px",
              }}
            >
              <b>STORES</b>
            </div>
            <div style={{ marginLeft: "86px", fontSize: "14px" }}>
              <b>CATEGORY</b>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f1f8fe",
              marginTop: "20px",
              marginLeft: "-15px",
              marginRight: "-15px",
              paddingTop: "30px",
              height: "150px",
            }}
          >
            <Slider {...settings}>
              <div>
                <img
                  src={truckImage}
                  alt="apple"
                  style={{ paddingLeft: "32px" }}
                />
                <div
                  className="text-left"
                  style={{
                    color: "#ef7e0d",
                    fontWeight: 500,
                    paddingBottom: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  Delievery graphic
                </div>
                <button
                  style={{
                    fontSize: "10px",
                    background: "white",
                    height: "17px",
                    marginBottom: "20px",
                    borderRadius: "26px",
                    border: "0px",
                  }}
                >
                  Learn More
                </button>
              </div>
              <div>
                <img
                  src={truckImage}
                  alt="apple"
                  style={{ paddingLeft: "32px" }}
                />
                <div
                  className="text-left"
                  style={{
                    color: "#ef7e0d",
                    fontWeight: 500,
                    paddingBottom: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  Delievery graphic
                </div>
                <button
                  style={{
                    fontSize: "10px",
                    background: "white",
                    height: "17px",
                    marginBottom: "20px",
                    borderRadius: "26px",
                    border: "0px",
                  }}
                >
                  Learn More
                </button>
              </div>
              <div>
                <img
                  src={truckImage}
                  alt="apple"
                  style={{ paddingLeft: "32px" }}
                />
                <div
                  className="text-left"
                  style={{
                    color: "#ef7e0d",
                    fontWeight: 500,
                    paddingBottom: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  Delievery graphic
                </div>
                <button
                  style={{
                    fontSize: "10px",
                    background: "white",
                    height: "17px",
                    marginBottom: "20px",
                    borderRadius: "26px",
                    border: "0px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </Slider>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ paddingTop: "50px" }}
          >
            <div className="text-left">
              <div
                style={{
                  fontWeight: 400,
                }}
              >
                <b>Furniture Store</b>
              </div>
              <div style={{ fontSize: "9px" }}>City, USA</div>
            </div>
            <div
              style={{
                fontSize: "13px",
              }}
            >
              View store
              <img
                src={arrowImage}
                alt="arrow"
                style={{ paddingLeft: "15px" }}
              />
            </div>
          </div>
          <div>
            <img
              src={FurnishedImg5}
              alt="furnish"
              className="mt-3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginLeft: "5px",
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
            <div
              style={{
                marginLeft: "60px",
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
            <div
              style={{
                marginLeft: "60px",
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
          <div
            className="d-flex justify-content-between"
            style={{ paddingTop: "50px" }}
          >
            <div className="text-left">
              <div
                style={{
                  fontWeight: 400,
                }}
              >
                <b>Kidz Club Toy Store</b>
              </div>
              <div style={{ fontSize: "9px" }}>City, USA</div>
            </div>
            <div
              style={{
                fontSize: "13px",
              }}
            >
              View store
              <img
                src={arrowImage}
                alt="arrow"
                style={{ paddingLeft: "15px" }}
              />
            </div>
          </div>
          <div>
            <img
              src={footerImage}
              alt="footer_image"
              className="mt-3"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MarketplaceMerchantProfile;
