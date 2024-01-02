import { MENU_LOGO } from "../utils/constant";
const MenuCard = (props) => {
  const { menuData } = props;
  const { name, price, defaultPrice, imageId, ratings, description } =
    menuData?.card?.info;

  return (
    <div className="flex justify-between items-center pt-[10px] pb-[30px] m-[20px auto] w-full border-b border-black last:border-b-0">
      <div className="w-10/12">
        <h2 className="text-l font-semibold text-slate-700">{name.trim()}</h2>
        {ratings?.aggregatedRating?.rating && (
          <h4 className="font-semibold text-slate-700">
            ⭐{ratings?.aggregatedRating?.rating} (
            {ratings?.aggregatedRating?.ratingCountV2})
          </h4>
        )}
        <h4 className="font-semibold text-slate-700">
          ₹ {price / 100 || defaultPrice / 100}
        </h4>
        <h4 className=" text-[14px] mt-4 text-slate-500">{description}</h4>
      </div>
      <div className="w-2/12 relative">
        {imageId && (
          <img
            className=" rounded-lg h-[120px] w-full"
            src={MENU_LOGO + imageId}
          />
        )}
        <button className="bg-green-600 text-white px-8 py-1 rounded-md absolute top-[85%] left-[20%]">
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
