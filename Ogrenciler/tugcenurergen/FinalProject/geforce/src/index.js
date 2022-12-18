import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./override.scss";
import {Provider} from "react-redux"
import configureStore from "./redux/reducers/configureStore";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
