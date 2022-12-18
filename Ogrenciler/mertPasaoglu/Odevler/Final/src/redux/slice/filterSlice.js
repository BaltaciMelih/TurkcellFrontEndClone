import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredGames: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      console.log(action.payload);
      /*         const {games, search} = action.payload
        const tempGames = games.filter((game) => game.title.toLoverCase().includes(search.toLoverCase()))
        state.filteredGames= tempGames;  */
    },
    SORT_GAMES(state, action) {
      console.log(action.payload);
      const { games, sort } = action.payload;
      let tempGames = [];
      if (sort === "a-z") {
        tempGames = games.slice().sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }
      if (sort === "z-a") {
        tempGames = games.slice().sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }

      state.filteredGames = tempGames;
    },
  },
});

export const { FILTER_BY_SEARCH, SORT_GAMES } = filterSlice.actions;

export const selectFilteredGames = (state) => state.filter.filteredGames;

export default filterSlice.reducer;
