import RestaurantCard, { withOffereLabel } from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Status from "./Status";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const internetStatus = useOnlineStatus();

  const RestaurantCardWithOfferLabel = withOffereLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6489&lng=88.4278866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!internetStatus) {
    return <Status />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <div className="search m-4 p-4 text-center">
          <input
            type="search"
            placeholder="search for restaurants"
            id="search-box"
            className="w-96 h-10 p-4 mr-2 border border-solid focus:border-black shadow focus:outline-none rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          />
          <button
            id="search-button"
            className="px-4 h-10 bg-green-600 rounded-lg hover:text-white font-semibold"
            type="button"
            onClick={() => {
              if (searchText.trim().length > 0) {
                setFilteredRestaurants(
                  listOfRestaurants.filter((el) =>
                    el.info.cuisines
                      .map((el) => el.toLowerCase())
                      .includes(searchText)
                  )
                );
              }
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="mr-6 px-4 h-10 bg-green-600 rounded-lg hover:text-white font-semibold"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((el) => el.info.avgRating > 4.3)
              );
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-10">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithOfferLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
