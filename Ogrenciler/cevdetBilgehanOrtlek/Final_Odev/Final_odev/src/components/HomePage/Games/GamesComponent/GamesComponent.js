import React from "react";
import "./GamesComponent.scss";

function GamesComponent(props) {
  return (
    <div className="col-6 col-lg-2 text-center">
      <img className="games-module-image" src={props.adress} alt="" />
    </div>
  );
}

export default GamesComponent;
