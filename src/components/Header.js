import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constant";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Logout");
  const [mode, setMode] = useState("Dark Mode");
  const [isLogeedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnlineStatus();

  useEffect(() => {}, [toggleBtn, mode]);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-lg mb-4">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-40" src={APP_LOGO_URL} alt="app logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4">
          <li className="m-4">Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li className="m-4 hover:scale-125 text-slate-600 font-bold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-4 hover:scale-125 text-slate-600 font-bold">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="m-4 hover:scale-125 text-slate-600 font-bold">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="m-4 hover:scale-125 text-slate-600 font-bold">
            <Link to={"/grocary"}>Grocary</Link>
          </li>
          <Link to={"/cart"}>
            <li className="m-4 font-bold">Cart ({cartItems.length})</li>
          </Link>
          <button
            className="login-out"
            onClick={() => {
              if (toggleBtn == "Login") {
                setToggleBtn("Logout");
                setIsLoggedIn(false);
              } else {
                setToggleBtn("Login");
                setIsLoggedIn(true);
              }
            }}
          >
            {toggleBtn}
          </button>
          {/* {isLogeedIn && <Login />} */}
          {/* <button
            className="toggle-mode"
            onClick={() => {
              if (mode === "Dark Mode") {
                setMode("Light Mode");
                document.querySelector(".app").classList.remove("light-mode");
                document.querySelector(".app").classList.add("dark-mode");
              } else {
                setMode("Dark Mode");
                document.querySelector(".app").classList.remove("dark-mode");
                document.querySelector(".app").classList.add("light-mode");
              }
            }}
          >
            {mode}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
