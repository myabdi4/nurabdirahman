import Blog from "./pages/Blogs/Blog";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import BlogContent from "./components/BlogContent/BlogContent";
// import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/blogcontent/:id" element={<BlogContent />} />
      </Routes>
    </>
  );
}

export default App;
