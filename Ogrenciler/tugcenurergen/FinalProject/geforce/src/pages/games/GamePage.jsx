import React from "react";
import Games from "./Games";
import GameSearch from "../../components/gameSearch/GameSearch";
import { Row, Col } from "react-bootstrap";

function GamePage() {
  return (
    <div>
      <Row>
        <Col>
          <GameSearch />
        </Col>
      </Row>
      <Games />
    </div>
  );
}

export default GamePage;
