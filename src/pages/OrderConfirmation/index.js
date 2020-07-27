import React, { Component } from "react";
import "./style.css";
import chatIconImage from "../../images/chat_icon.svg";
import directionIconImage from "../../images/direction_icon.svg";
import callIconImage from "../../images/call_icon.svg";
import qrCodeImage from "../../images/qr_code.svg";
import coolRecordsImage from "../../images/cool_records.png";

class OrderConfirmation extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="status_text">Status</div>
            <div></div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div>
              <div className="time_text">09:30 AM</div>
              <div className="time_text">09:50 AM</div>
              <div className="time_text">10:40 AM</div>
              <div className="time_text">11:17 AM</div>
            </div>
            <div className="order_shipping_detail">
              <div className="shipping_progress_main">
                <div className="shipping_progress_inner"></div>
              </div>
              <div className="separator"></div>
              <div className="shipping_progress_main">
                <div className="shipping_progress_inner"></div>
              </div>
              <div className="separator"></div>
              <div className="shipping_progress_main">
                <div className="shipping_progress_inner"></div>
              </div>
              <div className="separator"></div>
              <div className="shipping_progress_main">
              </div>
            </div>
            <div>
              <div className="time_text text-left">Order Placed</div>
              <div className="time_text text-left">Ready</div>
              <div className="time_text text-left">
                <b>Shipped</b>
              </div>
              <div className="time_text text-left">Delivered</div>
            </div>
          </div>
          <div className="d-flex pb-2">
            <div>
              <b>Store Location</b>
            </div>
          </div>
          <div
            className="social_icon_box d-flex justify-content-center"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <div>
                <b>Machus studio</b>
              </div>
              <div style={{ fontSize: "15px", fontWeight: 500 }}>
                500 1st Ave City, USA{" "}
              </div>
              <div className="d-flex justify-content-center pt-2">
                <div className="p-3">
                  <img src={chatIconImage} alt="chat-icon" />
                  <div className="social_icon_text">Chat</div>
                </div>
                <div className="p-3">
                  <img src={directionIconImage} alt="direction-icon" />
                  <div className="social_icon_text">Directions</div>
                </div>
                <div className="p-3">
                  <img src={callIconImage} alt="call-icon" />
                  <div className="social_icon_text">Call</div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-5">
            <div>
              <b>Reference Code</b>
            </div>
          </div>
          <div
            className="social_icon_box d-flex justify-content-center pb-4"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <div className="d-flex justify-content-center">
                <div className="p-3">
                  <img src={qrCodeImage} alt="qr_code" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-5">
            <div>
              <b>Order # Kids-0007</b>
            </div>
          </div>
          <div
            className="d-flex order_box"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <img src={coolRecordsImage} alt="cool_records_image" />
            </div>
            <div className="text-left pl-2 pt-2">
              <div>Cool records</div>
              <div style={{ marginTop: "-7px" }}>ABC music</div>
            </div>
            <div className="pt-2">
              <button className="ruppees_btn">$89.00</button>
            </div>
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
          <div class="payment_total_div">
            <div className="payment_total_div_inner d-flex justify-content-between">
              <div>Total</div>
              <div>$123.90</div>
            </div>
          </div>
          <div className="d-flex justify-content-between return_policy_div p-3 mb-5">
            <div>Return Policy</div>
            <div>
              <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderConfirmation;
