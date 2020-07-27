import React, { Component } from "react";
import "./style.css";
import arrowLeftImage from "../../images/left_arrow_icon.svg";
import successIconImage from "../../images/success_icon.svg";
import circleIconImage from "../../images/circle.svg";

class AddressPage extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex pl-2 pr-2 mt-4">
            <div className="float-left">
              <img src={arrowLeftImage} alt="arrrow_image" />
            </div>
            <div className="delivery_address_text">Your Delivery Address</div>
          </div>
          <div className="text-left">
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search for address"
                style={{
                  border: "0px",
                  backgroundColor: "#f7f7f7",
                  height: "42px",
                  paddingLeft: "32px",
                  borderRadius: "25px",
                  width: "305px",
                }}
              />
              <i
                className="fa fa-search"
                style={{ marginLeft: "-42px" }}
                aria-hidden="true"
              ></i>
            </form>
          </div>
          <div
            className="address_box d-flex justify-content-between text-left mt-5"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <div className="address_box_text pl-2">1855 94th Ave</div>
              <div className="address_box_text pl-2">City, USA 98104</div>
              <div className="pt-2 pl-2">
                <b>Add delivery instructions</b>
              </div>
            </div>
            <div>
              <div className="text-center">
                <img src={successIconImage} alt="icon" />
              </div>
              <div>Default</div>
            </div>
          </div>
          <div
            className="d-flex mb-3"
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
          <div
            className="address_box d-flex justify-content-between text-left mt-5"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <div className="address_box_text pl-2">1855 94th Ave</div>
              <div className="address_box_text pl-2">City, USA 98104</div>
              <div className="pt-2 pl-2">
                <b>Add delivery instructions</b>
              </div>
            </div>
            <div>
              <div className="text-center">
                <img src={circleIconImage} alt="icon" />
              </div>
              <div>Default</div>
            </div>
          </div>
          <div
            className="d-flex mb-3"
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
          <div>
            <div>
              <button className="save_btn">save</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddressPage;
