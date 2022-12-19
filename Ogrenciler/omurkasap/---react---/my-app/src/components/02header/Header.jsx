import React from 'react'
import Carausel1 from "../../assets/img/carousel/carousel1.png"
import Button from '../Button/Button'
import Left from '../../assets/img/carousel/left.png'

const Header = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide header-carousel" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carausel1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block h-100 text-start">
       {/* sayfaya göre yazı ayarlanacak */}
        <div className='d-flex flex-column justify-content-center w-50 h-100'>
        <h1 className=''>Gameplus ile ayrıcalıklı GeForce
          Now deneyimine hoşgeldin!
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolor consequuntur?</p>
        <Button text = "REGISTER"/>
        </div>
      </div>
     
    </div>
    <div className="carousel-item">
      <img src={Carausel1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block h-100 text-start">
      <div className='d-flex flex-column justify-content-center w-50 h-100'>
        <h1 className=''>Gameplus ile ayrıcalıklı GeForce
          Now deneyimine hoşgeldin!
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolor consequuntur?</p>
        <Button text = "REGISTER"/>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Carausel1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block h-100 text-start">
      <div className='d-flex flex-column justify-content-center w-50 h-100'>
        <h1 className=''>Gameplus ile ayrıcalıklı GeForce
          Now deneyimine hoşgeldin!
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolor consequuntur?</p>
        <Button text = "REGISTER"/>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev ms-5" aria-hidden="true"><img src={Left} alt="" /></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
 
    
  )
}

export default Header










// import logo from "../assets/img/logo-placeholder_2022-12-08"
// function Header(){
//     return (
//     <div className="header">
//         <div className="header-content">
//             <a href="/" className="header-logo"></a>
//             <div className="header-nav">
//                 <div className="header__nav__scroll-area">
//                     <a href="/games"></a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Header;