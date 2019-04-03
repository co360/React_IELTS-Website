import React, { Component } from 'react';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleScrollToElement(event) {
      window.scrollTo(0, this.myRef.current.offsetTop);
      
  }
  formatCurrency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  render() {

    return (
     <React.Fragment>
         <section className="infos text-white text-center">
           {/* <button onClick={() => this.handleScrollToElement()}>abc</button> */}
            <h2>Vì sao nên sử dụng IELTS Online Tests?</h2>
            <div className="row">
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 one">
                <img src="images/info/1.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={400}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Thực hành trên các đề thi IELTS thật
                  </h5>
                  <p className="info-text">
                    Các đề thi Nghe và Đọc IELTS dựa trên các đề thi IELTS chính
                    thức trong cuốn Cambridge IELTS{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 tow">
                <img src="images/info/2.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={800}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Vận hành bởi cộng đồng
                  </h5>
                  <p className="info-text">
                    Được tạo nên bởi cộng đồng các giáo viên IELTS, các cựu giám
                    khảo IELTS và các cựu thí sinh{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 three">
                <img src="images/info/3.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={1000}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Công cụ phân tích toàn diện
                  </h5>
                  <p className="info-text">
                    Tính năng My Analytics là công cụ giúp các bạn đặt mục tiêu
                    điểm IELTS, phân tích quá trình học tập của bạn để bạn có
                    thể cải thiện điểm{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 three">
                <img src="images/info/4.png" alt="info" />
                <div
                  data-aos="fade-left"
                  data-aos-delay={400}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Xem điểm số và Giải thích chi tiết cho đáp án
                  </h5>
                  <p className="info-text">
                    Sau khi làm bài thi thử của chúng tôi, bạn có thể kiểm tra
                    điểm số bài Nghe và Đọc cũng như xem phần đáp án của mình{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 tow">
                <img src="images/info/5.png" alt="info" />
                <div
                  data-aos="fade-left"
                  data-aos-delay={800}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Sử dụng hoàn toàn MIỄN PHÍ
                  </h5>
                  <p className="info-text">
                    Các bài luyện tập IELTS của chúng tôi miễn phí mãi mãi.
                    Chúng tôi ở đây để giúp các bạn chuẩn bị cho việc du học,
                    nhập cư và tìm kiếm việc làm{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-4 col-sm-6 pt-5 pr-3 pb-5 bl-3 one">
                <img src="images/info/6.png" alt="info" />
                <div
                  data-aos="fade-left"
                  data-aos-delay={1000}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">
                    Tăng điểm số IELTS của bạn
                  </h5>
                  <p className="info-text">
                    Using our online tests for IELTS preparation is proven to
                    help students improve by 0.5 - 1.5 .{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="content" ref={this.myRef}>
            <div className="container">
              <div data-aos="zoom-in" className="info text-center">
                <h2>Why Choose Us ? </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error Sed ut
                  perspiciatis unde omnis iste natus error Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-8">
                  <div className="row">
                    <div
                      data-aos="fade-right"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/1.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/2.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={2200}
                  className="col-lg-4 d-none d-lg-block"
                >
                  <img
                    src="images/content/woman.png"
                    alt="woman"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4 mt-8">
                  <div className="row">
                    <div
                      data-aos="fade-left"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/3.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/4.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="counter-info text-white text-center">
            <h3>Đứng số #1 trong lĩnh vực luyện thi IELTS</h3>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/1.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">120</h2>
                    <span className="plus">+</span>
                    {/* <hr /> */}
                    <p>Quốc gia</p>
                  </div>
                </div>
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/2.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">{this.formatCurrency(2500000)}</h2>
                    {/* <hr /> */}
                    <p>Thí sinh</p>
                  </div>
                </div>
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/3.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">{this.formatCurrency(3000000)}</h2>
                    {/* <hr /> */}
                    <p>Bài thi được hoàn thành</p>
                  </div>
                </div>
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/4.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">100</h2>
                    <span className="plus">+</span>
                    {/* <hr /> */}
                    <p>Bài test Academic</p>
                  </div>
                </div>
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/5.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">20</h2>
                    <span className="plus">+</span>
                    {/* <hr /> */}
                    <p>Bài test General Training</p>
                  </div>
                </div>
                <div className="col-lg-4 class-flex">
                  <img src="images/counter/icon/6.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">{this.formatCurrency(1000)}</h2>
                    <span className="plus">+</span>
                    {/* <hr /> */}
                    <p>Tổng số câu hỏi</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="work">
            <div className="container">
              <div className="row">
                <div
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                  className="col-lg-8"
                >
                  <div className="info">
                    <h1>How we works</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem Sed ut perspiciatis unde omnis iste natus error
                      sit voluptatemSed ut perspiciatis unde omnis iste natus
                      error sit voluptatem
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <img
                          src="images/works/1.jpg"
                          alt="work"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Lorem ipsum dolor sit amet,{" "}
                          </h5>
                          <a href="#" className="card-link">
                            April 19, 2017 | Dr. Jon Doe
                          </a>
                          <p>
                            Sed ut perspiciatis unde omnis i t perspiciatis unde
                            omnis i ste natus error sit voluptatem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <img
                          src="images/works/2.jpg"
                          alt="work"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Lorem ipsum dolor sit amet,{" "}
                          </h5>
                          <a href="#" className="card-link">
                            April 19, 2017 | Dr. Jon Doe
                          </a>
                          <p>
                            Sed ut perspiciatis unde omnis i t perspiciatis unde
                            omnis i ste natus error sit voluptatem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase"
                    type="button"
                  >
                    READ MORE
                  </button>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                  className="col-lg-4"
                >
                  <div className="info">
                    <h1>Our creative</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem{" "}
                    </p>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingOne"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingTwo"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingThree"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingFor"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFor"
                            aria-expanded="false"
                            aria-controls="collapseFor"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFor"
                        className="collapse"
                        aria-labelledby="headingFor"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section id="gallery" className="gallery">
            <div className="container">
              <div
                data-aos="zoom-in-up"
                className="info text-white text-center"
              >
                <h2>Gallery</h2>
                <p>
                  {" "}
                  Sed ut perspiciatis unde omnis iste natus error s.it
                  voluptatem Sed ut perspiciatis unde omnis iste natus error
                  s.it voluptatem
                </p>
              </div>
              <div className="row">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/1.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/2.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/3.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/4.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/5.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/6.jpg" alt="gallery" />
                </div>
              </div>
            </div>
          </section> */}
          <section id="blog" className="team text-dark text-center">
            <div className="container">
              <div data-aos="zoom-in" className="info">
                <h2>Đề thi IELTS mới nhất</h2>
                {/* <p>
                  In sass tutorial we will use sass / scss in html and convert
                  scss without using any code. Check video to convert SAS with
                  prepros application. This is the easiest and best way to
                  convert sass.
                </p> */}
              </div>
              <div className="row">
                <div data-aos="zoom-in-right" className="col-lg-3 col-sm-6">
                  <img src="images/team/1.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div data-aos="zoom-in-right" className="col-lg-3 col-sm-6">
                  <img src="images/team/2.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div data-aos="zoom-in-left" className="col-lg-3 col-sm-6">
                  <img src="images/team/3.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  className="col-lg-3 col-sm-6 ml-md-auto mr-md-auto"
                >
                  <img src="images/team/4.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="offer">
              <div className="container">
                <div className="row">
                  <div data-aos="zoom-in-left" className="col-lg-10">
                    <h2>Design psd with Sass to Components By Perserver Anh</h2>
                  </div>
                  <div data-aos="zoom-in-right" className="col-lg-2">
                    <button className="btn btn-primary" type="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact-us" className="contact-us">
            <div className="container">
              <div className="row">
                <div data-aos="fade-right" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Gei in Touch</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/1.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/2.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/3.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-right" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Quick Links</h4>
                  <ul className="list-unstyled link">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-left" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Our services</h4>
                  <ul className="list-unstyled link">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-left" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Enquiry Form</h4>
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <input
                      type="button"
                      defaultValue="Submit"
                      className="btn btn-primary mt-4"
                    />
                  </form>
                </div>
              </div>
              <ul data-aos="fade-up" className="list-unstyled social-icon">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-google-plus-g" />
                </li>
                <li>
                  <i className="fab fa-weebly text-dark" />
                </li>
                <li>
                  <i className="fab fa-youtube" />
                </li>
                <li>
                  <i className="fab fa-instagram text-dark" />
                </li>
              </ul>
            </div>
          </section>
     </React.Fragment>
    );
  }
}

export default Dashboard;
