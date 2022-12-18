import React from 'react';
import './Pricing.scss';

function Pricing({ pricingMock }) {
  return (
    <>
      <div className='container-fluid py-3 bg-black'>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center '>
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
      <div className={`col ${data.className}`}>
        <div className=' mb-4 shadow-sm py-2   '>
          <div className='pricing-header  '>
            <h2 className={`py-3 text-white fw-light fs-2 m-0 ${data.title === 'STANDARD' ? 'bg-success' : ''}`}>
              {data.title}
            </h2>
          </div>
          <div className='pricing-body py-lg-5 '>
            <h3 className='text-white fw-light py-2   d-flex justify-content-center align-items-center'>
              {data.status}
            </h3>
            <hr className='text-white hr mx-auto' />
            <div className='d-flex flex-column align-items-start align-items-sm-center px-4 pb-5 gap-2 py-lg-2    '>
              <div className='mb-2 d-flex gap-2 '>
                <img src={data.src} alt='' />
                <p className='text-white  m-0  pricing-features'>{data.opt1}</p>
              </div>
              <div className='mb-2 d-flex gap-2  '>
                <img src={data.src} alt='' />
                <p className='text-white  m-0  pricing-features'>{data.opt2}</p>
              </div>
              <div className='mb-2 d-flex gap-3'>
                <img src={data.src} alt='' />
                <p className='text-white m-0  pricing-features'>{data.opt1}</p>
              </div>
              <div className='mb-2 d-flex gap-3 '>
                <img src={data.src} alt='' />
                <p className='text-white m-0  pricing-features'>{data.opt2}</p>
              </div>
              <p className='m-0 d-block mx-auto'>{data.button}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
