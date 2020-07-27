import React, { Component } from "react";
import "./style.css";
import appleImage from "../../images/apple.svg";
import facebookImage from "../../images/facebook.svg";
import googleImage from "../../images/google.svg";

class EmailUserRegistration extends Component {
  render() {
    return (
      <div className="container text-center" style={{ height: "100%" }}>
        <div className="text-left">
          <i className="fa fa-times-circle fa-2x mt-3 ml-2"></i>
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "45px" }}>
          <div className="mt-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-100"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-100"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-100"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-100"
            />
          </div>
          <div className="position-relative mt-3">
            <div>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="w-100"
              />
            </div>
            <div className="position-absolute" style={{ top: 0, right: 0 }}>
              <i className="fa fa-eye"></i>
            </div>
          </div>
          <div className="position-relative mt-3">
            <div>
              <input
                type="text"
                name="re-type-password"
                placeholder="Re-type Password"
                className="w-100"
              />
            </div>
            <div className="position-absolute" style={{ top: 0, right: 0 }}>
              <i className="fa fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="row ml-4 mr-4 signup">
          <div className="col-md-12 text-dark">sign-up</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={appleImage} alt="apple" className="mt-4" />
            <img src={facebookImage} alt="facebook" className="mt-3" />
            <img src={googleImage} alt="google" className="mt-3" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 registered_text pt-4">Back to login</div>
        </div>
        <div className="row">
          <div className="col-md-12 text-muted pt-4">
            Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    );
  }
}

export default EmailUserRegistration;
