import RestaurentCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.769599&lng=73.865613&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    // return (
    //   <div className="rendering-loader">
    //     <div className="loader"></div>
    //     <h1>Loading...</h1>
    //   </div>
    // );
    return <Shimmer />;
  }
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
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
        <input
          id="search-button"
          type="button"
          value="Search"
          onClick={() => {
            console.log("button clicked");
            let searchItem = document.getElementById("search-box").value;
            setListOfRestaurants(
              listOfRestaurants.filter((el) =>
                el.info.cuisines.includes(searchItem)
              )
            );
          }}
        />
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
