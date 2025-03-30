import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopulerMovies";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <GPTSearch/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
