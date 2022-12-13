import React from "react";
import { Outlet } from "react-router-dom";

const NewView = () => {
  return (
    <div>
      HABERLER
      <Outlet />
    </div>
  );
};

export default NewView;
