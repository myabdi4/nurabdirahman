// import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

// IMPORT IMAGES AND ICONS
import navbar_logo from "../../assets/abdirahmannurlogo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import DropdownComponent from "./DropdownComponent";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setCategory }) => {
  const navigate = useNavigate();
  const navRef = useRef();

  // HANDLE NAVIGATION
  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-right">
        <img src={navbar_logo} alt="" />
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/blogs")}>Blogs</li>
          <li onClick={() => handleNavigation("/projects")}>Projects</li>
        </ul>
      </div>
      <div className="navbar-left">
        {location.pathname === "/blogs" && (
          <DropdownComponent setCategory={setCategory} />
        )}
        <img src={search_icon} alt="" className="icons" />
        <img src={bell_icon} alt="" className="icons" />
      </div>
    </div>
  );
};

export default Navbar;
