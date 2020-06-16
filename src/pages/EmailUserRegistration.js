import React, { Component } from "react";
import "../EmailUserRegistration.css";
import appleImage from "./images/apple.svg";
import facebookImage from "./images/facebook.svg";
import googleImage from "./images/google.svg";

class EmailUserRegistration extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <i class="fa fa-times-circle fa-2x float-left mt-3 ml-2"></i>
          <form>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input type="text" name="firstname" value="First Name" />
              </div>
              <div class="col-md-5"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input type="text" name="lastname" value="Last Name" />
              </div>
              <div class="col-md-5"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input type="text" name="email" value="Email" />
              </div>
              <div class="col-md-5"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input type="text" name="phone" value="Phone" />
              </div>
              <div class="col-md-5"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input type="text" name="password" value="Password" />
              </div>
              <div class="col-md-5">
                <i class="fa fa-eye"></i>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1"></div>
              <div class="col-md-6">
                <input
                  type="text"
                  name="re-type-password"
                  value="Re-type Password"
                />
              </div>
              <div class="col-md-5">
                <i class="fa fa-eye"></i>
              </div>
            </div>
          </form>
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
      </div>
    );
  }
}

export default EmailUserRegistration;
