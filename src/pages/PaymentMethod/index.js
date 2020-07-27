import React, { Component } from "react";
import "./style.css";

class PaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="status_text">Payment Method</div>
          </div>
          <div className="d-flex mt-3 payment_method_div">
            <div className="pb-2">
              <div>
                <b>Enter your credit card information</b>
              </div>
            </div>
            <div className="payment_form w-100">
              <input type="text" name="name" placeholder="Name on card" />
              <input
                type="number"
                name="card_number"
                placeholder="Card number"
                className="card_number"
              />
              <input
                type="number"
                name="cvc_number"
                placeholder="CVC"
                className="cvc_number"
              />
              <label className="d-flex pt-2">
                <b>Expiration Date</b>
              </label>
              <div className="d-flex">
                <select className="form-control" id="sel1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <select
                  className="form-control"
                  id="sel1"
                  style={{ marginLeft: "10px" }}
                >
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </select>
              </div>
              <label className="d-flex pt-4 pb-4">
                <b>Billing Address</b>
              </label>
              <input type="text" name="address" placeholder="Street address" />
              <input type="text" name="suite" placeholder="Apt, Suite, Unit" />
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="wa" placeholder="WA" />
              <input type="text" name="zip" placeholder="ZIP" />
            </div>
          </div>
          <div className="d-flex justify-content-center checkbox mt-2">
            <input type="checkbox" value="" />
            <label> Set as default payment method</label>
          </div>
          <div>
            <div>
              <button className="add_card_btn">add your card</button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2 mb-2">
            <div>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="pl-2">
              <b>Add a credit or debit card</b>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentMethod;
