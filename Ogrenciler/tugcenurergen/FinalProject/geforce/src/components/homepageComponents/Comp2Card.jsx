import React from "react";
import "./Comp.css";
import { Row, Col } from "react-bootstrap";

function Comp2Card(props) {
  return (
    <Col
      className="comp2Card col-12 col-md-3 d-flex justify-content-center"
      style={{ padding: "0" }}>
      <div className="Comp2Card-div d-flex justify-content-center align-items-center w-100 h-100 p-4 ">
        <Row className="justify-content-between w-100 ">
          <Col className="icon-col col-3 d-flex justify-content-center align-items-center ">
            <img src={props.src} alt={props.text} className="h-100" />
          </Col>
          <Col className="col-9 p-0 d-flex justify-content-center align-items-center ">
            {props.text}
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default Comp2Card;
