import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <Link to={`/restaurants/${id}`} style={linkStyle}>
      <div className="res-card">
        <img className="food-logo" src={CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h4>Rating: {avgRating}</h4>
        <h4>ETA: {sla?.slaString}</h4>
      </div>
    </Link>
  );
};
const linkStyle = {
  color: "black",
  textDecoration: "none",
};
export default RestaurentCard;
