import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="contact-area pd-top-108">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="section-title text-lg-center text-left">
                        <h2 className="title">Get In Touch!</h2>
                        <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/others/11.png"} alt="img" />
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                      <form className="tp-form-wrap">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Name</span>
                              <input type="text" name="name" />
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Number</span>
                              <input type="text" name="number"/>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Email</span>
                              <input type="text" name="email"/>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Message</span>
                              <textarea defaultValue={""} name="message" />
                            </label>
                          </div>
                          <div className="col-12">
                            <input type="submit" className="btn btn-yellow" value="Send Message" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info-area pd-top-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 order-lg-12">
                      <iframe className="contact-map" src="https://maps.google.com/maps?q=%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20b%C3%A1ch%20khoa&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                      <div className="contact-info bg-gray">
                        <p>
                          <i className="fa fa-map-marker" /> 
                          <span>Đại học Bách Khoa , thành phố HCM</span>
                        </p>
                        <p>
                          <i className="fa fa-clock-o" /> 
                          <span>Office Hour 9:00 to 7:00 Sunday 10:00 to 5:00</span>
                        </p>
                        <p>
                          <i className="fa fa-envelope" /> 
                          <span>Email: <span>dhmt721305@gmail.com</span></span>
                        </p>
                        <p>
                          <i className="fa fa-phone" /> 
                          <span>
                            sell phone: <span>(+84) 0172 570051</span> <br />
                            telephone: <span>(+84) 07 528 7584</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default Contact