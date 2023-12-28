import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantsMenu();
  }, []);

  const fetchRestaurantsMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    console.log("JSON==>", json);

    setTitle(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.title
    );

    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log("menu===>", menu);
  };
  return (
    <div className="recommended-menu">
      <div className="menu-for-restaurant"></div>
      <h2>{title}</h2>
      <div className="restaurant-menu-container">
        {menu.map((dt) => (
          <MenuCard key={dt.card.info.id} menuData={dt} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
