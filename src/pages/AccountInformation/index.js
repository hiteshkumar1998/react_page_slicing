import React, { Component } from "react";
import "./style.css";
import ordersImage from "../../images/orders.svg";
import userImage from "../../images/user.svg";
import notificationImage from "../../images/notification.svg";
import homeImage from "../../images/home.svg";

class AccountInformation extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="header_text">Account Information</div>
          </div>
          <div className="account_information_form w-100">
            <label className="d-flex">
              <b>First Name</b>
            </label>
            <input type="text" name="first_name" placeholder="Name" />
            <label className="d-flex">
              <b>Last Name</b>
            </label>
            <input type="text" name="last_name" placeholder="Last" />
            <label className="d-flex pt-2">
              <b>Phone Number</b>
            </label>
            <input
              type="number"
              name="phone_number"
              placeholder="(***)-***-4563"
              className="phone_number"
            />
            <label className="d-flex">
              <b>Email</b>
            </label>
            <input type="text" name="email" placeholder="me@live.com" />
          </div>
          <div className="button_div w-100">
            <div>
              <button className="account_info_save_btn">save</button>
            </div>
          </div>
          <div className="navbar">
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
      </>
    );
  }
}

export default AccountInformation;
