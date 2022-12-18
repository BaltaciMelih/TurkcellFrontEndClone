import * as actionTypes from "./actions/actionTypes";

let initialState = {
  games: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GAMES:
      return { games: action.payload };
    case actionTypes.FILTER_GAMES:
      return { games: action.payload };
    case actionTypes.FILTER_CATEGORY:
      return { games: action.payload };
    default:
      return state;
  }
};
