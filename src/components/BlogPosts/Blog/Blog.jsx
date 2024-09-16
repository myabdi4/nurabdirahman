import "./Blog.css";
import image from "../../../assets/hero_banner.jpg";

const Blog = ({ index, title, description, src, url }) => {
  return (
    <>
      {src && description && (
        <div className="blog">
          <div className="card" style={{ width: "23rem", height: "30rem" }}>
            <img src={src?src:{image}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 70)}</h5>
              <p className="card-text">
                {description ? description.slice(0, 150) : "..."}
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
