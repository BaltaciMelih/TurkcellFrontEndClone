import React from 'react';
import Gamepad from '../../Images/gamepad.png';
import './gamingInfo.scss'
function GamingInfo() {
  return (
    <div>
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner gaming-carousel">
    <div className="carousel-item active d-flex gaming-carousel-inner">
      <div className="container d-md-flex justify-content-center">
      <img src={Gamepad} class="d-block gaming-carousel-inner-img" alt="..."/>
      <div className='text-white my-auto gaming-carousel-inner-text'>
        <p className='gaming-carousel-inner-text-color'>GAMING - AUGUST 11, 2020</p>
        <h4 className='gaming-carousel-inner-text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</h4>
        <p className='gaming-carousel-inner-text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='gaming-carousel-inner-button btn btn-outline-secondary rounded-0 fw-bold'>READ MORE</button>
        <div className='d-flex justify-content-center justify-content-md-start d-block d-md-none'>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>

      </div>
    </div>
    </div>
    <div className="carousel-item active d-flex gaming-carousel-inner">
      <div className="container d-md-flex justify-content-center">
      <img src={Gamepad} className="d-block gaming-carousel-inner-img" alt="..."/>
      <div className='text-white my-auto gaming-carousel-inner-text'>
        <p className='gaming-carousel-inner-text-color'>GAMING - AUGUST 11, 2021</p>
        <h4 className='gaming-carousel-inner-text-color'>Gamin ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</h4>
        <p className='gaming-carousel-inner-text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='gaming-carousel-inner-button btn btn-outline-secondary rounded-0 fw-bold'>READ MORE</button>
        <div className='d-flex justify-content-center justify-content-md-start d-block d-md-none'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-active rounded-circle bg-secondary mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>

      </div>
    </div>
    </div>
    <div className="carousel-item active d-flex gaming-carousel-inner">
      <div className="container d-md-flex justify-content-center">
      <img src={Gamepad} className="d-block gaming-carousel-inner-img" alt="..."/>
      <div className='text-white my-auto gaming-carousel-inner-text'>
        <p className='gaming-carousel-inner-text-color'>GAMING - AUGUST 11, 2022</p>
        <h4 className='gaming-carousel-inner-text-color'>Dolor ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</h4>
        <p className='gaming-carousel-inner-text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='gaming-carousel-inner-button btn btn-outline-secondary rounded-0 fw-bold'>READ MORE</button>
        <div className='d-flex justify-content-center justify-content-md-start d-block d-md-none'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                      </div>

      </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev  d-none d-md-block" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next  d-none d-md-block" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default GamingInfo