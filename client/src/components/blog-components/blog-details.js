import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./comments";
import Sidebar from "./sidebar";
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="blog-details-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog mb-0">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/blog-details/1.png"}
                    alt="blog"
                  />
                </div>
                <div className="single-blog-details">
                  <p className="date mb-0">Nov 2020</p>
                  <h3 className="title">Why You Shouldn’t Live In SaiGon</h3>
                  <p className="content mb-0">
                    Ở Sài Gòn, thời tiết hầu như nóng quanh năm dù không nắng
                    nóng gay gắt như miền Bắc hay oi bức như miền Trung, nhiệt
                    độ trung bình là 27°C và thời gian nắng đỉnh điểm nhiệt độ
                    còn có thể lên tới hơn 40°C. Có hai mùa rõ rệt nơi đây chính
                    là mùa mưa và mùa khô. Mùa mưa bắt đầu từ tháng 5 đến tháng
                    11, bạn lưu ý nếu đến đây vào thời gian này thì đừng bao giờ
                    quên mang theo bên mình những chiếc ô bởi những cơn mưa thời
                    gian này luôn ghé thăm bất chợt không báo trước. Mùa khô thì
                    thường kéo dài từ tháng 12 đến tháng 4.
                  </p>
                </div>
              </div>
              {/* details-blockquote-start */}
              <blockquote className="blockquote tp-blockquote bg-dark-blue">
                <p className="mb-0">
                  Người Sài Gòn tánh kỳ lắm, lo chuyện bao đồng không à! Cứ đi
                  khoảng mấy mét là thấy bình nước miễn phí. Đôi khi còn có cái
                  bảng chỉ đường thân thương làm sao!”. Nam Phương cho biết, nhờ
                  tham gia dự án môn Ngữ văn mà em được ra ngoài nhiều hơn, trải
                  nghiệm và biết thêm rất nhiều thứ và hay nhất là được cảm nhận
                  cuộc sống theo cách rất thật, rất riêng.
                </p>
              </blockquote>
              {/* details-blockquote-end */}
              <p>
                Thỉnh thoảng đang chạy xe trên đường tôi lại bắt gặp một vài
                quán cơm tuy nhỏ nhưng tấp nập người ra vào. Bên ngoài có hàng
                chữ “Quán cơm 2.000” hay “Quán cơm từ thiện, miễn phí”. Hoặc có
                lúc tôi lại thấy một cái thùng đựng đầy những ổ bánh mì thơm
                phức như mới nướng xong, trong đó có hàng chữ: “Nếu bạn đang đói
                thì cứ lấy mà ăn, không cần trả tiền, hoàn toàn miễn phí”.
                Thoáng qua thôi mà tôi cũng cảm nhận được sự ấm áp của lòng
                người. Người Sài Gòn không hề phô trương mà họ chỉ coi đó là một
                điều hiển nhiên, một thói quen hằng ngày…
              </p>
              <h4 className="single-page-small-title mt-5">
                Welcome to HCM city.
              </h4>
              {/* details-gallery-start */}
              <div className="gallery-area">
                <div className="containerss">
                  <div className="gallery-filter-area row custom-gutter">
                    <div className="gallery-sizer col-1" />
                    {/* gallery-item */}
                    <div className="tp-gallery-item col-md-4 col-sm-6 mb-10">
                      <div className="tp-gallery-item-img">
                        <img
                          src={publicUrl + "assets/img/blog-details/2.png"}
                          alt="image"
                        />
                      </div>
                    </div>
                    {/* gallery-item */}
                    <div className="tp-gallery-item col-md-4 col-sm-6">
                      <div className="tp-gallery-item-img">
                        <img
                          src={publicUrl + "assets/img/blog-details/3.png"}
                          alt="image"
                        />
                      </div>
                    </div>
                    {/* gallery-item */}
                    <div className="tp-gallery-item col-md-4 col-sm-6">
                      <div className="tp-gallery-item-img">
                        <img
                          src={publicUrl + "assets/img/blog-details/4.png"}
                          alt="image"
                        />
                      </div>
                    </div>
                    {/* gallery-item */}
                    <div className="tp-gallery-item col-md-4 col-sm-6">
                      <div className="tp-gallery-item-img">
                        <img
                          src={publicUrl + "assets/img/blog-details/5.png"}
                          alt="image"
                        />
                      </div>
                    </div>
                    {/* gallery-item */}
                    <div className="tp-gallery-item col-md-4 col-sm-6">
                      <div className="tp-gallery-item-img">
                        <img
                          src={publicUrl + "assets/img/blog-details/6.png"}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* details-gallery-end */}
              <p>
                Đất Sài Gòn hiền hòa và bình yên, không hạn hán, không bão lũ
                nên những người gốc Gài Gòn dễ bằng lòng với cuộc sống hiện tại
                và phải nhờ đến những người ngoại tỉnh đến để tạo nên sự phát
                triển rực rỡ của thành phố như ngày hôm nay.
              </p>
              {/* details-video-start */}
              <h4 className="single-page-small-title mt-5"></h4>
              <div className="video-popup-wrap style-two">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/blog-details/7.png"}
                    alt="video"
                  />
                </div>
                <div className="video-popup-btn">
                  <a
                    href="https://www.youtube.com/watch?v=2iw_K-1AmVk"
                    className="video-play-btn mfp-iframe"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
              {/* details-video-end */}
              {/* <p>Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
              <p>
                Bên cạnh một Sài Gòn của những người lao động tự do là một Sài
                Gòn khác của những người thành đạt, sang trọng. Nguyễn Thanh
                Vân, một cử nhân Ngân hàng tốt nghiệp loại ưu từ Hà Nội, qua
                nhiều vòng thi tuyển hiện đang làm việc cho một ngân hàng thương
                mại nước ngoài. Cùng với thu nhập chính độ 2 ngàn đô mỗi tháng,
                cô còn tham gia sàn chứng khoán và có thêm một số khoản thu nhập
                ngoài lương. Là một cô gái trẻ, chưa lập gia đình nhưng cô đã
                kịp mua cho mình một căn hộ hạng sang trong khu đô thị của tập
                đoàn Đất Xanh. Mỗi năm cô giành thời gian nghỉ phép đi chơi một
                số nước để mở mang tầm nhìn. Gặp tôi, cô tiết lộ: cháu đã thay
                hai cuốn hộ chiếu rồi chú à. Mỗi lần xuất cảnh, đóng dấu thị
                thực vào một trang, vậy mà cuộc phiêu lưu của cô đã hết hai
                cuốn!
              </p>
              <div className="row tag-share-area">
                <div className="col-lg-6">
                  <span className="mr-2">Share:</span>
                  <ul className="social-icon style-two">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1">
                  <div className="single-blog-post-tags d-flex">
                    <span className="all-tags-title">Related Tags :</span>
                    <div className="all-tags">
                      <Link to="blog-v2">VietNam</Link>
                      <Link to="blog-v2">SaiGon</Link>
                      <Link to="blog-v2">HoChiMinhCity</Link>
                      <Link to="blog-v2">Travel</Link>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navigation post-navigation single-post-navigation">
                <div className="nav-links tp-control-nav">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-6 ">
                      <div className="nav-previous w-100">
                        <a href="#">
                          <span className="slick-arrow float-left">
                            <i className="la la-long-arrow-left" />
                          </span>
                          <span className="nav-post-text pl-2 float-left">
                            Prev
                          </span>
                          <h4 className="float-left">Hội An nơi cổ nhất ? </h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-6  offset-xl-2">
                      <div className="nav-next w-100">
                        <a href="#">
                          <span className="pr-2 nav-post-text">Next</span>
                          <span className="slick-arrow float-right">
                            <i className="la la-long-arrow-right" />
                          </span>
                          <h4 className="float-right">
                            Đà Nẵng một sức hút lạ
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {/* author-area-start */}
              <div className="author-area media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/blog-details/8.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <h4>Trí Đặng</h4>
                  <p>Đôi lời mình viết về con người Sài Gòn</p>
                  <ul className="social-icon style-three">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* author-area-end */}
              {/* comments-area-start */}
              <div className="comments-area">
                <h4 className="comments-title">Comments</h4>
                <ul className="comment-list">
                  <li>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/blog-details/9.png"}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Tri</h4>
                        <span className="date">17 SEP 2020</span>
                        <p>Good, hay lắm </p>
                        <a href="#" className="reply btn btn-yellow">
                          <span>
                            <i className="fa fa-reply" />
                            Reply
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <ul className="children">
                      <li>
                        <div className="single-comment-wrap">
                          <div className="thumb">
                            <img
                              src={publicUrl + "assets/img/blog-details/10.png"}
                              alt="img"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">MT</h4>
                            <span className="date">17 SEP 2020</span>
                            <p>Cảm ơn bạn</p>
                            <a href="#" className="reply btn btn-yellow">
                              <span>
                                <i className="fa fa-reply" />
                                Reply
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/blog-details/11.png"}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Minh Tris</h4>
                        <span className="date">17 SEP 2020</span>
                        <p>Hihi mai iu</p>
                        <a href="#" className="reply btn btn-yellow">
                          <span>
                            <i className="fa fa-reply" />
                            Reply
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* comments-area-end */}
              {/* blog-comment-area start */}
              <div className="blog-comment-area">
                <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                  <h4 className="single-page-small-title">Write A Coment.</h4>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Name</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Email</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap">
                        <span className="single-input-title">comments</span>
                        <textarea defaultValue={""} />
                      </label>
                    </div>
                    <div className="col-12">
                      <a className="btn btn-yellow" href="#">
                        Send Comment
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              {/* blog-comment-area start */}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogDetails;
