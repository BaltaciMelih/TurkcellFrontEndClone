import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../views/HomePage";
import GamesPage from "../views/GamesPage";
import RegisterPage from "../views/RegisterPage";
import NotFoundPage from "../views/NotFoundPage";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/games",
      element: <GamesPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);
  return routes;
};

export default Router;
