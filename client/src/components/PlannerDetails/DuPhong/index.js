import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class TourDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="tour-details-area mg-top--70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tour-details-wrap">
                {/* Tao Plan Moi Ngay Di */}

                <div className="package-included-location">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">2</div>
                          <p>Day 1</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/8.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          <h4 className="title">Welcome to DaLat</h4>
                          <p className="content">
                            Bước xuống xe là cảm giác không lẫn vào đâu được,
                            không khí se se lạnh....
                          </p>
                          <a className="btn-read-more" href="#">
                            <span>
                              Add more activities
                              <i className="la la-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">2</div>
                          <p>Day 1</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/8.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          <h4 className="title">Welcome to DaLat</h4>
                          <p className="content">
                            Bước xuống xe là cảm giác không lẫn vào đâu được,
                            không khí se se lạnh....
                          </p>
                          <a className="btn-read-more" href="#">
                            <span>
                              Add more activities
                              <i className="la la-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">1</div>
                          <p>Day 2</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/1.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          <h4 className="title">Cafe, ăn hết Đà Lạt</h4>
                          <p className="content">
                            Ngày thứ hai, nhóm tụi mình đã ghé thăm cafe nhà gỗ,
                            ......
                          </p>
                          <a className="btn-read-more" href="#">
                            <span>
                              Add more activities
                              <i className="la la-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ****** */}
                    {/* ******** */}

                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog single-blog-after-none">
                        <div className="p-list">
                          <div className="list">3</div>
                          <p>Day 3</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/9.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          <h4 className="title">Quẫy ngày cuối và lên xe về</h4>
                          <p className="content">
                            Ngày cuối cùng nhóm tụi mình đã quyết định đi ngắm
                            bình minh, săn mây ở ....
                          </p>
                          <a className="btn-read-more" href="#">
                            <span>
                              Add more activities
                              <i className="la la-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <>HIHIHI</> */}
                <div className="host-area">
                  <div className="single-host-wrap text-center">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/client/02.png"}
                        alt="img"
                      />
                    </div>
                    <h4>Minh Trí</h4>
                    <p>Du lịch vừa là công việc vừa là lối sống của mình</p>
                    <p> </p>
                    <a className="btn btn-yellow" href="#">
                      Contact Host
                    </a>
                  </div>
                </div>
                <div className="service-location-map">
                  <h4 className="single-page-small-title">Service Location</h4>
                  <div className="service-location-map">
                    <iframe src="https://maps.google.com/maps?q=%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20b%C3%A1ch%20khoa&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                    {/* <iframe src="https://www.google.com/maps/place/%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa/@10.772603,106.6555093,17z/data=!3m1!4b1!4m5!3m4!1s0x31752ec17709146b:0x54a1658a0639d341!8m2!3d10.772603!4d106.657698" /> */}
                  </div>
                </div>
                <div className="comments-area tour-details-review-area">
                  <h4 className="comments-title">Reviews</h4>
                  <ul className="comment-list mb-0">
                    <li>
                      <div className="single-comment-wrap">
                        <div className="thumb">
                          <img src="assets/img/client/2.png" alt="img" />
                        </div>
                        <div className="content">
                          <h4 className="title">Tri</h4>
                          <span className="date">13 Nov 2020</span>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                          </div>
                          <p>Mọi người cùng ý kiến với mình ko thế ?</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comment-wrap">
                        <div className="thumb">
                          <img src="assets/img/client/3.png" alt="img" />
                        </div>
                        <div className="content">
                          <h4 className="title">Huyen</h4>
                          <span className="date">17 Nov 2020</span>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                          </div>
                          <p>Love u</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="btn-wrapper text-right mt-3">
                    <a className="btn-read-more" href="#">
                      <span>
                        More Review
                        <i className="la la-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="location-review-area">
                  <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                    <div className="row">
                      <div className="col-lg-6">
                        <h4 className="single-page-small-title">
                          Write A Review
                        </h4>
                      </div>
                      <div className="col-lg-6">
                        <div className="tp-review-meta text-lg-right">
                          <span className="mr-3 ml-0">Assigned Rating</span>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label className="single-input-wrap">
                          <span className="single-input-title">Name</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="single-input-wrap">
                          <span className="single-input-title">Email</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-lg-12">
                        <label className="single-input-wrap">
                          <span className="single-input-title">Comments</span>
                          <textarea defaultValue={""} />
                        </label>
                      </div>
                      <div className="col-12">
                        <a className="btn btn-yellow" href="#">
                          Send
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="sidebar-area sidebar-area-4">
                <div className="widget tour-list-widget">
                  <div className="widget-tour-list-meta">
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-calendar-minus-o" /> Date
                    </div>
                    <div className="single-widget-search-input">
                      <input
                        type="text"
                        className="returning-date custom-select"
                        placeholder="Returning"
                      />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-keyboard-o" /> Message
                    </div>
                    <div className="single-widget-search-input">
                      <textarea placeholder="Type" defaultValue={""} />
                    </div>
                    <div className="text-lg-center text-left">
                      <a className="btn btn-yellow" href="#">
                        Add day activities <i className="fa fa-paper-plane" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TourDetails;
