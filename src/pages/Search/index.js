import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  render() {
    return (
      <>
        <div className="container text-center" style={{ height: "100%" }}>
          <div className="d-flex mt-4">
            <div>
              <i className="fa fa-times-circle fa-2x"></i>
            </div>
          </div>
          <div style={{ paddingLeft: "36px" }}>
            <div className="d-flex">
              <div style={{ position: "relative", width: "100%" }}>
                <div style={{ width: "94%" }}>
                  <input
                    type="text"
                    name="search"
                    placeholder="search"
                    style={{
                      border: "0px",
                      backgroundColor: "#f7f7f7",
                      height: "42px",
                      paddingLeft: "35px",
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  />
                </div>
                <i
                  className="fa fa-search"
                  style={{ position: "absolute", right: "35px", top: "13px" }}
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div className="pl-3" style={{ maxWidth: "238px" }}>
              <div className="d-flex mt-4">
                <div>
                  <button className="btn btn-dark search_btn">New</button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-2">
                    Gadgets
                  </button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-2">
                    Stuff
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <button className="btn btn-default default_btn">
                    Gadgets
                  </button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-2">
                    Gadgets
                  </button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-2">
                    Gadgets
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <button className="btn btn-default default_btn">Stuff</button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-3">
                    Clothes
                  </button>
                </div>
                <div>
                  <button className="btn btn-default default_btn ml-2">
                    Clothes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
