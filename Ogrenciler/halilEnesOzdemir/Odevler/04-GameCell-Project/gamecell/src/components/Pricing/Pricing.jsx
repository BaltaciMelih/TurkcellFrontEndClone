import React from 'react';
import './Pricing.scss';

function Pricing({ pricingMock }) {
  return (
    <>
      <div className='container-fluid py-3 px-lg-5 bg-black'>
        <h2 className='text-center mb-lg-5 text-white mb-4 py-3 px-2 lh-base '>
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className='row row-cols-1 row-cols-lg-3 mb-3 text-center px-lg-3 '>
          {pricingMock.map((data, index) => {
            return <PricingCard key={index} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

function PricingCard({ data }) {
  return (
    <div>
      <div className={`mb-4 shadow-lg   ${data.className}`}>
        <div className='pricing-header'>
          <h2 className={`py-3 text-white fw-light fs-2 m-0 ${data.title === 'STANDARD' ? 'standart-text' : ''}`}>
            {data.title}
          </h2>
        </div>
        <div className='pricing-body py-lg-4 '>
          <h3 className='text-white fw-light py-2 d-flex justify-content-center align-items-center'>{data.status}</h3>
          <hr className='text-white hr mx-auto' />
          <div className='d-flex flex-column align-items-center align-items-md-start  px-4 px-md-2 pb-5 gap-2 py-lg-2    '>
            <div className='mb-2 d-flex mx-auto gap-3 '>
              <img src={data.src} alt='' className={` ${data.title === 'STANDARD' ? 'tick-green' : ''}`} />
              <p className='text-white  m-0  pricing-features'>{data.opt1}</p>
            </div>
            <div className='mb-2 d-flex  mx-auto gap-3   '>
              <img src={data.src} alt='' className={` ${data.title === 'STANDARD' ? 'tick-green' : ''}`} />
              <p className='text-white  m-0 pricing-features'>{data.opt2}</p>
            </div>
            <div className='mb-2 d-flex mx-auto gap-3  '>
              <img src={data.src} alt='' className={` ${data.title === 'STANDARD' ? 'tick-green' : ''}`} />
              <p className='text-white m-0  pricing-features'>{data.opt1}</p>
            </div>
            <div className='mb-2 d-flex mx-auto  gap-3  '>
              <img src={data.src} alt='' className={` ${data.title === 'STANDARD' ? 'tick-green' : ''}`} />
              <p className='text-white m-0  pricing-features'>{data.opt2}</p>
            </div>
            <p className='m-0 d-block mx-auto'>{data.button}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
