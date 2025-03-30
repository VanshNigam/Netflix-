import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // if (!posterPath) return null;

  const imageUrl = `${IMG_CDN_URL}${posterPath}`;
  console.log("-->>>",imageUrl)
  return (
    <div className="w-36 md:w-48 pr-4">
      
      <img alt="Movie Card" src={imageUrl} />
    </div>
  );
};
export default MovieCard;