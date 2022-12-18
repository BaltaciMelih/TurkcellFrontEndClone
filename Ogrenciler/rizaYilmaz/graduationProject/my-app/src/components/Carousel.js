import "../style/bootstrap-override.scss";
import Banner from "../img/hero-banner.png";
import Features from "./Features";
import Button from "./Button";
import sliderDots from "../img/slider-dots.png";
function Carousel() {
  return (
    <div className="carouselTop position-relative">
      
    
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active position-relative" data-bs-interval="10000">
          <img src={Banner} className="d-block w-100" alt="Carousel img 1" />
          <div className="carousel-caption col-5 position-md-absolute top-28 start-10">
            <h5 className="text-eighth fs-1 text-start fw-bold">Game Plus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin !</h5>
            <p className="text-eighth text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pharetra odio. Maecenas sodales auctor.</p>
            <div className="text-start">
            <Button content="Register" /> <br/>
            <img src={sliderDots} alt="Slider Dots"/>
            </div>
            
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <Features />
    </div>
  );
}
export default Carousel;
