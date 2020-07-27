import React, { Component } from "react";
import "./style.css";
import arrowRightImage from "../../images/arrow-right.svg";
import heartIconImage from "../../images/heart_image.svg";
import cartIconImage from "../../images/cart.svg";
import phoneCarriageImage from "../../images/phone_carriage.png";
import smallPhoneCarriageImage from "../../images/small_phone_carriage.png";
import phoneCoverImage from "../../images/phone_cover.png";
import bikeStudioImage from "../../images/bike_studio.png";

class MarketplaceDetailPage extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex justify-content-between">
            <div className="mt-4">
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="mt-4">
              <img src={arrowRightImage} alt="arrrow_image" className="pr-3" />
              <img src={heartIconImage} alt="heart_image" className="pr-3" />
              <img src={cartIconImage} alt="cart_image" className="pr-3" />
            </div>
          </div>
          <div className="banner_image">
            <img
              src={phoneCarriageImage}
              alt="phone-carriage"
              className="mt-3"
            />
          </div>
          <div className="d-flex mt-3">
            <div>
              <img src={smallPhoneCarriageImage} alt="phone-carriage" />
            </div>
            <div>
              <img src={phoneCoverImage} alt="phone-cover" />
            </div>
          </div>
          <div className="text-left pt-3">
            <div style={{ fontSize: "20px" }}>
              <b>Bike phone carriage</b>
            </div>
            <div>
              <b>$45.00</b>
            </div>
            <div style={{ fontWeight: 500 }}>
              Super Cool records Super Cool records Super Cool records Super
              Cool records
            </div>
          </div>
          <div className="d-flex mt-4">
            <div>
              <img src={bikeStudioImage} alt="bike-studio" />
            </div>
            <div className="pl-2">
              <div style={{ fontWeight: 600 }}>Bike studio</div>
              <div className="bike_studio_text text-left pl-2">City, USA</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-3 w-100">
            <div className="w-100" style={{ paddingRight: "10px" }}>
              <button className="footer_left_btn">add to cart</button>
            </div>
            <div className="w-100" style={{ paddingLeft: "10px" }}>
              <button className="footer_right_btn">buy now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MarketplaceDetailPage;
