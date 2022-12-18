import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import gameListReducer from "./gameListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  gameListReducer,
});

export default rootReducer;
