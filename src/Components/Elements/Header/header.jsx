import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid container-full-padding">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="header-top-offer">
                <p>Exclusive Black Friday ! Offer</p>
                <span className="coming-time" data-countdown="2022/6/20" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-top-right">
                <div className="header-social">
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-action">
                  <ul>
                    <li>
                      <div className="header-top-mail">
                        <p>
                          <span>|</span>
                          <i className="far fa-envelope" />
                          <Link to="/contact">info@gecoinfo.com</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="header-user-login">
                        <a href="/#">
                          <i className="fas fa-user" />
                          Login
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="main-header menu-area">
        <div className="container-fluid container-full-padding">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars" />
              </div>
              <div className="main-menu">
                <nav>
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>

                  <div className="navbar-wrap push-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className=" menu-item-has-children">
                        <Link to="/">Home</Link>
                        <ul className="submenu ">
                          <li>
                            <Link to="/">Home One</Link>
                          </li>
                          <li>
                            <Link to="/index-2">Home Two</Link>
                          </li>
                          <li>
                            <Link to="/index-3">Home Three</Link>
                          </li>
                          <li>
                            <Link to="/index-4">Home Four</Link>
                          </li>
                          <li>
                            <Link to="/index-5">Home Five</Link>
                          </li>
                          <li>
                            <Link to="/index-6">Home Six</Link>
                          </li>
                          <li>
                            <Link to="/index-7">Home Seven</Link>
                          </li>
                        </ul>
                      </li>
                      <li className=" menu-item-has-children">
                        <Link to="/about-us">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/about-us">About Story</Link>
                          </li>
                          <li>
                            <Link to="/upcoming-games">Upcoming Games</Link>
                          </li>
                          <li>
                            <Link to="/game-single">Game Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/overview">Overview</Link>
                      </li>
                      <li>
                        <Link to="/community">Community</Link>
                      </li>
                      <li>
                        <Link to="/shop">Store</Link>
                      </li>
                      <li className=" menu-item-has-children">
                        <Link to="/blogs">Blogs</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blogs">News Page</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">News Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="header-action">
                    <ul>
                      <li className="header-shop-cart">
                        <a href="/#">
                          <i className="fas fa-shopping-basket" />
                          <span>0</span>
                        </a>
                        <ul className="minicart">
                          <li className="d-flex align-items-start">
                            <div className="cart-img">
                              <a href="/#">
                                <img
                                  src="assets/img/product/cart_p01.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h4>
                                <a href="/#">Xbox One Controller</a>
                              </h4>
                              <div className="cart-price">
                                <span className="new">$229.9</span>
                                <span>
                                  <del>$229.9</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="/#">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="total-price">
                              <span className="f-left">Total:</span>
                              <span className="f-right">$239.9</span>
                            </div>
                          </li>
                          <li>
                            <div className="checkout-link">
                              <Link to="/#">Shopping Cart</Link>
                              <a className="red-color" href="/#">
                                Checkout
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="header-search">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target="#search-modal"
                        >
                          <i className="fas fa-search" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="" title="true" />
                    </Link>
                  </div>
                  <div className="menu-outer"></div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="/#">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
            {/* Modal Search */}
            <div
              className="modal fade"
              id="search-modal"
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
