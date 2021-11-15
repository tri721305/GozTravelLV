import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class DestinationList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="destination-area viaje-go-top">
        <div className="container-bg mg-top--70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/8.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Sài Gòn</h3>
                    <p className="content">
                      SG is the world's second largest and second most- populous
                      continent, being behind Asia in both. At about 30.3
                      million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/9.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Hội An</h3>
                    <p className="content">
                      Hội An is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/10.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Bình Thuận</h3>
                    <p className="content">
                      Bình Thuận is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/11.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Đà Lạt</h3>
                    <p className="content">
                      Đà Lạt is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/12.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Huế</h3>
                    <p className="content">
                      Huế is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/13.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Nha Trang</h3>
                    <p className="content">
                      Nha Trang is the world's second largest and second most-
                      populous continent, being behind Asia in both categories.
                      At about 30.3 million km² including adjacent islands, it
                      6% Earth's total surface area and 20% land area.
                    </p>
                    <a className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/14.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title"> Đảo Phú Quốc</h3>
                    <p className="content">
                      Phú Quốc is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/15.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Sapa</h3>
                    <p className="content">
                      Sapa is the world's second largest and second most-
                      populous continent, being behind Asia in categories. At
                      about 30.3 million km² adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-destination-grid text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/16.png"}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <h3 className="title">Hồ Chí Minh city</h3>
                    <p className="content">
                      HCM city is the world's second largest and second most-
                      populous continent, being behind Asia in both. At about
                      30.3 million km² including adjacent islands, it 6% Earth's
                      total surface area and 20% land area.
                    </p>
                    <Link className="btn btn-gray" to="/destination-details">
                      <span>
                        Explore
                        <i className="la la-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="btn-wrapper text-center">
                  <Link
                    className="btn btn-yellow mt-4"
                    to="/destination-list-v2"
                  >
                    <span>
                      Load More
                      <i className="la la-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationList;
