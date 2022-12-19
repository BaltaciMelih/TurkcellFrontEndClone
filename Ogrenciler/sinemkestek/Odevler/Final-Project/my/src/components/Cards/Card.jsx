import React from "react";
import StyledButton from "../Button/StyledButton";
import Stroke from "../../assets/icons/stroke.svg";
import "../Cards/Card.scss";

const Card = () => {
  return (
    <div>
      <div className="card-container ">
        <div className="h2">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="cardWrapper">
          <CardBox title="BASIC" price="Free"></CardBox>
          <CardBox
            title="STANDARD"
            price="15$/month"
            // style={{ border: "5px solid green" }}
          ></CardBox>
          <CardBox title="PREMIUM" price="30$/month"></CardBox>
        </div>
      </div>
    </div>
  );
};

const CardBox = (props) => {
  return (
    <div
      className={`card-box ${
        props.title === "STANDARD"
          ? "border border-4 border-success"
          : "border border-0"
      }`}
    >
      <div className="card-content">
        <div
          className={`card-title ${
            props.title === "STANDARD" ? " #76b900" : ""
          }`}
        >
          <h3>{props.title}</h3>
        </div>
        <div className="card-price">
          <span>{props.price}</span>
        </div>
      </div>
      <div className="card-props">
        <p>
          <img src={Stroke} alt="" /> Standart Acces
        </p>
        <p>
          <img src={Stroke} alt="" />
          1-hr session lenght
        </p>
        <p>
          <img src={Stroke} alt="" />
          Standart Access
        </p>
        <p>
          <img src={Stroke} alt="" />
          1-hr session lenght
        </p>
        <StyledButton width="large">Join Now</StyledButton>
      </div>
    </div>
  );
};

export default Card;
