import React from "react";
import "../Games/Games.scss";
import game1 from "../assets/game-1.png";
import game2 from "../assets/game-2.png";
import game3 from "../assets/game-3.png";
import game4 from "../assets/game-4.png";
import game5 from "../assets/game-5.png";
import game6 from "../assets/game-6.png";
import game7 from "../assets/game-7.png";
import game8 from "../assets/game-8.png";
import game9 from "../assets/game-9.png";
import game10 from "../assets/game-10.png";
import game11 from "../assets/game-11.png";
import game12 from "../assets/game-12.png";
import line from "../assets/line.png";
import stroke from "../assets/stroke.png";
import stroke1 from "../assets/stroke1.png";
import stroke3 from "../assets/stroke3.png";

const Games = () => {
  return (
    <div>
      <div className="games">
        <p className="game-p">Choose the game you want to play</p>
        <div className="grid row">
          <img src={game1} alt="" className="col-md-2 col-6" />
          <img src={game2} alt="" className="col-md-2 col-6" />
          <img src={game3} alt="" className="col-md-2 col-6" />
          <img src={game4} alt="" className="col-md-2 col-6" />
          <img src={game5} alt="" className="col-md-2 col-6" />
          <img src={game6} alt="" className="col-md-2 col-6" />
          <img src={game7} alt="" className="col-md-2 col-6" />
          <img src={game8} alt="" className="col-md-2 col-6" />
          <img src={game9} alt="" className="col-md-2 col-6" />
          <img src={game10} alt="" className="col-md-2 col-6" />
          <img src={game11} alt="" className="col-md-2 col-6" />
          <img src={game12} alt="" className="col-md-2 col-6" />
        </div>
        <div className="d-flex">
          <button className="games-btn justify-content-md-center align-items-md-center">
            SEE ALL GAMES
          </button>
        </div>
      </div>
      <div className=" subs">
        <h2 className="fw-bold text-center m-0 text-white justify-content-center">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="container p-0">
          <div className="row m-0">
            <div className="p-0 d-md-flex justify-content-md-center">
              <div className="sub-cards text-white">
                <h3 className="card-title text-center fw-bold">BASIC</h3>
                <div className="card-bg-title">
                  <h3 className="card-title-seconder text-center">Free</h3>
                  <img
                    src={line}
                    alt=""
                    className="sub-cards-line pb-30 d-flex mx-auto"
                  />
                  <div className="sub-cards-info">
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">Standart Access</p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                    <div className="d-flex align-items-center pb-30 ">
                      <img
                        src={stroke3}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0 text-mute-color">
                        Standart Access
                      </p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                  </div>
                  <button className="sub-cards-button text-white fw-bold">
                    JOIN NOW
                  </button>
                </div>
              </div>
              <div className="sub-cards text-white">
                <h3 className="card-title-standard m-0 text-center fw-bold">
                  STANDARD
                </h3>
                <div className="sub-cards-info-standard">
                  <h3 className="card-title-seconder text-center">15$/month</h3>
                  <img
                    src={line}
                    alt=""
                    className="sub-cards-line pb-30 d-flex mx-auto"
                  />
                  <div className="sub-cards-info">
                    <div className="d-flex align-items-center pb-30">
                      <img
                        src={stroke1}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0">Standart Access</p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img
                        src={stroke1}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                    <div className="d-flex align-items-center pb-30 ">
                      <img
                        src={stroke1}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0">Standart Access</p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img
                        src={stroke1}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                  </div>
                  <button className="sub-cards-button text-white fw-bold">
                    JOIN NOW
                  </button>
                </div>
              </div>
              <div className="sub-cards text-white">
                <h3 className="card-title text-center fw-bold">PREMIUM</h3>
                <div className="card-bg-title">
                  <h3 className="card-title-seconder text-center">30$/month</h3>
                  <img
                    src={line}
                    alt=""
                    className="sub-cards-line pb-30 d-flex mx-auto"
                  />
                  <div className="sub-cards-info">
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">Standart Access</p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                    <div className="d-flex align-items-center pb-30 ">
                      <img
                        src={stroke3}
                        alt=""
                        className="sub-cards-info-img"
                      />
                      <p className="sub-cards-info-text m-0 text-mute-color">
                        Standart Access
                      </p>
                    </div>
                    <div className="d-flex align-items-center pb-30">
                      <img src={stroke} alt="" className="sub-cards-info-img" />
                      <p className="sub-cards-info-text m-0">
                        1-hr session length
                      </p>
                    </div>
                  </div>
                  <button className="sub-cards-button text-white fw-bold">
                    JOIN NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
