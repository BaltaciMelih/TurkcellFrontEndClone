import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn btn-${props.color} btn-${props.width}`}
    >
      {props.content}
    </button>
  );
};

export default Button;
