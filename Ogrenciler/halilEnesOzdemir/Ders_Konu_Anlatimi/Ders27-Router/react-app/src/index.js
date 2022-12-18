import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
// import App from "./App";
import About from "./view/About";
import Dashboard from "./view/Dashboard";
import Root from "./view/Root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<Root />}></Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Fragment>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Root />} />
  //     <Route path="dashboard" element={<Dashboard />} />
  //     <Route path="about" element={<About />} />
  //   </Routes>
  // </BrowserRouter>
  <RouterProvider router={router} />
);
