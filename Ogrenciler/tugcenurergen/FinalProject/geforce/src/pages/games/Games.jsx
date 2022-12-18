import React from "react";
import CategoryList from "../../components/categories/CategoryList";
import GameList from "../../components/games/GameList";

import { Row, Col, Container } from "react-bootstrap";

function Games() {
  return (
    <Container className="pt-5" style={{ width: "90%"}}>
      
      <Row className=" w-100 d-flex flex-row justify-content-between">
        <Col className="col-12 col-md-4 p-2 ">
          <CategoryList />
        </Col>
        <Col className="col-12 col-md-7">
          <GameList />
        </Col>
      </Row>
    </Container>
  );
}

export default Games;
