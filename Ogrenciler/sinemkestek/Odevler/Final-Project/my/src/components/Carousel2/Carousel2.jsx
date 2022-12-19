import React from "react";
import Razer from "../../assets/images/Razer.jpg";
import StyledButton from "../Button/StyledButton";
import "../Carousel2/carousel2module.scss";

const Carousel2 = () => {
  return (
    <div
      id="consoleCarousel"
      className="carousel slide bg-dark py-md-5 console"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner container p-0 p-md-3">
        <div className="carousel-item active  ">
          <div className="d-md-flex align-items-center px-3 py-4 my-0 my-md-5 ">
            <img src={Razer} className="img-fluid" alt="..." />

            <div className=" text-white px-md-5 ">
              <p className=" my-3">GAMING - AUGUST 11, 2022</p>
              <h4 className="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                mollitia.
              </h4>
              <p className=" large-p">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, quas in! Explicabo minima, est excepturi reiciendis
                laboriosam fuga fugit vel quos, suscipit soluta, animi quo.
              </p>
            </div>

            <div className="slider my-3 d-block d-md-none">
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
        <div className="carousel-item   ">
          <div className="d-md-flex  align-items-center px-3 py-4 my-0 my-md-5 ">
            <img src={Razer} className="img-fluid" alt="..." />
            <div className=" text-white px-md-5  ">
              <p className=" my-3 ">GAMING - AUGUST 11, 2022</p>
              <h4 className="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                mollitia.
              </h4>
              <p className=" large-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, quas in! Explicabo minima, est excepturi reiciendis
                laboriosam fuga fugit vel quos, suscipit soluta, animi quo.
              </p>
              <StyledButton>READ MORE</StyledButton>
            </div>

            <div className="slider my-3 d-block d-md-none">
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="1"
                class="active"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>

        <div className="carousel-item  ">
          <div className="d-md-flex  align-items-center px-3 py-4 my-0 my-md-5 ">
            <img src={Razer} className="img-fluid" alt="..." />

            <div className=" text-white px-md-5 ">
              <p className=" my-3 ">
                <small>GAMING - AUGUST 11, 2022</small>
              </p>
              <h4 className="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                mollitia.
              </h4>
              <p className=" large-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, quas in! Explicabo minima, est excepturi reiciendis
                laboriosam fuga fugit vel quos, suscipit soluta, animi quo.
              </p>
              <StyledButton>READ MORE</StyledButton>
            </div>

            <div className="slider my-3 d-block d-md-none">
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#consoleCarousel"
                data-bs-slide-to="2"
                class="active"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev left-icon"
        type="button"
        data-bs-target="#consoleCarousel"
        data-bs-slide="prev"
      ></button>
      <button
        className="carousel-control-next right-icon"
        type="button"
        data-bs-target="#consoleCarousel"
        data-bs-slide="next"
      ></button>
    </div>
  );
};

export default Carousel2;
