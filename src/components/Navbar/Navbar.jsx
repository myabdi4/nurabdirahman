// import React from "react";
import "./Navbar.css";

// IMPORT IMAGES AND ICONS
import navbar_logo from "../../assets/abdirahmannurlogo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <img src={navbar_logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Blogs</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="navbar-left">
        {/* <input type="text" /> */}
        <img src={search_icon} alt="" className="icons" />
        <img src={bell_icon} alt="" className="icons" />
      </div>
    </div>
  );
};

export default Navbar;
