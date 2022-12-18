import React from 'react';
import styled from "styled-components";

export default function button(props) {
    const Button = styled.button`
    
    padding: 0 0.5px;
    font-family: GreycliffCF-Bold;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.57px;
    text-align: center;
    border:${(props) => (props.border ? `${props.border}` : "0")};
    margin:  ${(props) => (props.margin)};
    color: ${(props) => (props.color ? `${props.color}` : "#fff")};
    background-color: ${(props) => (props.bcolor ? `${props.bcolor}` : "#76b900")};
    height: ${(props) => (props.height ? `${props.height}px` : "40px")};
    width: ${(props) => (props.width ? `${props.width}px` : "185px")};
    @media screen and (max-width: 320px){
      height: ${(props) => (props.heightK)};
      margin:  ${(props) => (props.marginK)};
      width: ${(props) => (props.widthK)};
    }
  `;
  return (
    <div>
        <Button color={props.color} border={props.border} bcolor={props.bcolor} height={props.height} width={props.width} margin={props.margin} heightK={props.heightK} widthK={props.widthK} marginK={props.marginK}>{props.text}</Button>
    </div>
  )
}
