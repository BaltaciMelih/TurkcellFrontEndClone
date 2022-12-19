import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 145px;
  height: 33px;
  margin-top: 0.3rem;
  border: none;
  // border: 1px #76b900 solid;
  font-size: 16px;
  align-items: center;
  color: ${(props) => (props.bg === "grey" ? "#fff" : "#fff")};
  background-color: ${(props) =>
    props.bg === "grey" ? " #b1b2b2" : "#76b900"};
  width: ${(props) => (props.width === "large" ? "288px" : "min-width")};
  width: ${(props) => (props.width === "xlarge" ? "348px" : "min-width")};
`;
// const cardButton = styled(StyledButton)`
//   width: 321px;
// `;
export default StyledButton;
