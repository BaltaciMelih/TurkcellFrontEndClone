import React from "react";
import "./Comp.css";
import { Col } from "react-bootstrap";


function Comp3Card(props) {

  return (
    <Col className="col-6 col-md-2 m-0 p-2 ">
      <img className="w-100 h-100 p-0" src={props.src} alt={props.alt} />
    </Col>
  );
}

export default Comp3Card;
