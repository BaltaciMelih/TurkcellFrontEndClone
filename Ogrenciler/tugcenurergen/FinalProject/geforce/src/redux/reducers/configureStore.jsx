import { configureStore } from "@reduxjs/toolkit";
import changeCategoryReducer from "./changeCategoryReducer";
import rootReducer from "./index";

const store = configureStore({
  reducer: rootReducer,
  changeCategoryReducer
});

export default store;
