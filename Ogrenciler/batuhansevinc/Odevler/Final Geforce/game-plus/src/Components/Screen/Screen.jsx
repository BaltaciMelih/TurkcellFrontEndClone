import React from 'react';
import iconMac from '../../Images/icons-mac.png';
import iconPc from '../../Images/icons-pc.png';
import iconAndroid from '../../Images/icons-android.png';
import "./screen.scss";

function Screen() {
    const Images = [
        {
            title:"Available on Windows",
            image:iconPc
        },
        {
            title:"Available on Mac",
            image:iconMac
        },
        {
            title:"Available on Android",
            image:iconAndroid
        }
    ]
  return (
    <div>
    <div className="container">
        <div className='row screen-paragraph'>
            <h2 className='text-white text-center p-0'>On all your screens at home and on the go</h2>
    </div>
    </div>
    <div className="container">
        <div className="row">
            <div className='d-flex justify-content-md-around flex-column flex-md-row'>
            {Images.map((item,index) => {
            return(
                <div key={index} className="cards d-flex justify-content-center align-item-center single-card cards-mb">
                   <div className='div-img d-flex'><img src={item.image} alt="logos" className='screen-img'/></div> 
                   <div className='div-paragraph d-flex align-items-center'> <p className='text-white my-auto'>{item.title}</p></div>
                </div>
                )
            })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Screen