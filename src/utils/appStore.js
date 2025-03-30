import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movie: moviesReducer,
  },
});

export default appStore;

export const STATES = {
  USER: "user",
  MOVIE: "movie",
};
