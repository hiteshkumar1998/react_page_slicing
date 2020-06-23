import React, { Component } from "react";
import Slider from "react-slick";
import "../LocationPermission.css";
import shoppingCartImage from "./images/location_shopping_cart_icon.svg";
import videoIconImage from "./images/video_icon.svg";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

class HomeGettingStarted extends Component {
  render() {
    return (
      <div>
        <div className="container text-center" style={{ height: "820px" }}>
          <div className="row mt-5">
            <div className="col-md-12 mt-5 mb-2">
              <span className="combined-text">Logo</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={shoppingCartImage} alt="apple" className="mt-5" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-2"></div>
            <div
              className="col-md-7 ml-3 pt-3"
              style={{ fontWeight: "500", fontSize: "20px" }}
            >
              Shop stores<br></br>you know and trust
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-12 pt-4 text-center">
              <Slider {...settings}>
                <div className="video-icon">
                  <img src={videoIconImage} alt="icon" className="mt-4" />
                  <span className="icon-text pt-2 mb-5">
                    Video link about us
                  </span>
                </div>
                <div className="video-icon">
                  <img src={videoIconImage} alt="icon" className="mt-4" />
                  <span className="icon-text pt-2 mb-5">
                    Video link about us
                  </span>
                </div>
                <div className="video-icon">
                  <img src={videoIconImage} alt="icon" className="mt-4" />
                  <span className="icon-text pt-2 mb-5">
                    Video link about us
                  </span>
                </div>
              </Slider>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <button className="btn footer-btn-left">
                <b>Sign-in</b>
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn text-white footer-btn-right">
                <b>Get started</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGettingStarted;
