import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const imageUrl = `${IMG_CDN_URL}${posterPath}`;
  return (
    <div className="w-26 md:w-48 pr-4">
      <img alt="Movie Card" src={imageUrl} />
    </div>
  );
};
export default MovieCard;