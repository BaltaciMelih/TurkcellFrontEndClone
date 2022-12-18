import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import HeroBanner from '../../image/hero-banner@2x.png'
import winicon from '../../image/icons-pc.png'
import macicon from '../../image/icons-mac.png'
import andicon from '../../image/icons-android.png'
import './homestyle.scss'
import img1 from '../../image/movie-list/1.png'
import img2 from '../../image/movie-list/2.png'
import img3 from '../../image/movie-list/3.png'
import img4 from '../../image/movie-list/4.png'
import img5 from '../../image/movie-list/5.png'
import img6 from '../../image/movie-list/6.png'
import img7 from '../../image/movie-list/7.png'
import img8 from '../../image/movie-list/8.png'
import img9 from '../../image/movie-list/9.png'
import img10 from '../../image/movie-list/10.png'
import stroke from '../../image/stroke.png'
import herorecommer from '../../image/hero-banner-reomended.png'
import modulesbanner from '../../image/modules-banner-5-logo.png'
import modulebannermobile from '../../image/modules-mobile-banner-2-logos.png'


class home extends React.Component {
  render()
  {
    // let imgGallery=[
    //   {src:'../../image/movie-list/1.png', title:'img1'},
    //   {src:'../../image/movie-list/1.png', title:'img1'},
    //   {src:'../../image/movie-list/2.png', title:'img2'},
    //   {src:'../../image/movie-list/3.png', title:'img3'},
    //   {src:'../../image/movie-list/4.png', title:'img4'},
    //   {src:'../../image/movie-list/5.png', title:'img5'},
    //   {src:'../../image/movie-list/6.png', title:'img6'},
    //   {src:'../../image/movie-list/7.png', title:'img7'},
    //   {src:'../../image/movie-list/8.png', title:'img8'},
    //   {src:'../../image/movie-list/9.png', title:'img9'},
    //   {src:'../../image/movie-list/10.png', title:'img10'},
    // ];
  
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={HeroBanner} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={HeroBanner} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={HeroBanner} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {HeroBanner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroBanner}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroBanner}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel> */}
   <div className='bg-dark con-1'>
   
   </div>
   <div className='bg-dark con-2'>
    <div className='d-flex flex-row justify-content-center'>
      <h3>On all your screens at home and on the go</h3>
    </div>
    <div className='d-flex flex-row justify-content-center'>
      <div className='Rectangle d-flex flex-row'>
        <img src={winicon} alt="windows-icon" />
        <p>Available on Windows</p>
      </div>
      <div className='Rectangle d-flex flex-row'>
        <img src={macicon} alt="mac-icon" />
        <p>Available on Mac</p>
      </div>
      <div className='Rectangle d-flex flex-row'>
        <img src={andicon} alt="android-icon" />
        <p>Available on Adroid</p>
      </div>
    </div>
   </div>
   <div className='movielist bg-black'>
   <div className=''>
      <h2>Choose the game you want to play</h2>
    </div>
    <section className='slider-wrapper bg-black'>
      <div className='slider-track'>
    <div className="slide">
      <img src={img1} alt="" />
    </div>
    <div className="slide">
      <img src={img2} alt="" />
    </div>
    <div className="slide">
      <img src={img3} alt="" />
    </div>
    <div className="slide">
      <img src={img4} alt="" />
    </div>
    <div className="slide">
      <img src={img5} alt="" />
    </div>
    <div className="slide">
      <img src={img6} alt="" />
    </div>
    <div className="slide">
      <img src={img7} alt="" />
    </div>
    <div className="slide">
      <img src={img8} alt="" />
    </div>
    <div className="slide">
      <img src={img9} alt="" />
    </div>
    <div className="slide">
      <img src={img10} alt="" />
    </div>
      </div>
      <div className='slider-track-second'>
    <div className="slide">
      <img src={img1} alt="" />
    </div>
    <div className="slide">
      <img src={img2} alt="" />
    </div>
    <div className="slide">
      <img src={img3} alt="" />
    </div>
    <div className="slide">
      <img src={img4} alt="" />
    </div>
    <div className="slide">
      <img src={img5} alt="" />
    </div>
    <div className="slide">
      <img src={img6} alt="" />
    </div>
    <div className="slide">
      <img src={img7} alt="" />
    </div>
    <div className="slide">
      <img src={img8} alt="" />
    </div>
    <div className="slide">
      <img src={img9} alt="" />
    </div>
    <div className="slide">
      <img src={img10} alt="" />
    </div>
      </div>
      <div className='slider-track-third'>
    <div className="slide">
      <img src={img1} alt="" />
    </div>
    <div className="slide">
      <img src={img2} alt="" />
    </div>
    <div className="slide">
      <img src={img3} alt="" />
    </div>
    <div className="slide">
      <img src={img4} alt="" />
    </div>
    <div className="slide">
      <img src={img5} alt="" />
    </div>
    <div className="slide">
      <img src={img6} alt="" />
    </div>
    <div className="slide">
      <img src={img7} alt="" />
    </div>
    <div className="slide">
      <img src={img8} alt="" />
    </div>
    <div className="slide">
      <img src={img9} alt="" />
    </div>
    <div className="slide">
      <img src={img10} alt="" />
    </div>
      </div>
    </section>
    <div className=''>
        <button className='btn btn-info'>SEE ALL GAMES</button>
        </div>
    {/* <div className='d-flex flex-row justify-content-center'>{
      imgGallery.map((index) =><img src={index.src} title={index.title} />)
  }
      </div> */}

   </div>
   <div className="packages">
    <div className="row"><h2>Lorem ipsum dolor sit amet consectetur.</h2></div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
<div className="cardtitle">
  <h1>BASIC</h1>
</div>
<div className="card-body">
  <div className="card-body-title">
    Free
  </div>
  <div className="card-body-list">
    <ul>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><button className='btn btn-info'></button></li>
    </ul>
  </div>
</div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
<div className="cardtitle">
  <h1>BASIC</h1>
</div>
<div className="card-body">
  <div className="card-body-title">
    Free
  </div>
  <div className="card-body-list">
    <ul>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><button className='btn btn-info'></button></li>
    </ul>
  </div>
</div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
<div className="cardtitle">
  <h1>BASIC</h1>
</div>
<div className="card-body">
  <div className="card-body-title">
    Free
  </div>
  <div className="card-body-list">
    <ul>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><img src={stroke} alt="" /><h5>Standart Accound</h5></li>
      <li><button className='btn btn-info'></button></li>
    </ul>
  </div>
</div>
          </div>
          </div>
    </div>
   </div>
   <div className="rectangle-carousel">
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <div className='row'>
        <div className="col">
          <img src={herorecommer} alt="" />
        </div>
        <div className="col">
          <p>GAMING</p>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad dolore molestiae.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque explicabo praesentium nam voluptate eaque voluptas minima in, fugiat sunt necessitatibus expedita nulla voluptates optio quas iusto exercitationem. Nobis, nulla!</p>
         <button>READ MORE</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className='row'>
        <div className="col">
          <img src={herorecommer} alt="" />
        </div>
        <div className="col">
          <p>GAMING</p>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad dolore molestiae.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque explicabo praesentium nam voluptate eaque voluptas minima in, fugiat sunt necessitatibus expedita nulla voluptates optio quas iusto exercitationem. Nobis, nulla!</p>
         <button>READ MORE</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className='row'>
        <div className="col">
          <img src={herorecommer} alt="" />
        </div>
        <div className="col">
          <p>GAMING</p>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad dolore molestiae.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque explicabo praesentium nam voluptate eaque voluptas minima in, fugiat sunt necessitatibus expedita nulla voluptates optio quas iusto exercitationem. Nobis, nulla!</p>
         <button>READ MORE</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
   <div className="modules-banner">
    <img src={modulesbanner} alt="" />
   </div>
   </>
  )
}
}

export default home