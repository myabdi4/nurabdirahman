/* eslint-disable react/prop-types */
import image from "../../../assets/hero_banner.jpg";
import { Link } from "react-router-dom";

const Blog = ({ index, title, description, src }) => {
  return (
    <>
      {src && description && (
        <div
          className="flex flex-col gap-4 bg-gray-800 rounded-lg shadow-lg p-2 overflow-hidden"
          style={{ width: "23rem", height: "30rem" }}
        >
          {/* Image */}
          <img
            src={src ? src : image}
            alt="..."
            className="w-full h-48 object-cover rounded-t-lg" // Ensure the image fills the container and has a fixed height
          />

          {/* Text and Link Section */}
          <div className="flex flex-col gap-4 p-2 text-lg">
            <h5 className="font-bold text-blue-100">{title.slice(0, 70)}</h5>
            <p className="text-md">{description ? description.slice(0, 98) : "..."}</p>
            <Link
              to={`/blog/blogcontent/${index}}`}
              className="bg-green-500 w-fit p-2 hover:bg-green-600 rounded-md text-white text-center"
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
