import React, { Component } from "react";
import "../LoadScreenConsumer.css";
import shoppingCartImage from "./images/shopping_cart.svg";

class UserRegistration extends Component {
  render() {
    return (
      <div>
        <div className="container bg-primary text-center">
          <div className="row">
            <div className="col-md-12 shopping_cart_div">
              <img src={shoppingCartImage} alt="shopping_cart" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pl-5 pt-4 text-white">
              <strong>Shop Here all day</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
