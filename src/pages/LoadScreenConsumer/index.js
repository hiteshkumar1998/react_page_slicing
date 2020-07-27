import React, { Component } from "react";
import shoppingCartImage from "../../images/shopping_cart.svg";

class UserRegistration extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{backgroundColor: "#4da6f1", height: "100%", paddingBottom: "350px"}}>
          <div className="row">
            <div className="col-md-12" style={{marginTop: "250px"}}>
              <img src={shoppingCartImage} alt="shopping_cart" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pl-5 pt-4 text-white">
              <strong>Shop Here all day</strong>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserRegistration;
