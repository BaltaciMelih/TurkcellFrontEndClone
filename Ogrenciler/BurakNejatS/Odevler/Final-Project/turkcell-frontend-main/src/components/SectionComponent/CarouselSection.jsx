import React from "react";
import ArrowRight from "../../images/icon-arrow-right.png";
import ArrowLeft from "../../images/icon-arrow-left.png";
import Carousel from "react-bootstrap/Carousel";
import razing from "../../images/razing.png";
import "../../styles/CarouselSeciton.css";
export default function CarouselSection() {
  return (
    <div className="p-5 w-100 bg-dark">
      <div className="w-100 bg-dark">
        <Carousel>
          <Carousel.Item>
            <div className="container col-md-12  ">
              <div className="row text-light">
                <div className="col col-md-1 d-flex align-items-center">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span aria-hidden="true">
                      <img src={ArrowLeft} alt="" />
                    </span>
                  </button>
                </div>
                <div className=" col col-md-3  col-12  d-flex justify-content-center ">
                  <img src={razing} width="387" />
                </div>
                <div className="carousel-2 col col-md-7 col-12 ">
                  <div className="col-md-5 mt-5">
                    <p>GAMING - AUGUST 11,2020</p> <br />
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus nemo quidem rem.
                  </p>{" "}
                  <br />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium explicabo qui totam quas expedita ab saepe
                    impedit quibusdam voluptas dignissimos, officiis repellendus
                    pariatur alias eum deserunt harum provident nam odit.
                  </p>
                  {/* <Buttons text="READ MORE" /> */}
                  <button className=" cauroselSectionBtn">Read More</button>
                </div>
                <div className=" col col-md-1 d-flex align-items-center">
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span aria-hidden="true">
                      <img src={ArrowRight} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container col-md-12  ">
              <div className="row text-light">
                <div className="col col-md-1 d-flex align-items-center">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev" >
                    <span aria-hidden="true">
                      <img src={ArrowLeft} alt="" />
                    </span>
                  </button>
                </div>
                <div className=" col col-md-3  col-12  d-flex justify-content-center ">
                  <img src={razing} width="387" />
                </div>
                <div className="carousel-2 col col-md-7 col-12 ">
                  <div className="col-md-5 mt-5">
                    <p>GAMING - AUGUST 11,2020</p> <br />
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus nemo quidem rem.
                  </p>{" "}
                  <br />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium explicabo qui totam quas expedita ab saepe
                    impedit quibusdam voluptas dignissimos, officiis repellendus
                    pariatur alias eum deserunt harum provident nam odit.
                  </p>
                  <button className=" cauroselSectionBtn">Read More</button>
                </div>
                <div className=" col col-md-1 d-flex align-items-center">
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span aria-hidden="true">
                      <img src={ArrowRight} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
