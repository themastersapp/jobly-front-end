import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

class Footer extends React.Component {
  render() {
    return (

      <>



        <footer class="new_footer_area bg_color">
          <div class="new_footer_top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                    <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                    <ul class="list-unstyled f_list">
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Android App</a></li>
                      <li><a href="#">ios App</a></li>
                      <li><a href="#">Desktop</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">My tasks</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                    <ul class="list-unstyled f_list">
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Term &amp; conditions</a></li>
                      <li><a href="#">Reporting</a></li>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Support Policy</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                    <div class="f_social_icon">
                      <a href="#" class="fab fa-facebook"></a>
                      <a href="#" class="fab fa-twitter"></a>
                      <a href="#" class="fab fa-linkedin"></a>
                      <a href="#" class="fab fa-pinterest"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer_bg">
              <div class="footer_bg_one"></div>
              <div class="footer_bg_two"></div>
            </div>
          </div>
          <div class="footer_bottom">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-sm-7">
                  {/* <p class="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p> */}
                </div>
                <div class="col-lg-6 col-sm-5 text-right">
                  {/* <p>Made with <i class="icon_heart"></i> in <a href="#">CakeCounter</a></p> */}
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
