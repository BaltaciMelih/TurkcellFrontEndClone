import React from "react";
import Facebook from "../../assets/footer/icon-facebook.svg";
import Twitter from "../../assets/footer/icon-twitter.svg";
import Instagram from "../../assets/footer/icon-instagram.svg";
import Youtube from "../../assets/footer/icon-youtube.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="px-0 py-3 pb-0 bg-light  text-align   ">
        <div className="container  ">
          <div className="row  d-flex justify-content-between">
            <div className="row col-lg-4 col-sm-6 ">
              <div className="col-lg-4 col-sm-6 ">
                <div className="single-box">
                  <ul className="list-unstyled p-0">
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Games
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Membership
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-box">
                  <ul className="list-unstyled p-0">
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-box">
                  <ul className="list-unstyled p-0">
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Service Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row col-lg-4 col-sm-6">
              <div className="col-lg-6 col-sm-6">
                <div className="single-box">
                  <ul className="list-unstyled p-0">
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Follow Us!
                      </a>
                    </li>
                    <li>
                      <p className="socials">
                        <i className="mx-0">
                          <img src={Facebook} alt="" />
                        </i>
                        <i className="mx-2">
                          <img src={Twitter} alt="" />
                        </i>
                        <i className="mx-0">
                          <img src={Instagram} alt="" />
                        </i>
                        <i className="mx-2">
                          <img src={Youtube} alt="" />
                        </i>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="single-box">
                  <ul className="list-unstyled p-0">
                    <li>
                      <a
                        href="#"
                        className="lh-lg text-dark text-decoration-none"
                      >
                        Site Language
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          English
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Turkish
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-white">
          <div className="copyright-content d-flex justify-content-between flex-wrap p-3">
            <div className="deneme d-flex flex-column flex-md-row">
              <span className="mx-3">Kullanıcı Sözleşmesi</span>
              <span className="mx-3">Gizlilik Politikası</span>
              <span className="mx-3">Çerez Politikası</span>
            </div>
            <div className="text-center mx-5">
              <span className="reserved mx-auto text-center">
                Tüm hakları saklıdır.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
