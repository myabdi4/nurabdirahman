import "./BlogPosts.css";
import Blog from "./Blog/Blog";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const BlogPosts = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="display-items">
      <div className="blog-posts">
        {articles.map((news, index) => {
          return (
            <Blog
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;
