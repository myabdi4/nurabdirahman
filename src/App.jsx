import Blog from "./pages/Blogs/Blog";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
