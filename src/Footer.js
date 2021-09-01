import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './style.css'

class Footer extends React.Component {
  render() {
    return (

      <>



        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                    <p>contact us:</p>
                    <p>info@jobly.com</p>
                    <p>recruiter@jobly.com</p>
                    <p>advertisement@jobly.com</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                    <h3 className="f-title f_600 t_color f_size_18">Site Map</h3>
                    <ul className="list-unstyled f_list">
                      <li><Link classNames="linkContaner" to="/">Home</Link></li>
                      <li><Link  classNames="linkContaner" to="/profile">Profile</Link></li>
                      <li><Link  classNames="linkContaner" to="/bookmarks">Bookmarks</Link></li>
                      <li><Link  classNames="linkContaner" to="/applications">Applications</Link></li>
                      <li><Link  classNames="linkContaner" to="/AboutUs">About Us</Link></li>

                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                    <ul className="list-unstyled f_list">
                      <li><a>FAQ</a></li>
                      <li><a>Term &amp; conditions</a></li>
                      <li><a>Reporting</a></li>
                      <li><a>Documentation</a></li>
                      <li><a>Support Policy</a></li>
                      <li><a>Privacy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                    <h3 className="f-title f_600 t_color f_size_18">Find us on</h3>
                    <div className="f_social_icon">
                      <a className="fab fa-facebook"> <FontAwesomeIcon icon={faFacebook} /> </a>
                      <a className="fab fa-twitter"> <FontAwesomeIcon icon={faTwitter} /></a>
                      <a className="fab fa-linkedin" > <FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one"></div>
              <div className="footer_bg_two"></div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400 ">© Jobly Inc.. 2021 All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                  {/* <p>Made with <i className="icon_heart"></i> in <a href="#">CakeCounter</a></p> */}
                </div>
              </div>
            </div>
          </div>
        </footer>


      </>
    );
  }
}

export default Footer;