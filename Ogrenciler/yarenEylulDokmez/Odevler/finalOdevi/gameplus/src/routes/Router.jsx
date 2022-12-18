import React from "react";
import { useRoutes } from "react-router-dom";
import Main from "../pages/Main/main";
import Register from "../pages/Register/login";
import Games from "../pages/Games/games";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/games",
      element: <Games />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return routes;
};

export default Router;
