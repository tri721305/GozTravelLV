import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import DatePicker from "react-datepicker";
const Search = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  //   let imagealt = "image";

  return (
    <div
      className="search-area  viaje-go-top"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="tp-main-search">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="tp-search-single-wrap">
                <input
                  className="w-100"
                  type="text"
                  placeholder="Where From?"
                />
                <i className="fa fa-dot-circle-o" />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 order-12">
              <Link className="btn btn-yellow" to="/tour-list">
                <i className="ti-search" /> Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
