import React, { Component } from "react";
import "./style.css";

class EditPaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="header_text">Edit Payment Method</div>
          </div>
          <div className="d-flex mt-3 payment_method_div">
            <div className="pb-2">
              <div>
                <b>Enter your credit card information</b>
              </div>
            </div>
            <div className="payment_form w-100">
              <input type="text" name="name" placeholder="First Last Name" />
              <label className="d-flex">
                <b>Visa***1567</b>
              </label>
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
              <input type="text" name="address" placeholder="9100 Lake Wa" />
              <input type="text" name="suite" placeholder="Apt, Suite, Unit" />
              <input type="text" name="city" placeholder="Belleue" />
              <input type="text" name="wa" placeholder="WA" />
              <input type="text" name="zip" placeholder="98004" />
            </div>
          </div>
          <div>
            <div>
              <button className="edit_payment_method_save_btn">save</button>
            </div>
            <div>
              <button className="edit_payment_method_cancel_btn">cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditPaymentMethod;
