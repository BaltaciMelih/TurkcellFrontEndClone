import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./../features/games/GamesSlice/gamesSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});
