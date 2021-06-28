/* eslint-disable prettier/prettier */
import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="st-site-footer st-sticky-footer">
        <div className="st-top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="st-footer-widget st-text-widget">
                  <img src="assets/img/logo.png" alt="Abid" />
                  <p>
                    Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                    eiusmod tempor inci-didunt. It is a long established fact
                    that a reader will be distracted.
                  </p>
                  <ul className="st-footer-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
              <div className="col-lg-3">
                <div className="st-footer-widget">
                  <h4 className="st-footer-widget-title">Contact Us</h4>
                  <ul className="st-footer-list">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>
                        1223 Fulton Street San Diego <br />
                        CA 94123-1020 USA
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <p>abid@gmail.com</p>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <p>
                        (+01) - 234 567 890 <br />
                        (+01) - 345 678 901
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="st-height-b25 st-height-lg-b25"></div>
              </div>
              <div className="col-lg-3">
                <div className="st-footer-widget">
                  <h4 className="st-footer-widget-title">Quick Links</h4>
                  <ul className="st-footer-list">
                    <li>
                      <a href="shop.html">Product</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="#">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
                <div className="st-height-b25 st-height-lg-b25"></div>
              </div>
              <div className="col-lg-3">
                <div className="st-footer-widget st-newsletter-widget">
                  <h4 className="st-footer-widget-title">News Letter</h4>
                  <p>
                    Get Business news, tip and solutions to your problems from
                    our experts.
                  </p>
                  <form className="mailchimp st-newsletter-form" action="#">
                    <input
                      type="email"
                      name="subscribe"
                      id="subscriber-email"
                      placeholder="Enter Your Email Address"
                    />
                    <button
                      type="submit"
                      id="subscribe-button"
                      className="st-mailchimp-btn"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                    <h5 className="subscription-success"> .</h5>
                    <h5 className="subscription-error"> .</h5>
                    <label
                      className="subscription-label"
                      htmlFor="subscriber-email"
                    ></label>
                  </form>
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="st-copyright text-center">
          <p>&copy; 2020 Abid. Designed by Themewatch</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
