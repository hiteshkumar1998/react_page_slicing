import React, { Component } from "react";
import "../UserRegistration.css";
import appleImage from "./images/apple.svg";
import facebookImage from "./images/facebook.svg";
import googleImage from "./images/google.svg";

class UserRegistration extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row ml-4 mr-4 signup_email">
            <div className="col-md-12 text-dark">sign-up via email</div>
          </div>
          <div className="row">
            <div className="col-md-12 separator pt-3">or connect with</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={appleImage} alt="apple" className="mt-5" />
              <img src={facebookImage} alt="facebook" className="mt-3" />
              <img src={googleImage} alt="google" className="mt-3" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 registered_text pt-5">
              Already registered? Sign In
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-muted pt-4">
              Terms of Service and Privacy Policy
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pt-4 pl-4 skip_text">skip</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
