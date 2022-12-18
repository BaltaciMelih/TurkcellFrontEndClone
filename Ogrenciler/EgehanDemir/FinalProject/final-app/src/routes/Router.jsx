import React from 'react';
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from '../view/HomeView'
import RegisterView from '../view/RegisterView'
import GamesView from '../view/GamesView'

const Router = () =>{
    const routes = useRoutes([
        {
            path: "/",
            element: <HomeView />,
        },
        {
            path: "/games",
            element: <GamesView />,
        },
        {
            path: "/register",
            element: <RegisterView />,
        },
    ]);
    return routes;
};

export default Router;