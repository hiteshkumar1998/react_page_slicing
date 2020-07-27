import React, { Component } from "react";
import "./style.css";
import headerLogoImage from "../../images/header_logo.png";
import ordersImage from "../../images/orders.svg";
import userImage from "../../images/user.svg";
import notificationImage from "../../images/notification.svg";
import homeImage from "../../images/home.svg";

class AccountProfile extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <img src={headerLogoImage} alt="apple" className="mt-4" />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{ fontSize: "18px", fontWeight: 500, paddingTop: "15px" }}
            >
              First Last Name
            </div>
          </div>
          <div className="main-div mt-4">
            <div style={{ float: "left" }}>Account Information</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>Whishlist</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>Following</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>Delivery Address</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>Payment Method</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>App Setting</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="main-div mt-2">
            <div style={{ float: "left" }}>Log Out</div>
            <div style={{ float: "right" }}>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="navbar_account_profile">
            <div>
              <img src={homeImage} alt="home" />
              <div style={{ fontSize: "9px" }}>HOME</div>
            </div>
            <div>
              <img src={notificationImage} alt="notification" />
              <div style={{ fontSize: "9px" }}>NOTIFICATION</div>
            </div>
            <div>
              <img src={ordersImage} alt="order" />
              <div style={{ fontSize: "9px" }}>ORDERS</div>
            </div>
            <div>
              <img src={userImage} alt="user" />
              <div style={{ fontSize: "9px" }}>PROFILE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountProfile;
