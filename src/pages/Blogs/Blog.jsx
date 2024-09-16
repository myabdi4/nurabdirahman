import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import { useState } from "react";

const Blog = () => {
  const [category, setCategory] = useState("Technology");

  return (
    <div className="blogs">
      <Navbar setCategory={setCategory} />
      <BlogPosts category={category} />
    </div>
  );
};

export default Blog;
