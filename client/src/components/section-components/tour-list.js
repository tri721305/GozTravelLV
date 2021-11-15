import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const TourList = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="single-destinations-list style-four"
              style={{ borderRadius: "30px" }}
            >
              <div
                className="blur-thumb"
                style={{
                  backgroundImage:
                    "url(" + publicUrl + "assets/img/destination-list/16.png)",
                }}
              />
              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  Dubai
                </p>
                <h4 className="title">
                  <Link to="/tour-details">Dubai City</Link>
                </h4>
                {/* <p className="content">Helo</p> */}
                <div className="list-price-meta">
                  <ul className="tp-list-meta d-inline-block">
                    <li>
                      <i className="fa fa-calendar-o" /> 8oct
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 4 days
                    </li>
                  </ul>
                  <div className="tp-price-meta d-inline-block">
                    {/* <p>Price</p> */}
                    {/* <h2>
                      620 <span>$</span>
                    </h2> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
