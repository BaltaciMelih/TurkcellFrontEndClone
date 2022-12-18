import React from "react";
import "./Blog.scss";
import ButonAnasayfa from "../../Buttons/ButonAnasayfa";
import { BsFillCircleFill } from "react-icons/bs";

function Blog() {
  return (
    <div className="Blog">
      <a
        className="leftArrow-blog d-none d-lg-block"
        data-bs-target="#carouselBlog"
        data-bs-slide="prev"
      >
        <img
          alt="blog"
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg"
        ></img>
        <span className="visually-hidden">Previous</span>
      </a>
      <div id="carouselBlog" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item  active  ">
            <div className="itemsBlog">
              <img
                alt="blog"
                className="blog-image"
                src="https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"
              ></img>
              <div className="BlogRight">
                <div className="BlogDate">GAMING - AUGUST 11, 2020 </div>
                <div className="BlogTitle">
                  Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                </div>
                <div className="BlogParagaraf">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </div>
                <ButonAnasayfa
          
                Title="READ MORE"
                Type="transparent"
                Witdh="width-185"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="itemsBlog">
              <img
                alt="blog"
                className="blog-image"
                src="https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"
              ></img>
              <div className="BlogRight">
                <div className="BlogDate">GAMING - AUGUST 11, 2020 </div>
                <div className="BlogTitle">
                  Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                </div>
                <div className="BlogParagaraf">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </div>
                <ButonAnasayfa
                  Title="READ MORE"
                  Type="transparent"
                  Witdh="width-185"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="itemsBlog">
              <img
                alt="blog"
                className="blog-image"
                src="https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"
              ></img>
              <div className="BlogRight">
                <div className="BlogDate">GAMING - AUGUST 11, 2020 </div>
                <div className="BlogTitle">
                  Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                </div>
                <div className="BlogParagaraf">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </div>
                <ButonAnasayfa
                  Title="READ MORE"
                  Type="transparent"
                  Witdh="width-185"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-none blog-circle">
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <BsFillCircleFill />
          </a>
        </div>
      </div>
      <a
        className="rightArrow-blog d-none d-lg-block"
        data-bs-target="#carouselBlog"
        data-bs-slide="next"
      >
        <img
          alt="blog"
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg"
        ></img>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Blog;
