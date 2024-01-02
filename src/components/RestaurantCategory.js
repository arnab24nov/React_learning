import { useState } from "react";
import MenuCard from "./MenuCard";

const RestaurantCategory = (props) => {
  const { resData, data, setVisibleMenuItems } = props;
  const { title, itemCards } = data;

  const [accordianIcon, setAccordianIcon] = useState("🔻");

  const handleClick = () => {
    setVisibleMenuItems();
    accordianIcon === "🔻" ? setAccordianIcon("🔺") : setAccordianIcon("🔻");
  };

  return (
    <div className=" shadow-lg mb-6 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="text-slate-700 font-bold text-xl mb-8">
          {title} ({itemCards.length})
        </h1>
        <div className="text-[25px] cursor-pointer">{accordianIcon}</div>
      </div>
      {resData &&
        itemCards.map((dt) => <MenuCard key={dt.card.info.id} menuData={dt} />)}
    </div>
  );
};

export default RestaurantCategory;
