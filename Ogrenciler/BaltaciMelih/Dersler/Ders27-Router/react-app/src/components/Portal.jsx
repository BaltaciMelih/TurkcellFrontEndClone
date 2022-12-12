import React from "react";
import ReactDOM from "react-dom";

const Portal = (target, text) => {
  return ReactDOM.createPortal(
    <div>Merhaba benim adım Portal, bulunduğum konum {text} </div>,
    target
  );
};

export default Portal;
