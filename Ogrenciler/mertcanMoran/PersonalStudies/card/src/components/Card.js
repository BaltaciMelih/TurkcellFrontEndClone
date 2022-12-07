import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const CardComp = (props) => {
  return (
    <CardGroup>
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
    </CardGroup>
  );
};

export default CardComp;
