import React from "react";
import "./DropdownComponent.css";

const DropdownComponent = ({ setCategory }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose a Category
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li>
          <div
            className="dropdown-item active"
            onClick={() => setCategory("technology")}
          >
            Technology
          </div>
        </li>
        <li>
          <div
            className="dropdown-item"
            onClick={() => setCategory("Business")}
          >
            Business
          </div>
        </li>
        <li>
          <div className="dropdown-item" onClick={() => setCategory("Health")}>
            Health
          </div>
        </li>
        <li>
          <div className="dropdown-item" onClick={() => setCategory("science")}>
            Science
          </div>
        </li>
        <li>
          <div className="dropdown-item" onClick={() => setCategory("sports")}>
            Sports
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <div className="dropdown-item" href="/profile">
            Profile
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownComponent;
