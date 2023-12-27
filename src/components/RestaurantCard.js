import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img className="food-logo" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h4>Rating: {avgRating}</h4>
      <h4>ETA: {sla?.slaString}</h4>
    </div>
  );
};
export default RestaurentCard;
