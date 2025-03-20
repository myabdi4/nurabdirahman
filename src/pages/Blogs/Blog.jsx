// import React from "react";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Blog = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="blogs">
      <Navbar setCategory={setCategory} />
      <BlogPosts category={category} />
    </div>
  );
};

export default Blog;
