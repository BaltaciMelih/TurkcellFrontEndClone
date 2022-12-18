import React from "react";
import "../Mask-Slider/MaskSlider.scss";
import GamePad from "../assets/gamepad.png";
import leftarrow2 from "../assets/icon-arrow-left(1).svg";
import rightarrow2 from "../assets/icon-arrow-right.svg";

const MaskSlider = () => {
  return (
    <div>
      <div id="carouselIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            class="active d-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="d-none"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="d-none"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="d-flex justify-content-center gamepads">
              <div className="d-flex gamepad flex-md-row flex-column">
                <img
                  src={GamePad}
                  class="d-block w-100 gamepad-img"
                  alt="..."
                />
                <div className="gamepad-text d-flex justify-content-start align-items-center flex-wrap">
                  <div className="gamepad-text-date">
                    GAMING - AUGUST 11, 2020
                  </div>
                  <div className="fw-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="gamepad-text-read">READ MORE</div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center gamepads">
              <div className="d-flex gamepad flex-md-row flex-column">
                <img
                  src={GamePad}
                  class="d-block w-100 gamepad-img"
                  alt="..."
                />
                <div className="gamepad-text d-flex  justify-content-start align-items-center flex-wrap">
                  <div className="gamepad-text-date">
                    GAMING - AUGUST 11, 2020
                  </div>
                  <div className="fw-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="gamepad-text-read">READ MORE</div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center gamepads">
              <div className="d-flex gamepad flex-md-row flex-column">
                <img
                  src={GamePad}
                  class="d-block w-100 gamepad-img"
                  alt="..."
                />
                <div className="gamepad-text d-flex justify-content-start align-items-center flex-wrap">
                  <div className="gamepad-text-date">
                    GAMING - AUGUST 11, 2020
                  </div>
                  <div className="fw-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus curvus orci et!
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="gamepad-text-read">READ MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <img
              src={leftarrow2}
              className="d-md-block d-none me-5"
              alt=""
              srcset=""
            />
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <img
              src={rightarrow2}
              className="d-md-block d-none ms-5"
              alt=""
              srcset=""
            />
          </span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MaskSlider;
