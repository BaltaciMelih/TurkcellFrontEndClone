import React from "react";
import "./ButtonHomePage.scss";
function ButtonHomePage(props) {
  return (
    <>
      <button
        onClick={props.buttonOnClick}
        className={`${props.buttonType} ${props.buttonWitdh}`}
      >
        {props.buttonTitle}
      </button>
    </>
  );
}

export default ButtonHomePage;
