import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies ) return null ; // Handle loading state

  const mainMovie = movies.results[0]; // Pick the first movie from the array
  
  const { original_title, overview ,id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  );
};

export default MainContainer;
