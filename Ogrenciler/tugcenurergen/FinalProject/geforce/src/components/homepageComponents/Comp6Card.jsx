import React from "react";
import "./Comp.css";

function Comp6Card(props) {
  return (
    <div className={props.class}>
      <img className="hexagon-img" src={props.src} alt={props.text} />
    </div>
  );
}

export default Comp6Card;
