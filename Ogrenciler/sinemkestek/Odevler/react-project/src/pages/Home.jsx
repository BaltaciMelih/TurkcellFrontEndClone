import Carousel from "react-bootstrap/Carousel";

const Home = function CarouselFadeExample() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://media.istockphoto.com/id/1210069866/tr/foto%C4%9Fraf/koyu-arka-plan-%C3%BCzerinde-%C3%BC%C3%A7-modern-bo%C5%9F-plakalar.jpg?s=612x612&w=0&k=20&c=ZyVhTHS1skba8zpnK4orJF7JlZEtK_T_-t9hWAF8rH4="
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
            src="https://media.istockphoto.com/id/520942274/tr/foto%C4%9Fraf/kitchen-utensil-set.jpg?s=612x612&w=0&k=20&c=N7Ta7x6g_0HZz433zoq-pTMAQZrbRXDWuY7JS6ll1LI="
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
            src="https://media.istockphoto.com/id/1438879090/tr/foto%C4%9Fraf/ceramic-atelier.jpg?s=612x612&w=0&k=20&c=bikeQX5VFhR_3hWR0-B2dfChmTwA8doB4dqMqXbwkPs="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="productContainer"></div>

      <div className="serviceContainer"></div>
    </div>
  );
};

export default Home;
