import React, { Component } from "react";
import "./style.css";
import appleImage from "../../images/apple.svg";
import facebookImage from "../../images/facebook.svg";
import googleImage from "../../images/google.svg";

class UserRegistration extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="container text-center" style={{ height: "auto" }}>
          <div className="row ml-4 mr-4 signup_email">
            <div className="col-md-12 text-dark" style={{ fontSize: "23px" }}>
              sign-up via email
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 separator_user_registration pt-3"
              style={{ fontSize: "16px" }}
            >
              or&nbsp;connect&nbsp;with
            </div>
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
