import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Logout");
  const [mode, setMode] = useState("Dark Mode");
  const [isLogeedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnlineStatus();

  useEffect(() => {}, [toggleBtn, mode]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <div>Online Status: {isOnline ? "🟢" : "🔴"}</div>
          <li>
            <Link to={"/"} style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} style={linkStyle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"} style={linkStyle}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to={"/grocary"} style={linkStyle}>
              Grocary
            </Link>
          </li>
          <li>Cart</li>
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
          <button
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
          </button>
        </ul>
      </div>
    </div>
  );
};

const linkStyle = {
  color: "black", // Text color
  textDecoration: "none", // Remove underline
  fontWeight: "bold", // Set font weight to bold
};

export default Header;
