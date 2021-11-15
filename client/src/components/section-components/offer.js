import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Offer extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="offer-area pd-top-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">Special Tour</h2>
                <p>
                  Goz luôn cung cấp cho bạn những Tour du lịch với giá hấp dẫn
                  so với thị trường
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="destinations-list-slider-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
                <div className="destinations-list-slider">
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img
                          src={publicUrl + "assets/img/destination-list/1.png"}
                          alt="list"
                        />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Hội An</h4>
                        <p className="content">Welcome to Hội An</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 4 days
                          </li>
                          <li>
                            <i className="fa fa-star" /> 4.3
                          </li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Giá ( Vnd )</p>
                          <h2>
                            3.200.000 <small></small>
                          </h2>
                          <del>
                            5.000.000<span></span>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/destination-list/2.png"}
                          alt="list"
                        />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Hồ Chí Minh City</h4>
                        <p className="content">Welcome to HCM City</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 4 days
                          </li>
                          <li>
                            <i className="fa fa-star" /> 4.3
                          </li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Giá ( Vnd ) </p>
                          <h2>
                            3.000.000 <small></small>
                          </h2>
                          <del>
                            5.000.000<span></span>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img
                          src={publicUrl + "assets/img/destination-list/3.png"}
                          alt="list"
                        />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Hạ Long Bay</h4>
                        <p className="content">Welcome to HạLong Bay</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 4 days
                          </li>
                          <li>
                            <i className="fa fa-star" /> 4.3
                          </li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Giá ( Vnd )</p>
                          <h2>
                            6.200.000 <small></small>
                          </h2>
                          <del>
                            9.000.000<span></span>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img
                          src={publicUrl + "assets/img/destination-list/4.png"}
                          alt="list"
                        />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Mũi Né</h4>
                        <p className="content">Welcome to MũiNé</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 4 days
                          </li>
                          <li>
                            <i className="fa fa-star" /> 4.3
                          </li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Giá ( Vnd )</p>
                          <h2>
                            2.500.000 <small></small>
                          </h2>
                          <del>
                            4.000.000<span></span>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 align-self-center order-lg-11">
                <div className="container">
                  <div className="destinations-slider-controls">
                    <div className="slider-nav tp-control-nav" />
                    {/*slider-nav*/}
                    <div className="tp-slider-extra slider-extra">
                      <div className="text">
                        <span className="first">01 </span>
                        <span className="last" />
                      </div>
                      {/*text*/}
                      <div
                        className="d-list-progress"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="slider__label sr-only" />
                      </div>
                    </div>
                    {/*slider-extra*/}
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

export default Offer;
