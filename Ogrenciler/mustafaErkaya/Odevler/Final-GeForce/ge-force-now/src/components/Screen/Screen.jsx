import React from 'react'
import iconsMac from '../../assets/icons/icons-mac.svg';
import iconsPc from '../../assets/icons/icons-pc.svg';
import iconsAndroid from '../../assets/icons/icons-android.svg';
import './Screen.scss';

const Screen = () => {

  const screens = [
    {
      img: iconsMac,
      title: 'Available on Windows'
    },
    {
      img: iconsPc,
      title: 'Available on Mac'
    },
    {
      img: iconsAndroid,
      title: 'Available on Android'
    }
  ]
  return (
    <div className=' bg-dark text-white'>
          <h2 className=' text-center pt-5 pb-3 mx-3 mx-md-0'>On all your screens at home and on the go</h2>
          <div className='container'>
            <div className="row ">
                {screens.map((item, index) => {
                return  <div key={index} className="col-md-6 col-lg-4  mx-auto my-3   mb-md-5 px-3 ">
                    <div className="col Rectangle py-4 d-flex justify-content-center align-items-center mx-auto  ">
                      <img src={item.img} alt="" className='me-4 p-2'/>
                      <p>{item.title}</p>
                    </div>
                  </div>
                })}
            </div>
          </div>
    </div>
  )
}

export default Screen