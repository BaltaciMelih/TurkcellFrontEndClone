import * as actionTypes from "./actionTypes";

export function getGames() {
  return async function (dispatch) {
    let url = "http://localhost:3000/data";
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(addGames(data)));
  };
}

export const addGames = (data) => ({
  type: actionTypes.ADD_GAMES,
  payload: data,
});

export const filterGames = (filteredData) => ({
  type: actionTypes.FILTER_GAMES,
  payload: filteredData,
});

export const filterCategory = (category) => ({
  type: actionTypes.FILTER_CATEGORY,
  payload: category,
});
