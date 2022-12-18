import React from "react";
import { Row, Col } from "react-bootstrap";
import Comp2Card from "../../components/homepageComponents/Comp2Card";
import Comp1 from "../../components/homepageComponents/Comp1";

import androidIcon from "../../assets/icons-android.svg";
import macIcon from "../../assets/icons-mac.svg";
import pcIcon from "../../assets/icons-pc.svg";
function Comp2() {
  return (
    <div>
      <div
        className="position-relative bg-secondary "
        style={{ padding: "6%" }}>
        <Comp1 />
      </div>
      <Row className="w-100 m-auto  bg-secondary">
        <Col className="mt-4 d-flex justify-content-center text-center border-0">
          <h1 style={{ fontSize: "32px" }}>Lorem ipsum dolor sit amet</h1>
        </Col>
      </Row>
      <Row className="w-100 m-auto bg-secondary justify-content-center gap-3 p-4">
        <Comp2Card src={androidIcon} text="Available on Android" />
        <Comp2Card src={macIcon} text="Available on macbook" />
        <Comp2Card src={pcIcon} text="Available on windows" />
      </Row>
    </div>
  );
}

export default Comp2;
