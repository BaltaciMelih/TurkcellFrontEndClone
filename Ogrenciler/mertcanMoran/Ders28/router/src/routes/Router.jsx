import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import PortalView from "../views/PortalView";
import ParameterView from "../views/ParameterView";
import NewsView from "../views/NewsView";
import SportsNewsView from "../views/SportsNewsView";
import EconomyNewsView from "../views/EconomyNewsView";
import userRouter from "./userRouter";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    userRouter,
    {
      path: "/portal",
      element: <PortalView />,
    },
    {
      path: "/parametre/:id",
      element: <ParameterView />,
    },
    {
      path: "/haberler/",
      element: <NewsView />,
      children: [
        {
          index: true,
          element: <Navigate to="spor" />,
        },
        {
          path: "spor",
          element: <SportsNewsView />,
          children: [
            {
              path: ":name",
              element: <SportsNewsView />,
            },
          ],
        },
        {
          path: "ekonomi",
          element: <EconomyNewsView />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
