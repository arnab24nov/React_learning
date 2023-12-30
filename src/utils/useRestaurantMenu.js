import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setMenuInfo(json.data);
  };

  return menuInfo;
};

export default useRestaurantMenu;
