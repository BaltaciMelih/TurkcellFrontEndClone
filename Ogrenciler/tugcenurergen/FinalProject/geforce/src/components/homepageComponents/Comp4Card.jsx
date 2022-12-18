import React from "react";
import "./Comp.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GreenButton from "../greenButton/GreenButton";
import stroke from "../../assets/stroke.svg";
import  "./Comp.css";

function Comp4Card(props) {
  return (
    <Col
      className="comp4Card col-12 col-md-3 d-flex justify-content-center"
      style={props.style}>
      <Card className="rounded-0 border-0 align-items-center w-100 h-100">
        <Card.Header
          className="comp4Card-header text-center  rounded-0  w-100 h-100 "
          style={props.headerStyle}>
          BASIC
        </Card.Header>
        <Card.Body className="bg-primary w-100 h-100  text-center">
          <Card.Title className="comp4Card-title border-bottom border-warning  text-center">
            {props.title}
          </Card.Title>
          <div className="comp4Card-text">
            <ul className="d-flex flex-column justify-content-start align-items-start">
              <li className="list-unstyled pb-3 pt-3 ">
                <img className="pe-4" src={stroke} alt="stroke" />
                Standart Access
              </li>
              <li className="list-unstyled pb-3 ">
                <img className="pe-4" src={stroke} alt="stroke" />
                1-hr session length
              </li>
              <li className="list-unstyled pb-3 ">
                <img className="pe-4 " src={stroke} alt="stroke" />
                Standart Access
              </li>
              <li className="list-unstyled pb-3">
                <img className="pe-4" src={stroke} alt="stroke" />
                1-hr sessiom length
              </li>
            </ul>
          </div>
          <GreenButton
            variant="dark"
            href="/register"
            value="REGISTER"
            style={{ width: "90%"}}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Comp4Card;
