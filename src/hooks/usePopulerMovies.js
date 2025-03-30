import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayingMovie = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const data = await response.json();

        dispatch(addPopularMovies(data));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getPlayingMovie();
  }, [dispatch]);
};

export default usePopularMovies;
