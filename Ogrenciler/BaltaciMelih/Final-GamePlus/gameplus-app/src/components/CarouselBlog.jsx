import React from "react";
import Button from "./Button";

const CarouselBlog = () => {
  return (
    <div className="blog-banner bg-secondary">
      <div
        id="carouselBlogIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselBlogIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselBlogIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselBlogIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner text-white d-flex">
          <div className="carousel-item active">
            <div className="blog-item-content d-flex justify-content-center bg-light">
              <div>
                <img src="../assets/controller.png" alt="" />
              </div>
              <div className="blog-content d-flex flex-column justify-content-center">
                <span>GAMING - AUGUST 11, 2020</span>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus curvus orci et!
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <Button color="light" width="185" content="READ MORE" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="blog-item-content d-flex justify-content-center bg-light">
              <div>
                <img src="../assets/controller.png" alt="" />
              </div>
              <div className="blog-content d-flex flex-column justify-content-center">
                <span>GAMING - AUGUST 11, 2020</span>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus curvus orci et!
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <Button color="light" width="185" content="READ MORE" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="blog-item-content d-flex justify-content-center bg-light">
              <div>
                <img src="../assets/controller.png" alt="" />
              </div>
              <div className="blog-content d-flex flex-column justify-content-center">
                <span>GAMING - AUGUST 11, 2020</span>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus curvus orci et!
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <Button color="light" width="185" content="READ MORE" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBlogIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBlogIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselBlog;
