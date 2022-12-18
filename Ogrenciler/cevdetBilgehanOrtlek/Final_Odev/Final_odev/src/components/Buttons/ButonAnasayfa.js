import React from "react";
import "./ButonAnasayfa.scss";
function ButonAnasayfa(props) {
  return (
    <>
      <button
        onClick={props.buttonOnClick}
        className={`${props.Type} ${props.Witdh}`}
      >
        {props.Title}
      </button>
    </>
  );
}

export default ButonAnasayfa;
