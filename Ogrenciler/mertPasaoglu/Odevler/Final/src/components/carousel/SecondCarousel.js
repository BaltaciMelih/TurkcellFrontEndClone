import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel  from '../../assets/hero-banner.png';
import Button from "../button/Button";
import "./SecondCarousel.scss"

const SecondCarouselSection = () => {
  return (
    <Carousel variant="white">
        <Carousel.Item>
          <div className="carousel-content">
            <div className="col-4"> 
            <div className='img'>
              <img
                src={carousel}
                alt="First slide"
              />
              </div>
              </div>  
              <div className="col-8 ">
                   <div className='content'>
                <h5 className='gaming'>GAMING - AUGUST 11, 2020</h5>
                <h4 className='content-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit nulla similique?</h4>
                <p className='content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum dolor ut aspernatur reiciendis?</p>
                <Button type="read" text="READ MORE"/>       
                </div>
              </div>
          </div>      
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-content">
            <div className="col-4"> 
            <div className='img'>
              <img
                src={carousel}
                alt="First slide"
              />
              </div>
              </div>  
              <div className="col-8 ">
                   <div className='content'>
                <h5 className='gaming'>GAMING - AUGUST 11, 2020</h5>
                <h4 className='content-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit nulla similique?</h4>
                <p className='content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum dolor ut aspernatur reiciendis?</p>
                <Button type="read" text="READ MORE"/>       
                </div>
              </div>
          </div>      
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-content">
            <div className="col-4"> 
            <div className='img'>
              <img
                src={carousel}
                alt="First slide"
              />
              </div>
              </div>  
              <div className="col-8 ">
                   <div className='content'>
                <h5 className='gaming'>GAMING - AUGUST 11, 2020</h5>
                <h4 className='content-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit nulla similique?</h4>
                <p className='content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum dolor ut aspernatur reiciendis?</p>
                <Button type="read" text="READ MORE"/>       
                </div>
              </div>
          </div>      
        </Carousel.Item>
  </Carousel>
  )
}

export default SecondCarouselSection