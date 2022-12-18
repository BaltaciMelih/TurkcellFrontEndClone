import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function gameListReducer(state = initialState.games, action) {
  switch (action.type) {
    case actionTypes.GET_GAMES_SUCCESS:
      return action.payload;
    
    default:
      return state;
  }
}
