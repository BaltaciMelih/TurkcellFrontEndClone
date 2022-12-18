import React from "react";
import { Row, Col } from "react-bootstrap";
import polygon from "../../assets/polygon.svg";

function GameCard(props) {
  return (
    <div className="bg-primary m-auto">
      <Row className="w-100">
        <Col className="p-4 ps-5">        
          <img src={polygon} alt="polygon" />
        </Col>
      </Row>
      {props.gamelist.map((game) => (  //gelen gamelist içerisinde dönerek oyunları ekrana yazdırır
        <Row key={Math.random(1000)} className="w-100 m-auto">
          <Col className="col-12 p-1 ps-5 w-100 m-auto text-light">
            {game.title}
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default GameCard;
