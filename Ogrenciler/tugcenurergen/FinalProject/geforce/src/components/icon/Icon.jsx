import React from "react";


function Icon(props) {
  return (
    
    <img
      src={props.src}
      style={props.styled}
      alt={props.alt}
    />
  );
}

export default Icon;
