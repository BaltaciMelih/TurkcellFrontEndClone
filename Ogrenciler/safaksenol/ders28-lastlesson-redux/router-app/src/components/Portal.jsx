import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Merhaba ben portal komponteyim burasıda hedefim {text}</div>,
    target
  );
};
export default Portal;
