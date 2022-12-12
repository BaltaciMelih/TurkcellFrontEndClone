import { createStore } from "redux";
import { muzReducer } from "./Reducer";

export const store = createStore(muzReducer);
