import React, { Component } from "react";
import "./style.css";
import watchImage from "../../images/watch.png";
import helmetImage from "../../images/helmet.png";
import cycleImage from "../../images/cycle.png";

class AccountInformation extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="header_text">Wishlist</div>
          </div>
          <div className="d-flex w-100 pt-5">
            <div style={{ width: "200px", marginRight: "20px" }}>
              <img src={watchImage} alt="watch" className="w-100" />
            </div>
            <div
              className="text-left pt-2 w-100"
              style={{ fontSize: "13px", fontWeight: 500, width: "32%" }}
            >
              <div>This is a really cool watch</div>
              <div>
                <b>$89.00</b>
              </div>
            </div>
            <div className="pt-3 w-100" style={{ marginLeft: "20px" }}>
              <button className="btn add_to_cart_btn">
                Add&nbsp;to&nbsp;cart
              </button>
            </div>
          </div>
          <div className="d-flex w-100 pt-5">
            <div style={{ width: "200px", marginRight: "20px" }}>
              <img src={helmetImage} alt="helmet" className="w-100" />
            </div>
            <div
              className="text-left pt-2 w-100"
              style={{ fontSize: "13px", fontWeight: 500, width: "32%" }}
            >
              <div>This is a really cool watch</div>
              <div>
                <b>$89.00</b>
              </div>
            </div>
            <div className="pt-3 w-100" style={{ marginLeft: "20px" }}>
              <button className="btn add_to_cart_btn">
                Add&nbsp;to&nbsp;cart
              </button>
            </div>
          </div>
          <div className="d-flex w-100 pt-5" style={{ marginBottom: "250px" }}>
            <div style={{ width: "200px", marginRight: "20px" }}>
              <img src={cycleImage} alt="cycle" className="w-100" />
            </div>
            <div
              className="text-left pt-2 w-100"
              style={{ fontSize: "13px", fontWeight: 500, width: "32%" }}
            >
              <div>This is a really cool watch</div>
              <div>
                <b>$89.00</b>
              </div>
            </div>
            <div className="pt-3 w-100" style={{ marginLeft: "20px" }}>
              <button className="btn add_to_cart_btn">
                Add&nbsp;to&nbsp;cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AccountInformation;
