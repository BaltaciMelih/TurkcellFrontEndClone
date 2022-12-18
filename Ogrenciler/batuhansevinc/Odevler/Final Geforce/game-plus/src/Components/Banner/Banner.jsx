import React from 'react'
import banner from "../../Images/hero-banner.png";
import icon1 from "../../Images/banner-icon1.png";
import icon2 from "../../Images/banner-icon2.png";
import icon3 from "../../Images/banner-icon3.png";
import icon4 from "../../Images/banner-icon4.png";
import Button from "../Register/Register"
import "./banner.scss"
function Banner() {
  return (
    <div className='bg-danger'>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={banner} className="d-block w-100 banner-carousel" alt="banner1"/>
      <div className='container bg-dark'>
      <div className="carousel-caption h-100 text-start d-none d-md-block">
      <div className='col-7 h-100 d-flex flex-column justify-content-center text-start'>
         <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
         <div className="row">
            <p className='col-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
            <div className="col-12">
            <a href="/register"><Button text='Register' type='secondary'/></a> 
            <div className='d-flex'>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white d-block d-sm-none px-20 bg-black'>
        <h4 className='fw-bold pt-26'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</p>
        <a href="/register"><button className='res-btn text-white bg-secondary'>REGISTER</button></a> 
                    <div className='d-flex'>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
            <img src={banner} className="d-block w-100 banner-carousel" alt="banner2" />
            <div className='container bg-dark'>
              <div className="carousel-caption h-100 text-start d-none d-md-block">
                <div className='col-7 h-100 d-flex flex-column justify-content-center'>
                  <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                  <div className="row">
                    <p className='col-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                    <div className="col-12">
                    <a href="/register"><Button text='Register' type='secondary'/></a>
                      <div className='d-flex'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-active rounded-circle bg-secondary mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white d-block d-sm-none px-20 bg-black'>
        <h4 className='fw-bold pt-26'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</p>
        <a href="/register"><button className='res-btn text-white bg-secondary'>REGISTER</button></a>
        <div className='d-flex'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-active rounded-circle bg-secondary mx-14'></div>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                      </div>
      </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100 banner-carousel" alt="banner3" />
            <div className='container bg-dark'>
              <div className="carousel-caption h-100 text-start d-none d-md-block">
                <div className='col-7 h-100 d-flex flex-column justify-content-center'>
                  <h1 className='mb-3'>Gameplus ile ayrıcalıklı Geforce Now Deneyimine Hoşgeldin!</h1>
                  <div className="row">
                    <p className='col-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quo non voluptas recusandae natus.</p>
                    <div className="col-12">
                    <a href="/register"><button className='res-btn text-white bg-secondary'>REGISTER</button></a>
                      <div className='d-flex'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white d-block d-sm-none px-20 bg-black'>
        <h4 className='fw-bold pt-26'>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</p>
        <button className='res-btn text-white bg-secondary'>REGISTER</button>
        <div className='d-flex'>
                        <div className='carousel-none-active rounded-circle bg-grey'></div>
                        <div className='carousel-none-active rounded-circle bg-grey mx-14'></div>
                        <div className='carousel-active rounded-circle bg-secondary'></div>
                      </div>
      </div>
            </div>
          </div>
  </div>
  <button class="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
      <div className='container-features d-flex justify-content-center d-none d-md-block'>
        <div className='features'>
          <div className='text-white d-flex justify-content-between p-77'>
            <div>
            <h3 className='fw-bold'>Features</h3>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
            </div>
            <div>
            <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon1} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='d-flex text-white justify-content-center'>
          <img src={icon2} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        </div>
        <div>
        <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon3} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='d-flex text-white justify-content-center'>
          <img src={icon4} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        </div>
          </div>
        </div>
        </div>


      <div className='d-block d-sm-none'>
        <div className='bg-grey'>
        <h5 className='text-center text-white pt-30'>Features</h5>
        <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon1} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon2} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon3} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='d-flex text-white justify-content-center pb-30'>
          <img src={icon4} alt="" className='banner-img'/>
          <p className='my-auto'>Lorem ipsum dolor sit amet</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner