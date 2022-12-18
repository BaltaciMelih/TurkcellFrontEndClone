import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // remove unused imports
import {
  BrowserRouter, // remove unused imports
  createBrowserRouter,
  Route, // remove unused imports
  RouterProvider,
  Routes, // remove unused imports
} from "react-router-dom";
import Routers from "./routers/Routers";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
