import React from 'react'
import Button from '../Button/Button';
import banner from '../../assets/images/banner.png';
import bannerMobil from '../../assets/images/banner-mobil.png';
import lefticon from '../../assets/icons/lefticon.svg';
import righticon from '../../assets/icons/righticon.svg';

import './Banner.scss';

const Banner = () => {
  return (
    <div className=' bg-dark '>


      <div id="carouselWeb" className="carousel slide web-carousel d-none d-lg-block" data-bs-ride="false">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block  row h-100  ">
              <div className='col-7 h-100 d-flex flex-column justify-content-center text-start  '>
                <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Geforce Now' />
                  </div>

                  <div className="slider mt-3">

                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
            <div className=" carousel-caption d-none d-md-block row h-100 ">
              <div className='col-7 h-100 d-flex flex-column justify-content-center text-start'>
                <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Register' type='secondary' />
                  </div>

                  <div className=" slider mt-3">

                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block row h-100 ">
              <div className='col-7 h-100 d-flex flex-column justify-content-center text-start'>
                <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Games' />
                  </div>

                  <div className="slider mt-3">

                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev lefticon" type="button" data-bs-target="#carouselWeb" data-bs-slide="prev" style={{ height: '50px', width: '50px' }}>

          <img src={lefticon} alt="" style={{ height: '48px' }} />
          
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next righticon" type="button" data-bs-target="#carouselWeb" data-bs-slide="next" style={{ height: '50px', width: '50px' }}>

          <img src={righticon} alt="" style={{ height: '48px' }} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* mobil */}
      <div id="carouselMobil" className="carousel slide mobil-carousel d-block d-lg-none" data-bs-ride="false">

        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={bannerMobil} className="d-block w-100" alt="..." />
            
              <div className='px-3 text-start text-white  '>
                <h1 className='my-4'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Geforce Now' />
                  </div>

                  <div className="slider my-3">

                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
            
          </div>
          <div className="carousel-item">
            <img src={bannerMobil} className="d-block w-100" alt="..." />
            <div className='px-3 text-start text-white  '>
                <h1 className='my-4'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Geforce Now' />
                  </div>

                  <div className="slider my-3">

                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
          </div>
          <div className="carousel-item">
            <img src={bannerMobil} className="d-block w-100" alt="..." />
            <div className='px-3 text-start text-white  '>
                <h1 className='my-4'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                <div className="row">
                  <p className='col-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                  <div className="col-5">
                    <Button text='Geforce Now' />
                  </div>

                  <div className="slider my-3">

                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselMobil" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
                  </div>

                </div>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev lefticon" type="button" data-bs-target="#carouselMobil" data-bs-slide="prev" style={{  width: '25px' }}>

         
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next righticon" type="button" data-bs-target="#carouselMobil" data-bs-slide="next" style={{  width: '25px' }}>

          
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Banner