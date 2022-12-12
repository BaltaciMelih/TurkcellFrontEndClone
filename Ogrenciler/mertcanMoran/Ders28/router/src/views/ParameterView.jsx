import React from "react";
import { useParams } from "react-router-dom";

const ParameterView = () => {
  const { id } = useParams();
  return <div>ParametreView {id}</div>;
};

export default ParameterView;
