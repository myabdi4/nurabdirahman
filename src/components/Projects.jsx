import Aramofoods from "./Projects/Aramofoods";

const Projects = () => {
  return (
    <>
      <div className="sm:p-20">
        {/* HERE ARE FOR PROJECTS */}
        <h1 className="text-2xl sm:ml-40 font-bold text-center sm:text-start">
          LATEST PROJECTS
        </h1>

        {/* PROJECT 1 */}
        <div className="flex sm:flex-col pt-5 gap-2">
          <div className="flex flex-wrap justify-center">
            <Aramofoods />
            <Aramofoods />
            <Aramofoods />
            <Aramofoods />
            <Aramofoods />
            <Aramofoods />
            <Aramofoods />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
