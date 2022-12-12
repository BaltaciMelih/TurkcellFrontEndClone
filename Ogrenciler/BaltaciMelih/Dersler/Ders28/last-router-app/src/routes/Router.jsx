import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    userRouter,
    {
      path: "/portal"
      element <PortalView/>
    },
  ]);
  return routes;
};

export default Router;
