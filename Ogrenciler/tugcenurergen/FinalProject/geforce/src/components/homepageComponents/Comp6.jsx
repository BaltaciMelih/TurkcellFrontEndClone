import React from "react";
import logo1 from "../../assets/logolar-02.png";
import logo2 from "../../assets/logolar-03.png";
import Comp6Card from "./Comp6Card";
import "./Comp.css";
import { Row, Col } from "react-bootstrap";

function Comp6() {
  return (
    <Row className="bg-motif-div d-flex flex-column justify-content-end align-items-center pb-5 h-100 w-100 m-auto">
      <Col className="comp6-text col-10 d-flex justify-content-center align-items-center text-center mt-3 pt-2 pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Col>
      <Col className="comp6Card-div col-12 d-flex flex-row justify-content-center">
        <Comp6Card
          class="d-none d-lg-flex hexagon text-light d-flex text-center justify-content-center align-items-center"
          src={logo1}
          text="logo1"
        />
        <Comp6Card
          class="d-none d-lg-flex hexagon text-light d-flex text-center justify-content-center align-items-center"
          src={logo2}
          text="logo1"
        />
        <Comp6Card
          class="hexagon text-light d-flex text-center justify-content-center align-items-center"
          src={logo1}
          text="logo1"
        />
        <Comp6Card
          class="d-none d-lg-flex hexagon text-light d-flex text-center justify-content-center align-items-center"
          src={logo2}
          text="logo1"
        />
        <Comp6Card
          class="hexagon text-light d-flex text-center justify-content-center align-items-center"
          src={logo1}
          text="logo1"
        />
      </Col>
    </Row>
  );
}

export default Comp6;
