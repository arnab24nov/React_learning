import RestaurentCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("button clicked");
          setListOfRestaurants(
            listOfRestaurants.filter((el) => el.info.avgRating > 4.0)
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
        />
        <input id="search-button" type="button" value="Search" />
      </div>
      <div className="res-container">
        <div className="card-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
