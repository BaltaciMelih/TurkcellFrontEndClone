import React from "react";
import "./GamesModuleComponent.scss";

function GamesModuleComponent(props) {
  return (
    <div className="col-6 col-lg-2 text-center">
      <img className="games-module-image" src={props.adress} alt="" />
    </div>
  );
}

export default GamesModuleComponent;
