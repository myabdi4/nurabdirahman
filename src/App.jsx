import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blogs/Blog";
import Projects from "./pages/Projects/Projects";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />

          {/* blog pages */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
