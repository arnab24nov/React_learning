import { useState, useEffect } from "react";

const useRestaurantCard = () => {
  const [restaurantsInfo, setRestaurantsInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6494148&lng=88.4272349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantsInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("restaurantsInfo===>", restaurantsInfo);
  return restaurantsInfo;
};

export default useRestaurantCard;
