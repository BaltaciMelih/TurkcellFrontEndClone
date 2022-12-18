import comp5 from "../../assets/comp5.png";
import { Carousel, Row, Col } from "react-bootstrap";
import GreenButton from "../../components/greenButton/GreenButton";
import "../homepageComponents/Comp.css";
function Slider() {
  return (
    <Carousel className="w-100">
      <Carousel.Item
        className=" w-100 carousel-item "
        style={{ backgroundColor: "#292929" }}>
        <Row className="comp5Carousel-row m-auto w-100 ">
          <Col className="col-12 col-md-4 bg-primary p-0">
            <img
              style={{ width: "100%", height: "auto" }}
              className="img-cover"
              src={comp5}
              alt="slider img"
            />
          </Col>
          <Col
            className="col-12 col-md-8 pt-5 ps-4 d-flex flex-column gap-3 pb-5"
            style={{ backgroundColor: "#1e1e1e" }}>
            <h6>GAMING-AUGUST 11,22</h6>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
              ipsam soluta.
            </h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              error odio minima aperiam eligendi quos architecto repellendus
              ipsam suscipit labore! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Temporibus, adipisci.
            </p>
            <GreenButton
              variant="dark"
              href="/"
              value="READ MORE"
              style={{
                border: "1px solid #76b900",
                backgroundColor: "transparent",
                color: "#76b900",
              }}
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
