import React from "react";
import { Outlet } from "react-router-dom";

const NewsView = () => {
  return (
    <div>
      Haberler
      <Outlet />
    </div>
  );
};

export default NewsView;
