import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className={`card border-${props.cardColor}`}>
      <div className={`card-header bg-${props.cardColor}`}>
        <h3 className="text-center fw-bold">{props.cardHeader}</h3>
      </div>
      <div className="card-body bg-light d-flex flex-column align-items-center">
        <h4 className="card-title text-center">{props.cardPayment}</h4>
        <ul className="d-flex flex-column list-unstyled">
          <li>
            <img className="me-3" src="../assets/stroke.png" alt="" />
            <span>Standart Access</span>
          </li>
          <li>
            <img className="me-3" src="../assets/stroke.png" alt="" />
            <span>1-hr session lenght</span>
          </li>
          <li>
            <img className="me-3" src="../assets/stroke.png" alt="" />
            <span className="text-muted">Standart Access</span>
          </li>
          <li>
            <img className="me-3" src="../assets/stroke.png" alt="" />
            <span>1-hr session lenght</span>
          </li>
        </ul>
        <Button color="primary" width="326" content="JOIN NOW" />
      </div>
    </div>
  );
};

export default Card;
