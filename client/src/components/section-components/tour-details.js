import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class X extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="tour-details-area mg-top--70">
        <div className="tour-details-gallery">
          <div className="container-bg bg-dark-blue">
            <div className="container">
              <div className="gallery-filter-area row">
                <div className="gallery-sizer col-1" />
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                  <div className="tp-gallery-item-img">
                    <div className="thumbnails">
                      <img
                        src={publicUrl + "assets/img/tour-details/1.png"}
                        alt="image"
                      />
                      <div className="video-popup-btn">
                        <a
                          href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                          className="video-play-btn mfp-iframe"
                          tabIndex={0}
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-3 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img
                        src={publicUrl + "assets/img/tour-details/2.png"}
                        alt="image"
                        style={{ height: "245px" }}
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img
                        src={publicUrl + "assets/img/tour-details/3.png"}
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img
                        src={publicUrl + "assets/img/tour-details/4.png"}
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img
                        src={publicUrl + "assets/img/tour-details/5.png"}
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img
                        src={publicUrl + "assets/img/tour-details/6.png"}
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="details">
                    <p className="location mb-0">
                      <i className="fa fa-map-marker" />
                      VietNam
                    </p>
                    <h4 className="title">Đà Lạt</h4>
                    <p className="content">3 days 2 person</p>
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <div className="all-tags">
                      <a href="#">Adventures</a>
                      <a href="#">Local special ties</a>
                      <a href="#">Natural</a>
                      <a href="#">Travel</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                  <div className="book-list-warp">
                    <p className="book-list-content">
                      Soạn đồ và đi thoi các bạn.
                    </p>
                    <div className="tp-price-meta">
                      <p>Price</p>
                      <h2>
                        1.775.000 vnd <small></small>
                      </h2>
                    </div>
                  </div>
                  <ul className="tp-list-meta border-tp-solid">
                    <li className="ml-0">
                      <i className="fa fa-calendar-o" /> 8 Oct
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 4 Days
                    </li>
                    <li>
                      <i className="fa fa-users" />2 Person
                    </li>
                    <li>
                      <i className="fa fa-snowflake-o" /> Relaxing
                    </li>
                    <li>
                      <i className="fa fa-star" /> 4.3
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-wrap">
                <h4 className="single-page-small-title">Plan</h4>
                <p>
                  Hoa dã quỳ cuối mùa Cứ nghĩ đến Đà Lạt vào tháng 12, thì chẳng
                  được ngắm hoa dã quỳ. Nhưng ngày đầu tiên đến Đà Lạt, đi con
                  xe cúp vòng vòng cánh đồng rau ở đường lên đồi Thiên Phúc Đức
                  lại gặp bụi hoa dã quỳ này. 📍Các bạn đến Đà Lạt vào dịp cuối
                  năm như mình, muốn chụp ảnh hoa dã quỳ có thể đến các tuyến
                  đường đi đồi Thiên Phúc Đức, đồi Đa Phú hoặc đường đi Cầu Đất
                  nhé.
                </p>
                {/* <p> This trip is offered by Goz. Once you've reserved your spot, our team will be in touch to help you prepare for the trip. Please note that flights to and from St. John's are not included in the trip cost. This trip is limited by 12 travelers.</p> */}
                {/* <div className="package-included-area">
                  <h4 className="single-page-small-title">Included</h4>
                  <div className="row">
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/15.png"}
                          alt="icons"
                        />
                        <h6>Food</h6>
                        <p>3 breakfasts, 3 dinners</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/16.png"}
                          alt="icons"
                        />
                        <h6>Accommodations</h6>
                        <p>3 nights in a hotel</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/17.png"}
                          alt="icons"
                        />
                        <h6>Transportation</h6>
                        <p>2 boat rides, 1 car ride</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/18.png"}
                          alt="icons"
                        />
                        <h6>Drinks</h6>
                        <p>Water, tea, coffee, beer</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/19.png"}
                          alt="icons"
                        />
                        <h6>Tickets</h6>
                        <p>Entrance fee</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-package-included">
                        <img
                          src={publicUrl + "assets/img/icons/20.png"}
                          alt="icons"
                        />
                        <h6>Equipment</h6>
                        <p>Outdoor gear, safety</p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Tao Plan Moi Ngay Di */}

                <div className="package-included-location">
                  <h4 className="single-page-small-title">Plan</h4>
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">1</div>
                          <p>Day 1</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/8.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          {/* <h4 className="title">Welcome to DaLat</h4> */}
                          <p className="content">7:00 Bánh Mì Chảo Minh </p>
                          <p className="content">8:00 Cối Xay Gió </p>
                          <p className="content">11:00 Phở Bò Tuyền</p>
                          <p className="content">12:00 Nghỉ Trưa </p>
                          <p className="content">
                            15:00 Quán Cuả Thời Thanh Xuân{" "}
                          </p>
                          <p className="content">18:00 Lẩu Bò 3 Toa </p>
                          <p className="content">19:00 Hoa Coffe</p>
                          {/* <p className="content">18:00 Lẩu Gà Lá É</p> */}
                          {/* <p className="content">
                            19:00 Chợ Đà Lạt & Quảng Trường
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">2</div>
                          <p>Day 2</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/1.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          {/* <h4 className="title">Welcome to DaLat</h4> */}
                          <p className="content">5:00 Welcome To DaLat</p>
                          <p className="content">6:00 Check In</p>
                          <p className="content">7:00 Bánh Căn Bà 5</p>
                          <p className="content">8:00 Đồi Thông Coffee </p>
                          <p className="content">11:00 Nem Bà Hùng </p>
                          <p className="content">12:00 Nghỉ Trưa</p>
                          <p className="content">14:00 Rừng Lá Thông</p>
                          <p className="content">18:00 Lẩu Gà Lá É</p>
                          <p className="content">
                            19:00 Chợ Đà Lạt & Quảng Trường
                          </p>
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
                          {/* <p className="content">6:00 Check In</p> */}
                          <p className="content">7:00 Bánh Uot Long Ga</p>
                          <p className="content">8:00 Đồi Lavender </p>
                          <p className="content">11:00 Nem Bà Hùng </p>
                          <p className="content">12:00 Nghỉ Trưa</p>
                          <p className="content">14:00 Hồ Tuyền Lâm</p>
                          <p className="content">18:00 Lẩu Gà Lá É</p>
                          <p className="content">
                            19:00 Chợ Đà Lạt & Quảng Trường
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="package-included-location">
                  {/* <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">1</div>
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
                  </div> */}
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
            <div className="col-lg-4">
              <div className="sidebar-area sidebar-area-4">
                <div className="widget tour-list-widget">
                  <div className="widget-tour-list-meta">
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-user" /> Place
                    </div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-envelope" /> Activity
                    </div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-phone" /> Phone
                    </div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-calendar-minus-o" /> Time
                    </div>
                    <div className="single-widget-search-input">
                      <input
                        type="text"
                        className="departing-date custom-select"
                        placeholder="Departing"
                      />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-calendar-minus-o" /> Time
                    </div>
                    <div className="single-widget-search-input">
                      <input
                        type="text"
                        className="returning-date custom-select"
                        placeholder="Returning"
                      />
                    </div>
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-keyboard-o" /> Notes
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
                <div className="widget_ads">
                  <a href="#">
                    <img
                      className="w-100"
                      src={publicUrl + "assets/img/others/01.png"}
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default X;
