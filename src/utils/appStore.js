import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movie: moviesReducer,
    gpt: gptReducer,  // added for GPT slice
  },
});

export default appStore;

export const STATES = {
  USER: "user",
  MOVIE: "movie",
};
