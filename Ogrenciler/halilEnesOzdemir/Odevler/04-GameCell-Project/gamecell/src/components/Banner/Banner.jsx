import React from 'react';
import './Banner.scss';
import bannerDesktop from '../../assets/banner-desktop.png';
import bannerMobile from '../../assets/banner-mobile.png';

function Banner() {
  return (
    <>
      <picture className='carousel-img' alt=''>
        <source media='(max-width: 576px )' srcSet={bannerMobile} />
        <img src={bannerDesktop} alt='' className='w-100 img-fluid' />
      </picture>
    </>
  );
}
export default Banner;
