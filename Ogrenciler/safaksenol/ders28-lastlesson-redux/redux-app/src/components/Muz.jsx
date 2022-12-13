import React from "react";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    muz: state.muz,
  };
};

const Muz = (props) => {
  return (
    <div>
      <div>{props.muz}</div>
      <hr />
      <button onClick={() => props.dispatch({ type: "EKLEME" })}>ARTTIR</button>
      <button onClick={() => props.dispatch({ type: "CIKARMA" })}>AZALT</button>
    </div>
  );
};

export default connect(mapState, null)(Muz);
