import React from "react";
import {Row, Col} from "react-bootstrap";
import Icon from "../icon/Icon";
import homeicon1 from  "../../assets/home-icon1.svg"
import homeicon2 from  "../../assets/home-icon2.svg"
import homeicon3 from  "../../assets/home-icon3.svg"
import homeicon4 from  "../../assets/home-icon4.svg"
import "./Comp.css";
function Comp1() {
  return (
    <Row
      className="comp1-row bg-secondary h-auto"
      style={{ height: "200px", zIndex: "2" }}>
      <Col className="col-12 col-md-4 comp1-col1 d-flex flex-column justify-content-center gap-3 ">
        <h3 style={{ fontFamily: "Greycliff-Bold", fontSize: "28px" }}>
          FEATURES
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Col>
      <Col className="col-12 col-md-4 h-75 comp1-col1 d-flex flex-column mt-4 p-0 ">
        <Row className="d-flex h-100 w-100 m-auto pt-2 flex-column gap-4 ">
          <Col className="pt-2 ">
            <Icon
              src={homeicon1}
              styled={{ height: "40px", width: "40px", marginRight: "10px" }}
              alt={"svg1"}
            />
            Lorem, ipsum dolor. Lorem, ipsum 
          </Col>
          <Col className="pt-2 ">
            <Icon
              src={homeicon2}
              styled={{ height: "40px", width: "40px", marginRight: "10px" }}
              alt={"svg1"}
            />
            Lorem, ipsum dolor. Lorem, ipsum 
          </Col>
        </Row>
      </Col>
      <Col className="col-12 col-md-4 h-75 comp1-col1 d-flex flex-column mt-4  p-0">
        <Row className="d-flex h-100 w-100 m-auto  pt-2 flex-column gap-4 ">
          <Col className="pt-2 ">
            <Icon
              src={homeicon3}
              styled={{ height: "40px", width: "40px", marginRight: "10px" }}
              alt={"svg1"}
            />
            Lorem, ipsum dolor. Lorem, ipsum 
          </Col>
          <Col className="pt-2 ">
            <Icon
              src={homeicon4}
              styled={{ height: "40px", width: "40px", marginRight: "10px" }}
              alt={"svg1"}
            />
            Lorem, ipsum dolor. Lorem, ipsum 
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Comp1;
