import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class History extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="destination-grid-area pd-top-105 viaje-go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">Our History</h2>
                <p>
                  Vì đam mê du lịch nên đã ấp ủ dự án này lâu rồi và năm 2020
                  mình có cơ hội để bắt đầu triển khai{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid style-two">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/17.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <ul className="d-list-meta">
                    <li className="date">2020</li>
                  </ul>
                  <h3 className="title">
                    <Link to="/destination-details">Founded 2020</Link>
                  </h3>
                  <p className="content"> FOUNDER: Dang Hoang Minh Tri </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid style-two">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/18.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <ul className="d-list-meta">
                    <li className="date">2020</li>
                  </ul>
                  <h3 className="title">
                    <Link to="/destination-details">
                      The best travel in 2020
                    </Link>
                  </h3>
                  <p className="content">Bach Khoa TPHCM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid style-two">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/19.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <ul className="d-list-meta">
                    <li className="date">2021</li>
                  </ul>
                  <h3 className="title">
                    <Link to="/destination-details">The Best Travel 2020</Link>
                  </h3>
                  <p className="content">Bach Khoa TPHCM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
