import React from "react";
import { Col, Row } from "react-bootstrap";
import Comp4Card from "./Comp4Card";

function Comp4() {
  return (
    <div>
      <Row className="w-100 m-auto  bg-secondary">
        <Col className="mt-4 d-flex justify-content-center text-center border-0">
          <h1 style={{ fontSize: "32px" }}>Lorem ipsum dolor sit amet</h1>
        </Col>
      </Row>
      <Row className="w-100 m-auto bg-secondary justify-content-center gap-3 p-4">
        <Comp4Card
          title="Free"
          headerStyle={{ fontSize: "28px", backgroundColor: "#191919" }}
        />
        <Comp4Card
          title="15$/month"
          style={{ border: "5px solid #76b900", padding: "0"}}
          headerStyle={{fontSize: "28px", backgroundColor: "#76b900" }}
          text
        />
        <Comp4Card
          title="30$/month"
          headerStyle={{ fontSize: "28px", backgroundColor: "#191919" }}
        />
      </Row>
    </div>
  );
}

export default Comp4;
