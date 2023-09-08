import Blog from "./Blog";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <div className="mainContent">
        <div className="w-auto">
          <Projects />
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Main;
