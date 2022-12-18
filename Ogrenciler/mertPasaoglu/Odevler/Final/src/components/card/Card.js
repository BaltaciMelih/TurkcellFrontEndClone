import React from "react";
import "./Card.scss";
import Card from "react-bootstrap/Card";
import Button from "../button/Button";
import stroke from "../../assets/stroke.svg";

const Cards = (props) => {
  const { header, price } = props;
  return (
    <Card className="bg-black card border-0 my-3">
      <Card.Text className="card-header">{header}</Card.Text>
      <Card.Body className="card-body">
        <div className="price-border">
          <Card.Title className="price">{price}</Card.Title>
          <hr width="250px" />
        </div>
        <Card.Text>
          <ul className="gap-5 my-5 card-content">
            <li>
              <img src={stroke} alt="" className="stroke" /> Standart Access
            </li>
            <li>
              <img src={stroke} alt="" className="stroke" /> 1-hr session length
            </li>
            <li>
              <img src={stroke} alt="" className="stroke" /> Standart Access
            </li>
            <li>
              <img src={stroke} alt="" className="stroke" /> 1-hr session lenght
            </li>
          </ul>
          <div className="button-content">
            <Button type="join" text="JOIN NOW" />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
