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
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-3xl uppercase">
        {category ? category : "Choose a category"}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* {articles.map((news, index) => {
          return (
            <Blog
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default BlogPosts;
