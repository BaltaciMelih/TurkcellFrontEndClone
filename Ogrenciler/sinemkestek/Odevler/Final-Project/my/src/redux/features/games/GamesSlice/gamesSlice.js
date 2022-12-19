import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  games: [],
};

export const getGames = createAsyncThunk("getGames", async () => {
  const { data } = await axios.get("http://localhost:3000/data");
  return data;
});

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export default gamesSlice.reducer;
