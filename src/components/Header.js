import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
