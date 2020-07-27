import React, { Component } from "react";
import "./style.css";
import successIconImage from "../../images/success_icon.svg";
import circleIconImage from "../../images/circle.svg";

class SelectCard extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="status_text">Select a Card</div>
          </div>
          <div className="address_box_card d-flex justify-content-between text-left">
            <div>
              <div className="address_box_text pl-2">Visa ****1235</div>
              <div className="address_box_text pl-2">First Last</div>
              <div className="address_box_text pl-2">Expires 07/23</div>
            </div>
            <div className="pt-2">
              <div className="text-center">
                <img src={successIconImage} alt="icon" />
              </div>
            </div>
          </div>
          <div className="address_box_card d-flex justify-content-between text-left mt-3">
            <div>
              <div className="address_box_text pl-2">Visa ****1235</div>
              <div className="address_box_text pl-2">First Last</div>
              <div className="address_box_text pl-2">Expires 07/23</div>
            </div>
            <div className="pt-2">
              <div className="text-center">
                <img src={circleIconImage} alt="icon" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5" style={{paddingTop: "80px"}}>
            <div>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="pl-2">
              Add a credit or debit card
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

export default SelectCard;
