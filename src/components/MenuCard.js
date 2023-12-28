import { MENU_LOGO } from "../utils/constant";
const MenuCard = (props) => {
  const { menuData } = props;
  const { name, price, defaultPrice, imageId, ratings } = menuData?.card?.info;
  console.log(menuData, ratings);
  return (
    <div className="menu-card">
      <div>
        <h2>{name.trim()}</h2>
        {ratings?.aggregatedRating?.rating && (
          <h4>
            ⭐{ratings?.aggregatedRating?.rating} (
            {ratings?.aggregatedRating?.ratingCountV2})
          </h4>
        )}
        <h4>$: {price / 100 || defaultPrice / 100}</h4>
      </div>
      {imageId && <img className="menu-logo" src={MENU_LOGO + imageId} />}
    </div>
  );
};

export default MenuCard;
