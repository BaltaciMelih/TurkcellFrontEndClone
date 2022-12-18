import React from 'react';
import './Screens.scss';

function Screens() {
  return (
    <>
      <div className='container-fluid screen-bg text-white text-center '>
        <h1 className='fs-5 py-2 px-4'>On all your screens at home and on the go</h1>
        <div className=' container-sm mx-auto row row-cols-1 row-cols-lg-3 d-flex flex-lg-row flex-wrap flex-lg-nowrap  px-2 py-3 gap-3 gap-lg-3 screens  px-1 px-sm-3 py-lg-5 px-lg-5'>
          <div className='border py-2 py-lg-4  screen-border d-flex justify-content-start justify-content-lg-center align-items-center gap-2  '>
            <img
              className='  d-inline-block screen-icon ms-2 me-3 screen-image-1  '
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B5E506C1-478B-43E7-A192-A8EDCD2222F7.svg'
              alt=''
            />
            <span>Available on Windows</span>
          </div>

          <div className=' border py-2 py-lg-3  screen-border d-flex justify-content-start justify-content-lg-center  align-items-center gap-2  '>
            <img
              className='d-inline-block screen-icon ms-2 me-3 screen-image-2'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B9F2C037-179B-4C7E-B3B1-D7440F430386.svg'
              alt=''
            />
            <span>Available on Mac</span>
          </div>
          <div className=' border py-2 py-lg-3 screen-border d-flex justify-content-start justify-content-lg-center  align-items-center gap-2 '>
            <img
              className='d-inline-block screen-icon ms-2 me-3 screen-image-3  '
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/FF527D5C-B6BD-4D1E-81ED-11062B23BF5B.svg'
              alt=''
            />
            <span>Available on Android</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screens;
