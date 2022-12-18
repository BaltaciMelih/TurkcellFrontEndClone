import React from 'react';
import './BottomSlider.scss';

function BottomSlider({ bottomData }) {
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide bg-bottom ' data-bs-ride='true'>
        <div className='carousel-indicators carousel-indicators-2 d-block d-sm-none d-flex gap-2 '>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          {bottomData.map((data, index) => {
            return <BottomSliderData key={index} data={data} />;
          })}
        </div>
        <button
          className='carousel-control-prev carousel-control-prev-2 d-none d-lg-block'
          type='button'
          data-bs-target='#carouselExampleIndicators'
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
          className='carousel-control-next carousel-control-next-2 d-none d-lg-block'
          type='button'
          data-bs-target='#carouselExampleIndicators'
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
    </>
  );
}

function BottomSliderData({ data }) {
  return (
    <div className={`carousel-item ${data.status} `}>
      <div className='container py-4 py-lg-5 px-lg-5'>
        <div className='row d-flex flex-column flex-md-row  '>
          <div className='col col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0  '>
            <img src={data.src} className='img-fluid w-100 px-lg-2 ' alt='' />
          </div>
          <div className='col col-md-8 d-flex flex-column justify-content-center align-items-start px-lg-5 px-4 bg-bottom-slider-content  '>
            <div className='carousel-content d-flex flex-column mb-3 text-white'>
              <p className='fs-6'>{data.date}</p>
              <p className='fs-5'>{data.title}</p>
              <p className='fs-5'>{data.desc}</p>
              {data.button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSlider;
