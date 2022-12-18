import React, {useState} from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";

const DefaultButton = ({ buttonIsim }) => {
    const myButton = styled.button`
    color: #fff;
    font-size: 16px;
    font-family: GreycliffCF;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.57px;
    text-align: center;
    padding: 0 0.5px;
    border: none;
  `;
    const Button = styled(myButton)`
    color: #fff;
    background-color: #76b900;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
    width: ${(props) => (props.width ? `${props.width}px`: "185px")};
    height: ${(props) => (props.height ? `${props.height}px`: "40px")};
  `;
  
   
    return (

    <Button> {buttonIsim} </Button>
  )
}

DefaultButton.propTypes = {
  buttonIsim : PropTypes.string.isRequired,
};

DefaultButton.defaultProps = {
  buttonIsim : "My Button",
};

export default DefaultButton;