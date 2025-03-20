/* eslint-disable no-unused-vars */
import Blog from "./Blog/Blog";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const BlogPosts = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // Show loading indicator
      setError(null); // Reset error before making the new request
      try {
        const res = await fetch(
          `http://localhost:5000/api/articles?category=${category}`
        );
        const data = await res.json();
        if (res.ok) {
          setArticles(data.articles); // Set articles if the response is OK
        } else {
          // If the response is not OK, show the error message from API
          setError(data.message || "Something went wrong!");
        }
      } catch (error) {
        // Handle network or fetch errors
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

    // Fetch articles only when the category is defined and not empty
    if (category) {
      fetchArticles();
    }
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-xl">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-3xl uppercase mb-4">
        {category ? category : "Choose a category"}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <Blog
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage || "default-image-url.jpg"} // Provide a default image URL if missing
              url={news.url}
            />
          ))
        ) : (
          <div className="text-center">
            No articles found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
