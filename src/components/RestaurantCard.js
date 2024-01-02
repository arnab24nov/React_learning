import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="m-6 w-64 h-64 transition-transform duration-300 hover:scale-95">
      <div className="relative">
        <img
          className="w-full h-40 rounded-xl mb-2"
          src={CDN_URL + cloudinaryImageId}
        />
        <div class="absolute bottom-0 left-0 rounded-xl w-full h-2/3 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <h1 className="overflow-ellipsis overflow-hidden whitespace-nowrap text-lg text-slate-600 font-bold ml-4">
        {name}
      </h1>
      <h4 className="flex items-center font-bold text-slate-600 ml-4">
        <img
          className="h-5 mr-1"
          src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
        />{" "}
        <span>
          {avgRating} . {sla?.slaString}
        </span>
      </h4>
      <h5 className="overflow-ellipsis overflow-hidden whitespace-nowrap font-light ml-4">
        {cuisines.join(", ")}
      </h5>
    </div>
  );
};

// Higher Order Component.
export const withOffereLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData.info;

    return (
      <div className="transition-transform duration-300 hover:scale-95">
        <label className="text-[20px] text-white font-extrabold z-10 absolute ml-[50px] mt-[125px]">
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
