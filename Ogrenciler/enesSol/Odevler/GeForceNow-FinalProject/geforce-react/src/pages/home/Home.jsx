import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/homepage/hero-banner@3x.png";
import "./Home.scss";
import Feature1 from "../../assets/homepage/icon-feature-01.svg";
import Feature3 from "../../assets/homepage/icon-feature-03.svg";
import Group from "../../assets/homepage/group.svg";
import Group1 from "../../assets/homepage/group (1).svg";
import Mac from "../../assets/homepage/icons-mac.svg";
import Pc from "../../assets/homepage/icons-pc.svg";
import Android from "../../assets/homepage/icons-android.svg";

//image-up
import Gimgup1 from "../../assets/homepage/worldofwarships.jpg";
import Gimgup2 from "../../assets/homepage/populationzero.jpg";
import Gimgup3 from "../../assets/homepage/curi.jpg";
import Gimgup4 from "../../assets/homepage/killingfloor.jpg";
import Gimgup5 from "../../assets/homepage/mordheim.jpg";
import Gimgup6 from "../../assets/homepage/bannerlord.jpg";

//image-down
import Gimgdown1 from "../../assets/homepage/movingout.jpg";
import Gimgdown2 from "../../assets/homepage/overcooked.jpg";
import Gimgdown3 from "../../assets/homepage/gtfo.jpg";
import Gimgdown4 from "../../assets/homepage/grimdawn.jpg";
import Gimgdown5 from "../../assets/homepage/magicka.jpg";
import Gimgdown6 from "../../assets/homepage/pathofexile.jpg";

//gamepad
import Gamepad from "../../assets/homepage/controller.webp";
import Left from "../../assets/homepage/icon-arrow-left.svg";
import Right from "../../assets/homepage/icon-arrow-right.svg";

// partnerships
import Logitech1 from "../../assets/homepage/logolar-02@3x.png";
import Logitech2 from "../../assets/homepage/logolar-03@3x.png";

const Home = () => {
  return (
    <>
      <div
        id="carouselDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner position-static">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <Link to="/register">
                <button
                  type="submit"
                  className="btn w-25 btn-register myButton"
                >
                  REGISTER
                </button>
              </Link>
            </div>
            <img src={Hero} className="d-block w-100" alt="hero-banner" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Hero} className="d-block w-100" alt="hero-banner" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <Link to="/register">
                <button
                  type="submit"
                  className="btn w-25 btn-register myButton"
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Hero} className="d-block w-100" alt="hero-banner" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <Link to="/register">
                <button
                  type="submit"
                  className="btn w-25 btn-register myButton"
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide="prev"
        >
          <span className="d-none d-sm-block" aria-hidden="true">
            <img src={Left} />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide="next"
        >
          <span className="d-none d-sm-block" aria-hidden="true">
            <img src={Right} />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-md-none py-5 px-3">
        <h5>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h5>
        <p className="text-white fs-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tempor augue vel porta ullamcorper.
        </p>
        <Link to="/register">
          <button type="submit" className="btn w-50 myButton">
            REGISTER
          </button>
        </Link>
      </div>

      {/* HEADER */}
      <div className="position-relative d-none d-md-flex justify-content-center">
        <div className="container gf-features px-5 py-3 ">
          <div className="row row-item">
            <div className="col-md-4 text-white py-5">
              <p>Features</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4 text-white">
              <div className="d-flex mt-2">
                <img className="me-3" src={Feature1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="d-flex mt-4">
                <img className="me-3" src={Feature3} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="col-md-4 text-white">
              <div className="d-flex mt-2">
                <img className="me-3" src={Group} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="d-flex mt-4">
                <img className="me-3" src={Group1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none py-5 px-3 text-white text-center dark-grey">
        <div className="text-center">
          <p>Features</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p>
          <img className="me-3" src={Feature1} alt="" /> Lorem ipsum dolor sit
          amet
        </p>
        <p>
          <img className="me-3" src={Feature3} alt="" />
          Lorem ipsum dolor sit amet
        </p>
        <p>
          <img className="me-3" src={Group} alt="" />
          Lorem ipsum dolor sit amet
        </p>
        <p>
          <img className="me-3" src={Group1} alt="" />
          Lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="container-holder d-none d-md-flex"></div>

      <div className="container-screen-bg text-center justify-content-around ">
        <span className="devices-title text-center">
          On all your screens at home and on the go
        </span>
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-4 col-sm-12 d-flex align-items-center text-center justify-content-center p-4 text-white border border-dark mt-5 mb-5 me-5 ms-5 available-devices"
            role="button"
          >
            <div className="d-flex text-center align-items-center justify-content-center">
              <img
                src={Pc}
                alt="Pc"
                className="me-3 d-flex text-center justify-content-center align-items-center"
              />
            </div>
            <span className="Available-on-Android"> Available on Android</span>
          </div>
          <div
            className="col-md-4 col-sm-12 d-flex align-items-center text-center justify-content-center p-4 text-white border border-dark mt-5 mb-5 me-5 ms-5 available-devices"
            role="button"
          >
            <div className="d-flex text-center align-items-center justify-content-center">
              <img
                src={Mac}
                alt="Mac"
                className="me-3 d-flex text-center justify-content-center align-items-center"
              />
            </div>
            <span className="Available-on-Mac"> Available on Mac</span>
          </div>
          <div
            className="col-md-4 col-sm-12 d-flex align-items-center text-center justify-content-center p-4 text-white border border-dark mt-5 mb-5 me-5 ms-5 mx-lg-5 available-devices"
            role="button"
          >
            <div className="d-flex text-center align-items-center justify-content-center">
              <img
                src={Android}
                alt="Android"
                className="me-3 d-flex text-center justify-content-center align-items-center"
              />
            </div>
            <span className="Available-on-Windows"> Available on Windows</span>
          </div>
        </div>
      </div>

      {/* Container-games-up*/}
      <div className="container text-center">
        <div className="row justify-content-center">
          <span className="gameimg-header text-center">
            Choose the game you want to play
          </span>
          <div className="game-thumbnail col-lg-2 mt-5  ">
            <img className="img-fluid" src={Gimgup1} alt="Pc" />
          </div>
          <div className="game-thumbnail col-lg-2 mt-5 ">
            <img className="img-fluid" src={Gimgup2} alt="Mac" />
          </div>
          <div className="game-thumbnail col-lg-2  mt-5 ">
            <img className="img-fluid" src={Gimgup3} alt="Android" />
          </div>
          <div className="game-thumbnail col-lg-2  mt-5 ">
            <img className="img-fluid" src={Gimgup4} alt="Pc" />
          </div>
          <div className="game-thumbnail col-lg-2  mt-5 ">
            <img className="img-fluid" src={Gimgup5} alt="Mac" />
          </div>
          <div className="game-thumbnail col-lg-2  mt-5 ">
            <img className="img-fluid" src={Gimgup6} alt="Android" />
          </div>
        </div>

        {/* Container-games-down*/}

        <div className="row justify-content-center games-2nd">
          <div className="game-thumbnail col-lg-2">
            <img className="img-fluid" src={Gimgdown1} alt="Pc" />
          </div>
          <div className="game-thumbnail col-lg-2 ">
            <img className="img-fluid" src={Gimgdown2} alt="Mac" />
          </div>
          <div className="game-thumbnail col-lg-2 ">
            <img className="img-fluid" src={Gimgdown3} alt="Android" />
          </div>
          <div className="game-thumbnail col-lg-2 ">
            <img className="img-fluid" src={Gimgdown4} alt="Pc" />
          </div>
          <div className="game-thumbnail col-lg-2 ">
            <img className="img-fluid" src={Gimgdown5} alt="Mac" />
          </div>
          <div className=" game-thumbnail col-lg-2 ">
            <img className="img-fluid" src={Gimgdown6} alt="Android" />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-50 btn-register mt-5 mb-5 align-items-center myButton"
        >
          SEE ALL GAME
        </button>
      </div>

      {/* Cards*/}
      <div className="membership">
        <div>
          <h2 className="text-center mb-5 fs-1 text-white">
            Sana en uygun paketi seç
          </h2>
          <div className="membership-content">
            <div className="member-card">
              <div className="fee-title">
                <h3>BASIC</h3>
              </div>
              <span className="member-fee">Free</span>
              <div className="membership-details">
                <span className="benefits notselected">Standart Access</span>
                <span className="benefits notselected">
                  1-hr session length
                </span>
                <span className="benefits notselected text-secondary">
                  Standart Access
                </span>
                <span className="benefits notselected">
                  1-hr session length
                </span>
                <button type="button" className="btn  btn-block buy-Button">
                  JOIN NOW
                </button>
              </div>
            </div>

            <div className="member-card active-card">
              <div className="fee-title">
                <h3>STANDARD</h3>
              </div>
              <span className="member-fee">15$/month</span>
              <div className="membership-details">
                <span className="benefits selected">Standart Access</span>
                <span className="benefits selected">1-hr session length</span>
                <span className="benefits selected">Standart Access</span>
                <span className="benefits selected">1-hr session length</span>
                <button type="button" className="btn  btn-block buy-Button">
                  JOIN NOW
                </button>
              </div>
            </div>

            <div className="member-card">
              <div className="fee-title">
                <h3>PREMIUM</h3>
              </div>
              <span className="member-fee">30$/month</span>
              <div className="membership-details">
                <span className="benefits notselected">Standart Access</span>
                <span className="benefits notselected">
                  1-hr session length
                </span>
                <span className="benefits notselected text-secondary">
                  Standart Access
                </span>
                <span className="benefits notselected">
                  1-hr session length
                </span>
                <button type="button" className="btn  btn-block buy-Button">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GamePad */}

      <div
        id="carouselControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid  text-center mt-5 p-sm-5  dark-grey d-flex gamepad-container">
              <div className="col-lg-1"></div>
              <div className="row gamepad-shadow  ">
                <div className="px-0 col-lg-4 ">
                  <img
                    className="img-fluid mx-0 p-2 p-sm-0"
                    src={Gamepad}
                    alt="Gamepad"
                  />
                </div>
                <div className="col-lg-8 text-start p-4 pt-0 pt-sm-4 mt-4">
                  <p className="gaming-date">GAMING - AUGUST 11, 2020</p>
                  <p className="gamepad-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </p>
                  <p className="gamepad-innertext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-block btn-register myButton"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid text-center mt-5 p-sm-5  dark-grey d-flex gamepad-container">
              <div className="col-lg-1"></div>
              <div className="row gamepad-shadow  ">
                <div className="px-0 col-lg-4 ">
                  <img
                    className="img-fluid mx-0 p-2 p-sm-0"
                    src={Gamepad}
                    alt="Gamepad"
                  />
                </div>
                <div className="col-lg-8 text-start p-4 pt-0 pt-sm-4 mt-4">
                  <p className="gaming-date">GAMING - AUGUST 11, 2020</p>
                  <p className="gamepad-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </p>
                  <p className="gamepad-innertext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-block btn-register myButton"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid text-center mt-5 p-sm-5  dark-grey d-flex gamepad-container">
              <div className="col-lg-1"></div>
              <div className="row gamepad-shadow  ">
                <div className="px-0 col-lg-4 ">
                  <img
                    className="img-fluid mx-0 p-2 p-sm-0"
                    src={Gamepad}
                    alt="Gamepad"
                  />
                </div>
                <div className="col-lg-8 text-start p-4 pt-0 pt-sm-4 mt-4">
                  <p className="gaming-date">GAMING - AUGUST 11, 2020</p>
                  <p className="gamepad-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </p>
                  <p className="gamepad-innertext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-block btn-register myButton"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="prev"
        >
          <span className="d-none d-md-block" aria-hidden="true">
            <img src={Left} />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="next"
        >
          <span className="d-none d-md-block" aria-hidden="true">
            <img src={Right} />
          </span>
          <span className="visually-hidden"></span>
        </button>
      </div>

      {/* Logitech */}
      <div className="container-fluid partnership-banner w-100">
        <h3 className="text-white text-center pt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing
        </h3>
        <div className="affiliates d-flex justify-content-center align-items-center gap-5 flex-wrap overflow-hidden">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap overflow-hidden">
            <div className="hex text-center">
              <img src={Logitech1} alt="" className="logitech1 mt-4" />
            </div>
            <div className="hex text-center">
              <img src={Logitech2} alt="" className="logitech2" />
            </div>
            <div className="hex text-center d-none d-sm-block">
              <img src={Logitech1} alt="" className="logitech1 mt-4" />
            </div>
            <div className="hex text-center d-none d-sm-block">
              <img src={Logitech2} alt="" className="logitech2" />
            </div>
            <div className="hex text-center d-none d-sm-block">
              <img src={Logitech1} alt="" className="logitech1 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
