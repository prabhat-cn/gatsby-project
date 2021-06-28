/* eslint-disable prettier/prettier */
import React from "react"

const Header = () => {
  return (
    <>
      <header className="st-site-header st-style1 st-sticky-header">
        <div className="st-offter-bar">
          Grab <span>50%</span> off for today, this will finished 12.00am
          <div className="st-offer-close">
            <svg
              className="headerstrip__dismiss-icon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.8 2.4c.3.3.3.8 0 1.1l-6 6c-.3.3-.3.8 0 1.1l6 6c.3.3.3.8 0 1.1l-2.2 2.2c-.3.3-.8.3-1.1 0l-6-6c-.3-.3-.8-.3-1.1 0l-6 6c-.3.3-.8.3-1.1 0L.1 17.7c-.3-.3-.3-.8 0-1.1l6-6c.3-.3.3-.8 0-1.1l-6-6c-.3-.3-.3-.8 0-1.1L2.3.2c.3-.3.8-.3 1.1 0l6 6c.3.3.8.3 1.1 0l6-6c.3-.3.8-.3 1.1 0l2.2 2.2z"></path>
            </svg>
          </div>
        </div>
        <div className="st-main-header">
          <div className="container">
            <div className="st-main-header-in">
              <div className="st-main-header-left">
                <a
                  className="st-site-branding st-white-logo"
                  href="index-2.html"
                >
                  <img src="/assets/img/logo.png" alt="Abid" />
                </a>
              </div>
              <div className="st-main-header-right">
                <nav className="st-nav">
                  <ul className="st-nav-list">
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul>
                        <li className="menu-item-has-children">
                          <a href="#">Service</a>
                          <ul>
                            <li>
                              <a href="services.html">Service page</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Service details{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Portfolio</a>
                          <ul>
                            <li>
                              <a href="portfolio-3col.html">Portfolio page 1</a>
                            </li>
                            <li>
                              <a href="portfolio-2col.html">Portfolio page 2</a>
                            </li>
                            <li>
                              <a href="portfolio-messonary.html">
                                Mesonary portfolio
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio details
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="shop.html">Shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop page</a>
                        </li>
                        <li>
                          <a href="shop-list-view.html">List view shop page</a>
                        </li>
                        <li>
                          <a href="shop-no-sidebar.html">
                            No sidebar shop page
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html">Product details</a>
                        </li>
                        <li>
                          <a href="my-account.html">My account</a>
                        </li>
                        <li>
                          <a href="shopping-cart.html">Shoping cart</a>
                        </li>
                        <li>
                          <a href="login-register.html">Login/Signup</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog-page.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-page-right-sidebar.html">
                            Blog page with right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-page-left-sidebar.html">
                            Blog page with left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-page-grid-view.html">
                            Grid view blog page
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-left-sidebar.html">
                            Blog details with left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-right-sidebar.html">
                            Blog details with right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-no-sidebar.html">
                            Blog details no sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <ul className="st-toolbox">
                  <li>
                    <span className="st-toolbox-btn st-search-open">
                      <i className="fas fa-search"></i>
                    </span>
                  </li>
                  <li>
                    <a href="shopping-cart.html" className="st-toolbox-btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span className="badge badge-primary">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="login-register.html" className="st-toolbox-btn">
                      <i className="fas fa-user"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form action="#" className="st-head-search">
            <div className="container">
              <input
                type="text"
                className="st-head-search-input"
                placeholder="Search your infinite universe..."
                autoFocus
              />
              <div className="st-head-search-close">
                <i className="far fa-times-circle"></i>
              </div>
            </div>
          </form>
        </div>
      </header>
    </>
  )
}

export default Header
