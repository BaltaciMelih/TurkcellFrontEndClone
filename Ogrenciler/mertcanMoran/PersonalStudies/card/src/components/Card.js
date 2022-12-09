import React from "react";
import Card from "react-bootstrap/Card";

const CardComp = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.cardTime}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardComp;
