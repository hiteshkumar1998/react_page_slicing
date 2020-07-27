import React, { Component } from "react";
import "./style.css";
import notificationImage from "../../images/notification_image.png";

class Notification extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4 pl-1">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="header_text pt-4">Notifications</div>
          </div>
          <div className="d-flex notification_box mt-5 w-100">
            <div>
              <img src={notificationImage} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                <div>Kevin Dillon</div>
                <div>
                  <small>2pm Oct 10</small>
                </div>
              </div>
              <div style={{ fontSize: "12px" }}>
                Hi, Do you have the shoes in blue?
              </div>
              <div className="pt-2">
                <button className="notification_reply_btn">reply</button>
              </div>
            </div>
          </div>
          <div className="d-flex notification_box mt-3 w-100">
            <div>
              <img src={notificationImage} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                <div>Kevin Dillon</div>
                <div>
                  <small>2pm Oct 10</small>
                </div>
              </div>
              <div style={{ fontSize: "12px" }}>
                Hi, Do you have the shoes in blue?
              </div>
              <div className="pt-2">
                <button className="notification_replied_btn">reply</button>
              </div>
            </div>
          </div>
          <div className="d-flex notification_box mt-3 mb-5 w-100">
            <div>
              <img src={notificationImage} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                <div>Kevin Dillon</div>
                <div>
                  <small>2pm Oct 10</small>
                </div>
              </div>
              <div style={{ fontSize: "12px" }}>
                Hi, Do you have the shoes in blue?
              </div>
              <div className="pt-2">
                <button className="notification_replied_btn">reply</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Notification;
