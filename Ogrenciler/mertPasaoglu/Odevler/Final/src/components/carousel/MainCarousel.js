import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel  from '../../assets/hero-banner.png';
import Button from "../button/Button";
import './MainCarousel.scss';
import { NavLink } from 'react-router-dom';

const CarouselSection = () => {
  return (
    <Carousel variant="white">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel}
        alt="First slide"
      />
      <div className='text-white caption text-start'>        
      <h2>Gameplus ile ayricalikli GeForce <br /> Now deneyimine hosgeldin!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Placeat sunt illum quidem quibusdam et.</p>
      <NavLink to="./register"><Button type="primary" text="REGISTER" /></NavLink>
      </div>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel}
        alt="Second slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
      <div className='text-white caption text-start'>        
          <h2>Gameplus ile ayricalikli GeForce <br /> Now deneyimine hosgeldin!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Placeat sunt illum quidem quibusdam et.</p>
          <NavLink to="./register"><Button type="primary" text="REGISTER" /></NavLink>
        </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel}
        alt="Third slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
      <div className='text-white caption text-start'>        
          <h2>Gameplus ile ayricalikli GeForce <br /> Now deneyimine hosgeldin!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Placeat sunt illum quidem quibusdam et.</p>
          <NavLink to="./register"><Button type="primary" text="REGISTER" /></NavLink>
        </div>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselSection