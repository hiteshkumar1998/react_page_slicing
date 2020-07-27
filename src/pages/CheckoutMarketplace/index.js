import React, { Component } from "react";
import "./style.css";
import coolRecordsImage from "../../images/cool_records.png";
import successIconImage from "../../images/success_icon.svg";
import circleIconImage from "../../images/circle.svg";

class CheckoutMarketplace extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="status_text">Checkout</div>
            <div></div>
          </div>
          <div className="d-flex justify-content-between mt-3 payment_box">
            <div className="order_total_payment_text text-left">
              <div>Items</div>
              <div>Tax</div>
              <div>Delievery</div>
            </div>
            <div className="order_total_payment_text">
              <div>$89.00</div>
              <div>$8.90</div>
              <div>$3.90</div>
            </div>
          </div>
          <div className="payment_total_div">
            <div className="payment_total_div_inner d-flex justify-content-between">
              <div>Total</div>
              <div>$123.90</div>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-5">
            <div className="label_text">
              <b>Machus studio</b>
            </div>
          </div>
          <div
            className="d-flex payment_total_marketplace_main"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <img src={coolRecordsImage} alt="cool_records_image" />
            </div>
            <div className="text-left pl-2 pt-2 w-100">
              <div>Cool records</div>
              <div style={{ marginTop: "-7px" }}>ABC music</div>
            </div>
            <div className="pt-2">
              <button className="ruppees_btn_delievery_method">$89.00</button>
            </div>
          </div>
          <div className="payment_total_marketplace_div d-flex justify-content-end">
            <div className="pr-2">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <div>1</div>
            <div className="pl-2">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-3">
            <div className="label_text">
              <b>Delievery Method</b>
            </div>
          </div>
          <div
            className="d-flex delievery_method_main"
            style={{ backgroundColor: "#f7f7f7", flexWrap: "wrap" }}
          >
            <div className="d-flex pb-2 w-100">
              <div>
                <img src={circleIconImage} alt="icon" />
              </div>
              <div className="pl-3 w-100 text-left">In the Mail</div>
              <div className="d-flex justify-content-end w-100">
                <div className="d-flex">
                  <button className="ruppees_btn_delievery_method">Free</button>
                </div>
              </div>
            </div>
            <div className="d-flex pt-2 w-100" style={{ flexBasis: "100%" }}>
              <div>
                <img src={successIconImage} alt="icon" />
              </div>
              <div className="pl-3 w-100 text-left">In the US mail</div>
              <div className="d-flex justify-content-end w-100">
                <div className="d-flex pt-2 pr-3">$6.00</div>
              </div>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-3">
            <div className="label_text">
              <b>Delievery address</b>
            </div>
          </div>
          <div
            className="d-flex justify-content-between delievery_address_main"
            style={{ backgroundColor: "#f7f7f7", flexWrap: "wrap" }}
          >
            <div>1776 94th Ave NE</div>
            <div>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-end w-100">
              <div className="d-flex">
                <div className="pr-3">Edit instructions</div>
                <div>
                  <i className="fa fa-arrow-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-3">
            <div className="label_text">
              <b>Payment information</b>
            </div>
          </div>
          <div
            className="d-flex justify-content-between payment_information_main"
            style={{ backgroundColor: "#f7f7f7", flexWrap: "wrap" }}
          >
            <div style={{ fontWeight: 500 }}>Payment method</div>
            <div>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="d-flex" style={{ flexBasis: "100%" }}>
              <div>Add-Card</div>
            </div>
            <hr></hr>
          </div>
          <div>
            <div>
              <button className="purchase_btn">purchase</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CheckoutMarketplace;
