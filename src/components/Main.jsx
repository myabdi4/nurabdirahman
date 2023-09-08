import Blog from "./Blog";
import Projects from "./projects";

const Main = () => {
  return (
    <>
      <div className="mainContent">
        <div className="w-auto">
          <Projects />
          <Projects />
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Main;
