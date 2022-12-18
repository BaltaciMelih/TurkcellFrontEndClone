import React from "react";
import { Outlet } from "react-router-dom";

const NewView = () => {
  return (
    <div>
      Haberler
      <Outlet />
    </div>
  );
};

export default NewView;
