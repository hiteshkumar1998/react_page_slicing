import React, { Component } from "react";
import "./style.css";
import successIconImage from "../../images/success_icon.svg";
import circleIconImage from "../../images/circle.svg";

class DeliveryOption extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="header_text">Delivery options</div>
          </div>
          <div className="d-flex pl-3 pt-5" style={{ flexWrap: "wrap" }}>
            <div style={{ fontSize: "18px" }}>
              <b>Delivery options</b>
            </div>
            <div
              className="text-left pr-5"
              style={{ flexBasis: "100%", fontWeight: 500 }}
            >
              How and where would you like it to be delivered. ?
            </div>
          </div>
          <div className="delivery_options_box d-flex justify-content-between text-left mt-4">
            <div>
              <div
                className="address_box_text pl-2"
                style={{ fontSize: "18px" }}
              >
                <b>Ship to me</b>
              </div>
            </div>
            <div>
              <div className="text-center">
                <img src={successIconImage} alt="icon" />
              </div>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div className="d-flex justify-content-between pt-4">
                <div>
                  <div
                    className="address_box_text pl-2"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Don&apos;t send to me</b>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <img src={circleIconImage} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pl-3 pt-5">
            <div style={{ fontSize: "18px" }}>
              <b>Delivery Instructions</b>
            </div>
          </div>
          <div
            className="delivery_options_box mt-2"
            style={{ height: "20%" }}
          ></div>
          <div className="w-100">
            <div>
              <button className="delivery_options_save_btn">Save</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DeliveryOption;
