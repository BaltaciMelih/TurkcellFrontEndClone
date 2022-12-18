import React from "react";
import { Slider, Banner } from "../../components";
import Card from "../../components/card/Card";
import { homeRail, homeRail2 } from "../../utils/config";
import { Container, Row } from "react-bootstrap";
import prev from "../../assets/slider/icon-arrow-left.png";
import next from "../../assets/slider/icon-arrow-right.png";
import features1 from "../../assets/features/group.png"
import features2 from "../../assets/features/group_2.png"
import features3 from "../../assets/features/icon-feature-01.png"
import features4 from "../../assets/features/icon-feature-03.png"
import mac from "../../assets/screen/combined-shape.png"
import windows from "../../assets/screen/icons-mac.png"
import android from "../../assets/screen/icons-android.png"
import stroke from "../../assets/true/stroke.png"
import stroke2 from "../../assets/true/stroke_2.png"
import strokeGreen from "../../assets/true/stroke_9.png"
import carousel_card from "../../assets/carousel_card.png"
import "./Home.scss";
import  Button  from "../../components/button/Button";

const Home = () => {
  return (
    <main className="home">

      <Slider />
      
      <section className="features_banner">        
          <div className="features_box">
            <div className="features_content">
              <Row>             
                <div className="col my-5">
                  <h3>Features</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-4 mx-3">
                  <div className="features_icons">
                    <img src={features3} alt="3" />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="features_icons">
                    <img src={features4} alt="4" />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>                                     
                </div>   
                <div className="col-4">
                  <div className="features_icons">
                    <img src={features2} alt="2" />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="features_icons">
                    <img src={features1} alt="1" />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>         
                </div>                    
              </Row> 
            </div>
          </div>
      </section>

      <section className="screen_banner">
          <h1>On all your screens at home and on the go</h1>
          <Row className="screen_boxs">
            <div className="col d-flex justify-content-center align-items-center ">
              <div className="screen_box">
                <img src={windows} alt="windows" />
                <span>Available on Windows</span>
              </div>              
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <div className="screen_box">
                <img src={mac} alt="mac" />
                <span>Available on Mac</span>
              </div>              
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <div className="screen_box">
                <img src={android} alt="android" />
                <span>Available on Android</span>
              </div>              
            </div>         
          </Row>
        
      </section>
      
      <section className="games_all">
        <h1>Choose the game you want to play</h1>      
        <Container className="my-4">
        <Row>
        {homeRail.map((data, index) => (
          <Card key={index} imgSrc={data.img} url={data.url} size={2} />
        ))}
        </Row>
        <Row className="my-4">
        {homeRail2.map((data, index) => (
          <Card key={index} imgSrc={data.img} url={data.url} size={2} />
        ))}
        </Row>
        </Container>
        
        <Button className="secondBtn" name={"SEE ALL GAMES"}></Button>
      </section>

      <section className="cards_all">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <Container>
            <Row>
              <div className="col-12 col-md-4"> 
                <div className="cards">
                  <div className="card-title d-flex justify-content-center align-items-center">
                    <h2>BASIC</h2>
                  </div>                                              
                  <div className="card-body">
                      <h3>Free</h3>
                      <hr/>
                      <ul>
                        <li>
                          <img src={stroke} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={stroke} alt="true"/><span>1-hr session length</span>       
                        </li>
                        <li>
                          <img src={stroke2} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={stroke} alt="true"/><span>1-hr session length</span>        
                        </li>
                      </ul> 
                    <Button className="thirdBtn" name={"JOIN NOW"}></Button>
                  </div> 
                </div>                                                                                  
              </div> 
              <div className="col-12 col-md-4"> 
                <div className="cards card_border">
                  <div className="card-title card_bg d-flex justify-content-center align-items-center">
                    <h2>STANDART</h2>
                  </div>                                              
                  <div className="card-body">
                      <h3>15$/month</h3>
                      <hr/>
                      <ul>
                        <li>
                          <img src={strokeGreen} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={strokeGreen} alt="true"/><span>1-hr session length</span>       
                        </li>
                        <li>
                          <img src={strokeGreen} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={strokeGreen} alt="true"/><span>1-hr session length</span>        
                        </li>
                      </ul> 
                    <Button className="thirdBtn" name={"JOIN NOW"}></Button>
                  </div> 
                </div>                                                                                  
              </div> 
              <div className="col-12 col-md-4"> 
                <div className="cards">
                  <div className="card-title d-flex justify-content-center align-items-center">
                    <h2>PREMIUM</h2>
                  </div>                                              
                  <div className="card-body">
                      <h3>30$/month</h3>
                      <hr/>
                      <ul>
                        <li>
                          <img src={stroke} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={stroke} alt="true"/><span>1-hr session length</span>       
                        </li>
                        <li>
                          <img src={stroke2} alt="true"/><span>Standart Access</span>       
                        </li>
                        <li>
                          <img src={stroke} alt="true"/><span>1-hr session length</span>        
                        </li>
                      </ul> 
                    <Button className="thirdBtn" name={"JOIN NOW"}></Button>
                  </div> 
                </div>                                                                                  
              </div>  
            </Row>
          </Container>
      </section>  

      <section className="carousel_cards"> 
        <div className="carousel slide"
        id="carouselExampleControls"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carousel_cards">
          <div className="carousel_cards">
            <div className="carousel-item active">
            <Container>
              <Row>
                <div className="card mb-3 border-0">
              <div className="row g-0 card_bg">
                <div className="col-md-3">
                  <img src={carousel_card} className="img-fluid" alt="First" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <span>GAMING - AUGUST 11, 2020</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!
                    </p>
                    <p className="card_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="fourBtn" name={"READ MORE"}></Button>
                  </div>
                </div>
              </div>
                </div>
              </Row>
            </Container>
            </div>
            <div className="carousel-item">
            <Container>
              <Row>
                <div className="card mb-3 border-0">
              <div className="row g-0 card_bg">
                <div className="col-md-3">
                  <img src={carousel_card} className="img-fluid" alt="First" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <span>GAMING - AUGUST 11, 2020</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!
                    </p>
                    <p className="card_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="fourBtn" name={"READ MORE"}></Button>
                  </div>
                </div>
              </div>
                </div>
              </Row>
            </Container>
            </div>
            <div className="carousel-item">
            <Container>
              <Row>
                <div className="card mb-3 border-0">
              <div className="row g-0 card_bg">
                <div className="col-md-3">
                  <img src={carousel_card} className="img-fluid" alt="First" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <span>GAMING - AUGUST 11, 2020</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!
                    </p>
                    <p className="card_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="fourBtn" name={"READ MORE"}></Button>
                  </div>
                </div>
              </div>
                </div>
              </Row>
            </Container>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span  aria-hidden="true"><img src={prev} alt="prev"></img></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span aria-hidden="true"><img src={next} alt="next"></img></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </section> 

      <Banner />

    </main>
  );
};

export default Home;
