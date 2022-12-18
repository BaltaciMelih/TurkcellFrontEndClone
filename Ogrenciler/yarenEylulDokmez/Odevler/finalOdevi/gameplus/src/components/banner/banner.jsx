import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../components/button';
import logo from '../../pics/banner.png';
import logoK from '../../pics/kucuklogo.png';
import './banner.css'

export default function Banner() {
  return (
    <div className="hero">
      <h2 className="heroH2">Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin</h2>
      <p className="heroP">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vivamus tempar augue vel porta ullamcarper</p>
      <Button margin="30px 506px 30px 0" text="REGİSTER" marginK="0 179.5px 55px 20.5px;" heightK="48px" widthK="120px"></Button>
      {/* <Carousel className="hero">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="heroH2">First slide label</h2>
          <p className="heroP">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button margin="" text="REGİSTER"></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
  )
}
