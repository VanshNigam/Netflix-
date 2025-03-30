import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { MOVIES_STATES } from "../utils/movieSlice";
import { STATES } from "../utils/appStore";

const VideoBackground = ({ movieId }) => {
  // typo tha
  // before = store.movies.trailerVideo
  // after = store.movie.trailerVideo
  const DEBUG = false;

  const trailer = useSelector(
    (store) => store[STATES.MOVIE][MOVIES_STATES.TRAILER_VIDEO]
  );
  DEBUG && console.log("trailer", trailer);

  useMovieTrailer(movieId);

  if (!trailer) return <div>No trailerVideo</div>; // Handle loading state

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
