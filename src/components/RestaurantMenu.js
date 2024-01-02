import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  const [visibleMenuItems, setVisibleMenuItems] = useState(null);

  if (menu === null) return <Shimmer />;

  const { name, areaName, costForTwoMessage, cuisines } =
    menu?.cards[0]?.card?.card?.info;

  const filteredCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el) => {
      return (
        el.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="w-[70%] mx-auto">
      <div className="border-b border-black pb-[20px] mb-[20px]">
        <h1 className="text-xl text-slate-700 font-bold">{name}</h1>
        <p className="text-[14px] text-slate-500">{areaName}</p>
        <p className="text-[14px] text-slate-500">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      {filteredCards.map((res, index) => (
        <RestaurantCategory
          key={res?.card?.card?.title}
          data={res?.card?.card}
          resData={index === visibleMenuItems ? true : false}
          setVisibleMenuItems={() => setVisibleMenuItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
