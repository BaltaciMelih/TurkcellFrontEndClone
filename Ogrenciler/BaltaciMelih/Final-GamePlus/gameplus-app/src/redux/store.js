import { applyMiddleware, createStore } from "redux";
import { gamesReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(gamesReducer, applyMiddleware(thunk));
