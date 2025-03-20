/* eslint-disable react/prop-types */
// import React from "react";

const DropdownComponent = ({ setCategory }) => {
  return (
    <div className="flex gap-2 p-2">
      <ul className="flex gap-4 cursor-pointer ">
        <li className="hover:text-green-500">
          <div onClick={() => setCategory("technology")}>Technology</div>
        </li>
        <li className="hover:text-green-500">
          <div onClick={() => setCategory("Business")}>Business</div>
        </li>
        <li className="hover:text-green-500">
          <div onClick={() => setCategory("Health")}>Health</div>
        </li>
        <li className="hover:text-green-500">
          <div onClick={() => setCategory("science")}>Science</div>
        </li>
        <li className="hover:text-green-500">
          <div onClick={() => setCategory("sports")}>Sports</div>
        </li>
        <li className="hover:text-green-500">
          <div href="/profile">Profile</div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownComponent;
