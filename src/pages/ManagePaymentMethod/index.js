import React, { Component } from "react";
import "./style.css";
import successIconImage from "../../images/success_icon.svg";
import circleIconImage from "../../images/circle.svg";

class ManagePaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="header_text">Manage Payment Methods</div>
          </div>
          <div className="manage_payment_box_card d-flex justify-content-between text-left mt-5 w-100">
            <div>
              <div className="address_box_text pl-2">Visa ****1235</div>
              <div className="address_box_text pl-2">First Last</div>
              <div className="address_box_text pl-2">Expires 07/23</div>
            </div>
            <div className="pt-2">
              <div className="text-center">
                <img src={successIconImage} alt="icon" />
              </div>
              <div>Default</div>
            </div>
          </div>
          <div
            className="d-flex mb-3 w-100"
            style={{
              backgroundColor: "#f7f7f7",
              paddingLeft: "24px",
              paddingBottom: "20px",
            }}
          >
            <div style={{ paddingRight: "10px" }}>
              <button className="address_btn">Edit</button>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <button className="address_btn">Remove</button>
            </div>
          </div>
          <div className="manage_payment_box_card d-flex justify-content-between text-left mt-4 w-100">
            <div>
              <div className="address_box_text pl-2">Visa ****1235</div>
              <div className="address_box_text pl-2">First Last</div>
              <div className="address_box_text pl-2">Expires 07/23</div>
            </div>
            <div className="pt-2">
              <div className="text-center">
                <img src={circleIconImage} alt="icon" />
              </div>
              <div>Default</div>
            </div>
          </div>
          <div
            className="d-flex pb-3 w-100"
            style={{
              backgroundColor: "#f7f7f7",
              paddingLeft: "24px",
              marginBottom: "250px",
            }}
          >
            <div style={{ paddingRight: "10px" }}>
              <button className="address_btn">Edit</button>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <button className="address_btn">Remove</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ManagePaymentMethod;
