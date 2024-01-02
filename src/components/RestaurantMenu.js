import MenuCard from "./MenuCard";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;

  const { title, itemCards } =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-slate-700 font-bold text-3xl mb-8">{title}</h1>
      <div className="">
        {itemCards.map((dt) => (
          <MenuCard key={dt.card.info.id} menuData={dt} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
