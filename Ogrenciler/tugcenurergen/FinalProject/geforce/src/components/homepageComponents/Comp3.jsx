import React from "react";
import { Row, Col } from "react-bootstrap";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.png";
import game3 from "../../assets/game3.png";
import game4 from "../../assets/game4.png";
import game5 from "../../assets/game5.png";
import game6 from "../../assets/game6.png";
import game7 from "../../assets/game7.png";
import game8 from "../../assets/game8.png";
import game9 from "../../assets/game9.png";
import game10 from "../../assets/game10.png";
import game11 from "../../assets/game11.png";
import game12 from "../../assets/game12.png";
import Comp3Card from "./Comp3Card";
import GreenButton from "../../components/greenButton/GreenButton";

function Comp3() {
  const images = [
    { id: 1, src: game1 },
    { id: 2, src: game2},
    { id: 3, src: game3},
    { id: 4, src: game4},
    { id: 5, src: game5},
    { id: 6, src: game6},
    { id: 7, src: game7},
    { id: 8, src: game8 },
    { id: 9, src: game9 },
    { id: 10, src: game10 },
    { id: 11, src: game11 },
    { id: 12, src: game12 },
  ];

  return (
    <div>
      <Row className="w-100 m-auto text-center mt-3 mb-3">
        <Col className="comp3-title p-4">Choose the game you want to play</Col>
      </Row>
      <Row className="m-auto p-0 " style={{ width: "90%", height: "auto" }}>
        {images.map((image) => (
          <Comp3Card key={image.id} src={image.src} text={image.src} />
        ))}
        
      </Row>
      <Row className="w-100 m-auto">
        <Col className="d-flex justify-content-center w-100 p-3 pb-5">
          <GreenButton variant="dark" href="/games" value="SEE ALL GAMES" />
        </Col>
      </Row>
    </div>
  );
}

export default Comp3;
