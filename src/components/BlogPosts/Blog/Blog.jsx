/* eslint-disable react/prop-types */
import image from "../../../assets/hero_banner.jpg";
import { Link } from "react-router-dom";

const Blog = ({ index, title, description, src }) => {
  return (
    <>
      {src && description && (
        <div
          className="flex flex-col gap-4 bg-gray-800 rounded-lg shadow-hidden p-2 overflow-hidden"
          style={{ width: "23rem", height: "30rem" }}
        >
          <img src={src ? src : { image }} className="" alt="..." />
          <div className="flex flex-col gap-2 p-2 text-lg">
            <h5>{title.slice(0, 70)}</h5>
            <p>{description ? description.slice(0, 98) : "..."}</p>
            <Link
              to={`/blog/blogcontent/${index}}`}
              className="bg-green-500 p-2 rounded text-black"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
