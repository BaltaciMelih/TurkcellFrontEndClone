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
      <button onClick={() => props.dispatch({ type: "EKLE" })}>Artır</button>
      <button onClick={() => props.dispatch({ type: "CIKAR" })}>Azalt</button>
    </div>
  );
};

export default connect(mapState, null)(Muz);
