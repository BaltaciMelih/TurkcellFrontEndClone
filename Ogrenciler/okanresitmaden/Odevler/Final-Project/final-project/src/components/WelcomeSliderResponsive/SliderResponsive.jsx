import React from 'react'
import styled from 'styled-components'
import './sliderresponsive.scss'
const Geforcebutton = styled.button`
  background-color:#76b900;
  width:185px;
  height:40px;
  font-size:16px;
  color:white;
  border:none;
  margin-right:12px;
`
const SliderResponsive = () => {
  return (
    <div className=' responsiveslider'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='row d-flex justify-content-center'>
        <div className='col-12 mx-5 d-flex flex-row'>
          <div className='mx-3 py-2'>
            <h2 className='mb-3 mt-3'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h2>
            <p className='mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam accusantium vel dolorem explicabo velit assumenda illo nisi.</p>
            <Geforcebutton className='mb-5'>REGISTER</Geforcebutton>
          </div>                               
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className='row d-flex justify-content-center'>
          <div className='col-12 mx-5 d-flex flex-row'>
            <div className='mx-3 py-2'>
              <h2 className='mb-3 mt-3'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h2>
              <p className='mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam accusantium vel dolorem explicabo velit assumenda illo nisi.</p>
              <Geforcebutton className='mb-5'>REGISTER</Geforcebutton>
            </div>                               
          </div>
        </div>
    </div>
    <div className="carousel-item">
      <div className='row d-flex justify-content-center'>
          <div className='col-12 mx-5 d-flex flex-row'>
            <div className='mx-3 py-2'>
              <h2 className='mb-3 mt-3'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h2>
              <p className='mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam accusantium vel dolorem explicabo velit assumenda illo nisi.</p>
              <Geforcebutton className='mb-5'>REGISTER</Geforcebutton>
            </div>                               
          </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default SliderResponsive