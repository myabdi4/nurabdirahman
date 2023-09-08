import Header from "../../components/Header";
import MybdiFoods from "./Myabdi4Foods";
function Projects() {
  return (
    <>
      <div className="page text-white">
        <Header />

        <div className="sm:p-10 ">
          <h2 className="text-center py-5 text-2xl font-bold italic text-green-700">PROJECTS I HAVE WORKED ON!</h2>
          <div className="sm:flexpt-5">
            <div className="flex flex-wrap sm:justify-center ">
              <MybdiFoods />
              <MybdiFoods />
              <MybdiFoods />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
