import React from "react";
import { Outlet } from "react-router-dom";

const News = () => {
  return (
    <div>
      Haberler
      <Outlet />
    </div>
  );
};

export default News;