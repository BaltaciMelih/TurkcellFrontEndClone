import React from 'react';
import {Button} from "react-bootstrap";
import "./GreenButton.css";

function GreenButton(props){
    return (
      <Button
        href={props.href}
        style={props.style}
        className="green-button"
        type={props.type}>
        {props.value}
      </Button>
    );
}

export default GreenButton;