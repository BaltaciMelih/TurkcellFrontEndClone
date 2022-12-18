import React from 'react';
import line from '../../Images/line.png';
import stroke from '../../Images/stroke.png';
import strokeMute from '../../Images/stroke-mute.png';
import stroke2 from '../../Images/stroke2.png';
import './subscribe.scss';

function SubscribeSection() {
  return (
    <div className='bg-dark subs'>
    <div className='container p-0'>
        <h2 className='fw-bold d-flex text-center m-0 text-white justify-content-center'>Lorem ipsum dolor sit amet consectetur</h2>
        <div className="row m-0">
        <div className='p-0 d-md-flex justify-content-md-center'>
    <div className='sub-cards text-white mr-20 mb-230'>
       <h3 className='card-title text-center fw-bold'>BASIC</h3>
        <div className='bg-info'>
        <h3 className='card-title-seconder text-center'>Free</h3>
        <img src={line} alt="" className='sub-cards-line pb-30 d-flex mx-auto'/>
        <div className='sub-cards-info'>
        <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            <div className='d-flex align-items-center pb-30 '>
            <img src={strokeMute} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0 text-mute-color'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            </div>
            <button className='sub-cards-button bg-secondary text-white fw-bold'>JOIN NOW</button>
            </div>
        </div>
        <div className='sub-cards text-white mr-20 mb-230'>
       <h3 className='card-title-standard m-0 text-center fw-bold'>STANDARD</h3>
        <div className='bg-info sub-cards-info-standard'>
        <h3 className='card-title-seconder text-center'>15$/month</h3>
        <img src={line} alt="" className='sub-cards-line pb-30 d-flex mx-auto'/>
        <div className='sub-cards-info'>
        <div className='d-flex align-items-center pb-30'>
            <img src={stroke2} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke2} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            <div className='d-flex align-items-center pb-30 '>
            <img src={stroke2} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke2} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            </div>
            <button className='sub-cards-button bg-secondary text-white fw-bold'>JOIN NOW</button>
            </div>
        </div>
        <div className='sub-cards text-white mr-20'>
       <h3 className='card-title text-center fw-bold'>PREMIUM</h3>
        <div className='bg-info'>
        <h3 className='card-title-seconder text-center'>30$/month</h3>
        <img src={line} alt="" className='sub-cards-line pb-30 d-flex mx-auto'/>
        <div className='sub-cards-info'>
        <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt=""  className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            <div className='d-flex align-items-center pb-30 '>
            <img src={strokeMute} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0 text-mute-color'>Standart Access</p>
            </div>
            <div className='d-flex align-items-center pb-30'>
            <img src={stroke} alt="" className='sub-cards-info-img'/>
            <p className='sub-cards-info-text m-0'>1-hr session length</p>
            </div>
            </div>
            <button className='sub-cards-button bg-secondary text-white fw-bold'>JOIN NOW</button>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SubscribeSection