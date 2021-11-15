import React, { Component } from "react";
import parse from "html-react-parser";

class IntroV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="intro-area pd-top-108">
        <div className="container">
          <div className="section-title text-lg-center text-left">
            <h2 className="title">
              <span>We Are</span> Travel Point
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-intro style-two">
                <h4 className="intro-title">Private Transport</h4>
                <p>Tương lai sẽ có hệ thống xe vận chuyển riêng</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-intro style-two">
                <h4 className="intro-title">Diverse Destinations</h4>
                <p>
                  Hệ thống gồm nhiều bài viết và kế hoạch thích hợp với nhiều
                  nguời dùng
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-intro style-two">
                <h4 className="intro-title">Great Plan</h4>
                <p>Nguời dùng lên kế hoạch chi tiết cho chuyến đi. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-intro style-two">
                <h4 className="intro-title">Fast Booking</h4>
                <p>
                  Liên kết với nhiều nhà xe, hàng máy bay, khách sạn luôn đáp
                  ứng nhu cầu cho nguời dùng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroV3;
