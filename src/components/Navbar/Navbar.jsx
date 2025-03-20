// import React from "react";
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
    <div className="flex justify-between items-center p-4 text-xl" ref={navRef}>
      <div className="flex justify-between items-center gap-4">
        <img src={navbar_logo} alt="" className="w-52" />
        <ul className="flex gap-4">
          <li
            className="cursor-pointer hover:text-green-500"
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-green-500"
            onClick={() => handleNavigation("/blogs")}
          >
            Blogs
          </li>
          <li
            className="cursor-pointer hover:text-green-500"
            onClick={() => handleNavigation("/projects")}
          >
            Projects
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        {location.pathname === "/blogs" && (
          <DropdownComponent setCategory={setCategory} />
        )}
        <img src={search_icon} alt="" className="w-6" />
        <img src={bell_icon} alt="" className="w-6" />
      </div>
    </div>
  );
};

export default Navbar;
