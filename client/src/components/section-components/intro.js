import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link className="intro-cat" to="/about">Du Lịch</Link>
				          </h4>
				          <p>Du lịch là một trong những điều bạn không thể thiếu khi muốn cuộc sống của mình luôn mới mẻ và sống động</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link className="intro-cat" to="/about">Trải nghiệm</Link>
				          </h4>
				          <p>Trải nghiệm về những chuyến đi không ai có thể làm giúp bạn ngoài bản thân mình.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link className="intro-cat" to="/about">Thư giãn</Link>
				          </h4>
				          <p>Du lịch luôn giúp bản thân mình "re-fresh" cho mỗi chuyến đi.</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Intro