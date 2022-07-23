import React, { Component } from "react";
import "./e-commerce.css";

class Ecommerce extends React.Component {
  constructor() {
    super();
    this.state = {
      togglebtn: "ctm-navbar-toggler",
      togglelink: "ctm-navbar-links",
    };
  }
  openMenu = () => {
    // alert("menu open");
    this.setState({
      togglebtn: "ctm-navbar-toggler active",
      togglelink: "ctm-navbar-links active",
    });
  };
  closeMenu = () => {
    // alert("Menu closed");
    this.setState({
      togglebtn: "ctm-navbar-toggler",
      togglelink: "ctm-navbar-links",
    });
  };
  render() {
    return (
      <div>
        <div className="ctm-container row mx-0">
          <header className="header col-12 col-sm-3 col-lg-2 p-0">
            <nav className="ctm-navbar">
              <div className="ctm-nav-header">
                <a className="ctm-navbar-brand" href="#">
                  <img src="img/Logo.png" alt="brand Logo" width="30" />
                  LOGO
                </a>
                <button className={this.state.togglebtn} type="button">
                  <div onClick={this.openMenu}>
                    <img
                      className="hamburger"
                      src="img/Hamburger.png"
                      alt="Hamburger button"
                    />
                  </div>
                  <div onClick={this.closeMenu}>
                    <img
                      className="close"
                      src="img/Close.png"
                      alt="close button"
                    />
                  </div>
                </button>
              </div>
              <div className={this.state.togglelink}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      DASHBOARD
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      OUR SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PRODUCTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      NEWSLETTER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      OFFERS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      LOG OUT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main className="col-12 col-sm-9 col-lg-10 px-0">
            {/* <!-- Hero section --> */}
            <div className="ctm-hero position-relative">
              <picture className="position-relative">
                <source
                  media="(min-width:992px)"
                  srcSet="img/Banner_Desktop.png"
                />
                <source media="(min-width:572px)" srcSet="img/Banner_Tab.png" />

                <img
                  className="w-100"
                  src="img/Banner_Mobile.png"
                  alt="Banner Image"
                />
              </picture>
              <div className="ctm-dashbord position-absolute top-50 start-0 translate-middle-y">
                Dashboard
              </div>
            </div>
            {/* <!-- Heading Section--> */}
            <div className="ctm-heading row align-items-center px-5 mx-0 px-sm-3 px-lg-5 py-5">
              <div className="ctm-title col-12 col-sm-4 px-0">
                Heading 1 &ndash; <br />
                Point of View
              </div>
              <div className="ctm-description col-12 col-sm-8 ps-sm-4 ps-lg-5 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.proin sodales pulvinar sic
                tempor.
                <a className="text-decoration-none" href="#">
                  Read More
                </a>
              </div>
            </div>
            {/* <!-- Products Section --> */}
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 p-5 p-sm-3 p-lg-5 g-4 g-sm-2 g-lg-4">
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <span className="card-tag">PRODUCT FAMILY</span>

                    <h5 className="card-title">Product Name</h5>

                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    </p>
                    <button
                      type="button"
                      className="btn card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                      <div className="modal-header px-0">
                        <div>
                          <span className="modal-tag">PRODUCT FAMILY</span>

                          <h5 className="modal-title mb-0">Product Name</h5>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body px-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aenean euismod bibendum laoreet. Proin
                        gravida dolor sit Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn modal-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="footer bg-dark text-end d-flex flex-column flex-sm-row justify-content-between py-4 px-3 px-sm-5">
          <div className="contact-us">
            <span>Need Help?</span>
            <a href="#" className="default-link">
              Contact Us
            </a>
          </div>
          <div className="copyright">
            Copyright &copy; 2021. All right reserved
          </div>
        </footer>
      </div>
    );
  }
}

export default Ecommerce;
