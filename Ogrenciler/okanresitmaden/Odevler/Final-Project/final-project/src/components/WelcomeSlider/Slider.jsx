import React from 'react'
import Banner from '../../photos/hero-banner.png'
import './slider.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveImg from '../../photos/deneme.png'
import logo from '../../photos/icon-feature-01.png'
import logo1 from '../../photos/group0.png'
import logo2 from '../../photos/group.png'
import logo3 from '../../photos/icon-feature-03.png'
import '../Buttons/buttons.scss'
import { NavLink } from 'react-router-dom';



const Slider = () => {
  return (
    <>
    <div id="carouselforhomepage" className="carousel slide" data-bs-ride="false">
    <div className='featurespc d-none d-md-block'>
        <div className='row d-flex features__border'>
            <div className='col-md-4 col-12 d-flex'>
                <ul>
                    <li><h2>Features</h2></li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, est!</li>
                </ul>
            </div>
            <div className='col-md-4 col-12'>
                <ul>
                    <li className=''>
                        <img src={logo} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                        
                        <li className=''>
                        <img src={logo3} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className='col-md-4 col-12'>
            <ul>
                    <li className=''>
                        <img src={logo1} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                        
                        <li className=''>
                        <img src={logo2} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    </div>
  <div className="carousel-indicators mb-5 d-none d-md-block">

    <button type="button" data-bs-target="#carouselforhomepage" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselforhomepage" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselforhomepage" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className='carousel__pcimg'><img src={Banner} className="d-block w-100" alt="..."/></div>
        <div className='carousel__mobileimg'><img src={ResponsiveImg} className="img-fluid" alt="..."/></div>
        <div className="carousel-caption d-none d-md-block">
        <div className='slider__header'>
                    <h2 className='carousel__header'>Gameplus ile ayrıcalıklı Geforce Now deneyimine hoşgeldin!</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem quaerat illum earum eos magni ad facilis vitae, nisi necessitatibus!</p>
                    <div className='d-flex justify-content-start'>
                    <button className='button1'><NavLink className='text-white nav-link' to='login'>REGISTER</NavLink></button>
                    </div>
                </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className='carousel__pcimg'><img src={Banner} className="d-block w-100" alt="..."/></div>
    <div className='carousel__mobileimg'><img src={ResponsiveImg} className="img-fluid" alt="..."/></div>
        <div className="carousel-caption d-none d-md-block">
        <div className='slider__header'>
                    <h2 className='carousel__header'>Gameplus ile ayrıcalıklı Geforce Now deneyimine hoşgeldin!</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem quaerat illum earum eos magni ad facilis vitae, nisi necessitatibus!</p>
                    <div className='d-flex justify-content-start'>
                    <button className='button1'><NavLink className='text-white nav-link' to='login'>REGISTER</NavLink></button>
                    </div>
                </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className='carousel__pcimg'><img src={Banner} className="d-block w-100" alt="..."/></div>
    <div className='carousel__mobileimg'><img src={ResponsiveImg} className="img-fluid" alt="..."/></div>
        <div className="carousel-caption d-none d-md-block">
        <div className='slider__header'>
                    <h2 className='carousel__header'>Gameplus ile ayrıcalıklı Geforce Now deneyimine hoşgeldin!</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem quaerat illum earum eos magni ad facilis vitae, nisi necessitatibus!</p>
                    <div className='d-flex justify-content-start'>
                    <button className='button1'><NavLink className='text-white nav-link' to='login'>REGISTER</NavLink></button>
                    </div>
                </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselforhomepage" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselforhomepage" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
   );
}

export default Slider