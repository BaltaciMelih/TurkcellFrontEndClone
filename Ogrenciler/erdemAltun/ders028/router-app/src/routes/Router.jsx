import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import PortalView from "../views/PortalView";
import ParametreView from "../views/ParametreView";
import NewView from "../views/NewView";
import SportsNewView from "../views/SportsNewView";
import EconomyNewView from "../views/EconomyNewView";
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
      element: <ParametreView />,
    },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [
        {
          index: true,
          element: <Navigate to="spor" />,
        },
        {
          path: "spor",
          element: <SportsNewView />,
          children: [
            {
              path: ":name",
              element: <SportsNewView />,
            },
          ],
        },
        {
          path: "ekonomi",
          element: <EconomyNewView />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
