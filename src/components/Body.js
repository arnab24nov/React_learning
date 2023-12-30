import RestaurentCard from "./RestaurantCard";
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
  console.log("is Online?????", internetStatus);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6494148&lng=88.4272349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!internetStatus) {
    return <Status />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          setFilteredRestaurants(
            listOfRestaurants.filter((el) => el.info.avgRating > 4.5)
          );
        }}
      >
        Top rated restaurants
      </button>
      <div className="search">
        <input
          type="search"
          placeholder="search for restaurants"
          id="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
        <input
          id="search-button"
          type="button"
          value="Search"
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
        />
      </div>
      <div className="res-container">
        <div className="card-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
