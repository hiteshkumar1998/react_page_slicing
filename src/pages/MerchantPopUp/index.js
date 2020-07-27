import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import bgImg from "../../images/merchant_popup.jpeg";
import popupIMG from "../../images/popup.png";
import popupIMG2 from "../../images/popup2.png";
import mapIconIMG from "../../images/map-merker.png";
import phoneIconIMG from "../../images/phone-icon.png";
import rightArrowIconIMG from "../../images/right-arrow.png";

var settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

class MerchantPopUp extends Component {
  render() {
    return (
      <>
        <div
          className="container text-center"
          style={{ padding: 0, height: "100%" }}
        >
          <div
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "40px 15px 40px 15px",
              }}
            >
              <div
                className="container"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 15,
                  backgroundColor: "white",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex">
                  <div>
                    <i className="fa fa-times-circle fa-2x"></i>
                  </div>
                  <div className="header_text" style={{ paddingRight: "25px" }}>
                    Cheese Bar
                  </div>
                </div>
                <div
                  style={{
                    letterSpacing: "3px",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  PHOTOS & VIDEOS
                </div>
                <div>
                  <Slider {...settings}>
                    <div className="video-icon">
                      <img src={popupIMG} alt="icon" className="mt-4" />
                    </div>
                    <div className="video-icon">
                      <img src={popupIMG2} alt="icon" className="mt-4" />
                    </div>
                    <div className="video-icon">
                      <img src={popupIMG} alt="icon" className="mt-4" />
                    </div>
                  </Slider>
                </div>
                <div
                  className="mt-5"
                  style={{
                    letterSpacing: "3px",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  INFORMATION
                </div>
                <div className="d-flex mt-4">
                  <div style={{ width: "30px" }}>
                    <img src={mapIconIMG} alt="icon" className="w-100" />
                  </div>
                  <div
                    className="text-left"
                    style={{
                      fontSize: "11px",
                      paddingTop: "10px",
                      paddingLeft: "5px",
                      width: "100%",
                      fontWeight: 500,
                    }}
                  >
                    6031 SE Belmont St, Portland, OR 97215....
                  </div>
                  <div>
                    <img src={rightArrowIconIMG} alt="icon" />
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div style={{ width: "30px" }}>
                    <img src={phoneIconIMG} alt="icon" className="w-100" />
                  </div>
                  <div
                    className="text-left"
                    style={{
                      fontSize: "11px",
                      paddingTop: "6px",
                      paddingLeft: "5px",
                      width: "100%",
                      fontWeight: 500,
                    }}
                  >
                    15032226014
                  </div>
                  <div>
                    <img src={rightArrowIconIMG} alt="icon" />
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div style={{ width: "30px" }}></div>
                  <div
                    className="text-left"
                    style={{
                      fontSize: "11px",
                      paddingTop: "6px",
                      paddingLeft: "5px",
                      width: "100%",
                      fontWeight: 500,
                    }}
                  >
                    http://www.cheese-bar.com/
                  </div>
                  <div>
                    <img src={rightArrowIconIMG} alt="icon" />
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <button className="btn text-white footer_popup_btn">
                    Message Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MerchantPopUp;
