import React from "react";
import { Outlet, useParams } from "react-router-dom";

const SportsNewView = () => {
  const { name } = useParams();

  return (
    <div>
      Spor
      <Outlet />
      {name}
    </div>
  );
};

export default SportsNewView;
