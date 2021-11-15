import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class HolidayFun extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="holiday-plan-area tp-holiday-plan-area mg-top-96"
        style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/8.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="section-title text-center">
                <h2
                  className="title wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                >
                  Kế hoạch du lịch nổi bật
                </h2>
                <p
                  className="wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.2s"
                >
                  Goz cung cấp cho người dùng các Kế hoạch ( Plan ) nỗi bật mà
                  các thành viên cũng như người dùng Goz trải nghiệm và dành
                  thời gian chia sẽ.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
              >
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/4.png"}
                    alt="list"
                  />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                    VietNam
                  </p>
                  <h4 className="title">
                    <Link>Bình Thuận, Mũi Né</Link>{" "}
                  </h4>
                  <p className="content">7 Days Tour on 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      6.200.000 <small></small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              >
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/5.png"}
                    alt="list"
                  />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                    VietNam
                  </p>
                  <h4 className="title">
                    <Link to="admindetail">Đà Lạt</Link>
                  </h4>
                  <p className="content">43 days 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      1.775.000 <small></small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.9s"
                data-wow-delay="0.3s"
              >
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/6.png"}
                    alt="list"
                  />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                    VietNam
                  </p>
                  <h4 className="title">
                    <Link>Ninh Thuận, Nha Trang</Link>{" "}
                  </h4>
                  <p className="content">4 days 4 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      20.000.000 <small></small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay="0.4s"
              >
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/7.png"}
                    alt="list"
                  />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                    Spain
                  </p>
                  <h4 className="title">
                    <Link>Hà Nội City</Link>
                  </h4>
                  <p className="content">3 days 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      6.200.000 <small></small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HolidayFun;
