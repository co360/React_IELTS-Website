import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div className="bg-white header-top d-none d-lg-block pt-4 ">
          <div className="container">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="row"
            >
              <div className="col-3">
                <img
                  src="/images/header/logo/1j_ojl1FOMkX9WypfBe43D6ki_CJrRBJmBfIwXs1M3EMoAJtlS (1).jpg"
                  alt="logo"
                />
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="far fa-clock" />
                  </a>
                  <h6>WORK TIME: 09:00 - 17:00</h6>
                  <p className="mt-2">Saturday and Sunday - CLOSED</p>
                </div>
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="far fa-envelope" />
                  </a>
                  <h6>MAIL US</h6>
                  <p className="mt-2">tuan.anh.257.it@gmail.com</p>
                </div>
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="fas fa-mobile-alt" />
                  </a>
                  <h6>CALL US</h6>
                  <p className="mt-2">+8434677668</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-2 pb-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-4">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Trang chủ <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item ml-2">
                      <Link className="nav-link" to="/ielts-exam-library">
                        Thư viện thi IELTS <i class="fas fa-angle-down ml-1"></i>
                      </Link>
                      <div className="sub-menu">
                        <div className="container">
                          <ul>
                            <li>
                              {" "}
                              <a
                                href="/ielts-exam-library#academic"
                                data-drupal-link-system-path="ielts-exam-library"
                              >
                                Academic Tests 
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/ielts-exam-library#general-training"
                                data-drupal-link-system-path="ielts-exam-library"
                              >
                                General Training Tests{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item ml-2">
                      <a className="nav-link" href="#Services">
                        Lời khuyên IELTS <i class="fas fa-angle-down ml-1"></i>
                      </a>
                      <div className="sub-menu">
                        <div className="container">
                          <ul>
                            <li>
                              {" "}
                              <a
                                href="/listening-tips"
                                data-drupal-link-system-path="taxonomy/term/22"
                              >
                                Listening Tips
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/reading-tips"
                                data-drupal-link-system-path="taxonomy/term/23"
                              >
                                Reading Tips
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/speaking-tips"
                                data-drupal-link-system-path="taxonomy/term/26"
                              >
                                Speaking Tips
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/writing-tips"
                                data-drupal-link-system-path="taxonomy/term/24"
                              >
                                Writing Tips
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/recent-actual-tests"
                                data-drupal-link-system-path="taxonomy/term/32"
                              >
                                Recent Actual Tests
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="/announcements"
                                data-drupal-link-system-path="taxonomy/term/35"
                              >
                                Announcements
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-8 text-right">
                <ul className="list-unstyled social-icon">
                  <li>
                    <a href="#">Đăng ký</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalLogin"
                    >
                      Đăng nhập
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <header>
          <div className="container">
            <div data-aos="fade-up" data-aos-delay={1000} className="row">
              <div className="col-lg-7  text-center">
                <h1>Luyện IELTS online MIỄN PHÍ năm 2019</h1>
                <p>
                  Trang web cộng đồng với các đề thi IELTS thật và các bí quyết
                  luyện thi IELTS được cung cấp bởi các giáo viên dạy IELTS và
                  các sinh viên{" "}
                </p>
                <button className="btn btn-primary mr-4" type="button">
                  Academic
                </button>
                <button className="btn btn-primary" type="button">
                  General Training
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* modal */}
        <div
          className="modal fade bd-example-modal-lg"
          id="exampleModalLogin"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title ml-4" id="exampleModalLabel">
                  Đăng nhập vào tài khoản của bạn
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="wrap">
                  {/* strat-contact-form */}
                  <div className="contact-form">
                    {/* start-form */}
                    <form
                      className="contact_form"
                      action="#"
                      method="post"
                      name="contact_form"
                    >
                      <h1>Tên đăng nhập hoặc Email</h1>
                      <ul>
                        <li>
                          <input
                            type="email"
                            className="textbox1"
                            name="email"
                            placeholder="info@w3layouts.com"
                            required
                          />
                          <span className="form_hint">Enter a valid email</span>
                          <p>
                            <img src="images/login/contact.png" alt />
                          </p>
                        </li>
                        <li>
                          <input
                            type="password"
                            name="website"
                            className="textbox2"
                            placeholder="password"
                          />
                          <p>
                            <img src="images/login/lock.png" alt />
                          </p>
                        </li>
                      </ul>
                      <input
                        type="submit"
                        name="Đăng nhập"
                        valur="Đăng nhập"
                        defaultValue="Sign In"
                      />
                      <div className="clear" />
                      <label className="checkbox">
                        <input type="checkbox" name="checkbox" defaultChecked />
                        <i />
                        Ghi nhớ
                      </label>
                      <div className="forgot">
                        <a href="#">Quên mật khẩu</a>
                      </div>
                      <div className="clear" />
                    </form>
                    {/* end-form */}
                    {/* start-account */}
                    <div className="account">
                      <div className="span">
                        <a href="#">
                          <img src="images/login/facebook.png" alt />
                          <i>Sign In with Facebook</i>
                          <div className="clear" />
                        </a>
                      </div>
                      <div className="span2">
                        <a href="#">
                          <img src="images/login/gplus.png" alt />
                          <i>Sign In with Google+</i>
                          <div className="clear" />
                        </a>
                      </div>
                    </div>
                    {/* end-account */}
                    <div className="clear" />
                  </div>
                  {/* end-contact-form */}
                </div>
              </div>
              <div className="modal-footer text-center">
                <a href="#" data-dismiss="modal" className=" text-center">
                  Don' have an account? Sign Up!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
