import React, { Component } from "react";
import "./style.css";
import coolRecordsImage from "../../images/cool_records.png";
import watchImage from "../../images/watch.png";

class ShoppingCartCheckout extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="header_text">Shopping Cart</div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-5">
            <div>
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
          <div
            className="d-flex justify-content-between mt-3 mb-3"
            style={{
              backgroundColor: "#f7f7f7",
              padding: "5px 22px 5px 17px",
            }}
          >
            <div>
              <b>Cart Total</b>
            </div>
            <div>
              <b>$89.00</b>
            </div>
          </div>
          <div className="w-100">
            <div>
              <button className="shopping_cart_checkout_btn">
                Store Checkout
              </button>
            </div>
          </div>
          <div className="d-flex pb-2 pl-2 mt-5">
            <div>
              <b>Bike Store</b>
            </div>
          </div>
          <div
            className="d-flex payment_total_marketplace_main"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div>
              <img src={watchImage} alt="cool_records_image" />
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
          <div
            className="d-flex payment_total_marketplace_main mt-3"
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
          <div
            className="d-flex justify-content-between mt-3 mb-3"
            style={{
              backgroundColor: "#f7f7f7",
              padding: "5px 22px 5px 17px",
            }}
          >
            <div>
              <b>Cart Total</b>
            </div>
            <div>
              <b>$123.90</b>
            </div>
          </div>
          <div className="w-100 mb-4">
            <div>
              <button className="shopping_cart_checkout_btn">
                Store Checkout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingCartCheckout;
