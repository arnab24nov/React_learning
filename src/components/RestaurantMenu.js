import { useState } from "react";
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
    <div className="recommended-menu">
      <div className="menu-for-restaurant"></div>
      <h2>{title}</h2>
      <div className="restaurant-menu-container">
        {itemCards.map((dt) => (
          <MenuCard key={dt.card.info.id} menuData={dt} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
