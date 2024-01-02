import { MENU_LOGO } from "../utils/constant";
const MenuCard = (props) => {
  const { menuData } = props;
  const { name, price, defaultPrice, imageId, ratings, description } =
    menuData?.card?.info;
  console.log(menuData, ratings);
  return (
    <div className="flex justify-between items-center pt-[10px] pb-[20px] m-[20px auto] w-full border-b border-black last:border-b-0">
      <div>
        <h2 className="text-[20px] font-semibold text-slate-700">
          {name.trim()}
        </h2>
        {ratings?.aggregatedRating?.rating && (
          <h4 className="font-semibold text-slate-700">
            ⭐{ratings?.aggregatedRating?.rating} (
            {ratings?.aggregatedRating?.ratingCountV2})
          </h4>
        )}
        <h4 className="font-semibold text-slate-700">
          $: {price / 100 || defaultPrice / 100}
        </h4>
        <h4 className=" text-[14px] mt-4 text-slate-500">{description}</h4>
      </div>
      {imageId && <img className="menu-logo" src={MENU_LOGO + imageId} />}
    </div>
  );
};

export default MenuCard;
