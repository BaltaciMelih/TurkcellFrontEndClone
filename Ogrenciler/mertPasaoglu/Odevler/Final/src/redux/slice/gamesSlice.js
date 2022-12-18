/* import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    games: [],
}

const gamesSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    STORE_GAMES(state, action) {
        state.games = action.payload.games;
    }
  }
});

export const {STORE_GAMES} = gamesSlice.actions

export const selectGames = (state) => state.game.games;

export default gamesSlice.reducer */