import React from 'react';
import './Hero.scss';
import heroSrc from '../../assets/hero.png';
import heroMobile from '../../assets/hero-mobile.png';
import Features from '../Features/Features';
import Screens from '../Screens/Screens';

function Hero({ datas }) {
  return (
    <>
      <div id='mainCarousel' className='carousel slide  ' data-bs-ride='true'>
        <div>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#mainCarousel'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button type='button' data-bs-target='#mainCarousel' data-bs-slide-to='1' aria-label='Slide 2'></button>
            <button type='button' data-bs-target='#mainCarousel' data-bs-slide-to='2' aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            {datas.map((data, index) => {
              return <Card key={index} data={data} />;
            })}
          </div>
          <button
            className='carousel-control-prev d-none d-md-block'
            type='button'
            data-bs-target='#mainCarousel'
            data-bs-slide='prev'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg'
                alt=''
              />
            </span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next d-none d-md-block'
            type='button'
            data-bs-target='#mainCarousel'
            data-bs-slide='next'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg'
                alt=''
              />
            </span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <Features />
      <Screens />
    </>
  );
}

export default Hero;

function Card({ data }) {
  return (
    <div className='carousel-item active'>
      <div className='d-flex flex-column '>
        <picture className='carousel-img' alt=''>
          <source media='(max-width: 576px )' srcSet={heroMobile} />
          <img src={heroSrc} alt='' className='img-fluid w-100' />
        </picture>
        <div className='carousel-contents'>
          <div className='carousel-content col-sm-7 col-md-6 col-lg-5 d-flex flex-column justify-content-lg-start gap-2  px-3 py-sm-2 py-5'>
            <h3 className='h3'>{data.title}</h3>
            <p className='h6 fw-lighter lh-sm'>{data.content}</p>
            {data.button}
          </div>
        </div>
      </div>
    </div>
  );
}
