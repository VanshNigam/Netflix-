import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const DEBUG = false;
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayingMovie = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const data = await response.json();
        DEBUG && console.log("Fetched Data:", data); // ✅ Check API response
        dispatch(addNowPlayingMovies(data));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getPlayingMovie();
  }, [dispatch]);
};

export default useNowPlayingMovies;
