import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Login");
  const [mode, setMode] = useState("Dark Mode");

  useEffect(() => {
    console.log("login button toggled");
  }, [toggleBtn, mode]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-out"
            onClick={() => {
              toggleBtn == "Login"
                ? setToggleBtn("Logout")
                : setToggleBtn("Login");
            }}
          >
            {toggleBtn}
          </button>
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

export default Header;
