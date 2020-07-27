import React, { Component } from "react";
import "./style.css";
import coolRecordsIMG from "../../images/cool_records1.png";
import coolRecordsIMG2 from "../../images/cool_records2.png";
import coolRecordsIMG3 from "../../images/cool_records.png";

class MyOrders extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
            <div className="header_text pt-2">My Orders</div>
          </div>
          <div className="d-flex my_orders_box mt-5 w-100">
            <div>
              <img src={coolRecordsIMG} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div style={{ fontWeight: 500 }}>
                <div>Really Cool records</div>
              </div>
              <div>
                <button className="new_order_btn">New Order</button>
              </div>
            </div>
            <div className="datetime_text pt-3">
              <div>2pm</div>
              <div>Oct 10</div>
            </div>
          </div>
          <div className="d-flex my_orders_box mt-3 w-100">
            <div>
              <img src={coolRecordsIMG3} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div style={{ fontWeight: 500 }}>
                <div>Really Cool records</div>
              </div>
              <div>
                <button className="completed_order_btn">Completed</button>
              </div>
            </div>
            <div className="datetime_text pt-3">
              <div>2pm</div>
              <div>Oct 10</div>
            </div>
          </div>
          <div className="d-flex my_orders_box mt-3 w-100">
            <div>
              <img src={coolRecordsIMG2} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div style={{ fontWeight: 500 }}>
                <div>Really Cool records</div>
              </div>
              <div>
                <button className="new_order_btn">New Order</button>
              </div>
            </div>
            <div className="datetime_text pt-3">
              <div>2pm</div>
              <div>Oct 10</div>
            </div>
          </div>
          <div className="d-flex my_orders_box mt-3 w-100">
            <div>
              <img src={coolRecordsIMG3} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div style={{ fontWeight: 500 }}>
                <div>Really Cool records</div>
              </div>
              <div>
                <button className="new_order_btn">New Order</button>
              </div>
            </div>
            <div className="datetime_text pt-3">
              <div>2pm</div>
              <div>Oct 10</div>
            </div>
          </div>
          <div className="d-flex my_orders_box mt-3 w-100">
            <div>
              <img src={coolRecordsIMG3} alt="cool_records_image" />
            </div>
            <div className="text-left pt-2 pl-3 w-100">
              <div style={{ fontWeight: 500 }}>
                <div>Really Cool records</div>
              </div>
              <div>
                <button className="new_order_btn">New Order</button>
              </div>
            </div>
            <div className="datetime_text pt-3">
              <div>2pm</div>
              <div>Oct 10</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyOrders;
