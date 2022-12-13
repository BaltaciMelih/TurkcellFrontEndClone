import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import PortalView from "../views/PortalView";
import ParametreView from "../views/ParametreView";
import News from "../views/News";
import Spor from "../views/Spor";
import Ekonomi from "../views/Ekonomi";
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
      element: <News />,
      children: [
        {
          index: true,
          element: <Navigate to="spor" />,
        },
        {
          path: "spor",
          element: <Spor />,
          children: [
            {
              path: ":name",
              element: <Spor />,
            },
          ],
        },
        {
          path: "ekonomi",
          element: <Ekonomi />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;