import MybdiFoods from "../pages/Projects/Myabdi4Foods";
import ReactTricks from "../pages/Blogs/ReactTricks";

const Main = () => {
  return (
    <>
      <div className="mainContent">
        <div className="w-auto">
          {/* LATEST PROJECTS */}
          {/* HERE ARE FOR PROJECTS */}
          <h1 className="text-2xl sm:ml-40 font-bold text-center sm:text-start">
            LATEST PROJECTS
          </h1>

          {/* PROJECT 1 */}
          <div className="sm:p-10 ">
            <div className="sm:flexpt-5">
              <div className="flex flex-wrap sm:justify-center ">
                <MybdiFoods />
              </div>
            </div>
          </div>

          {/* LATEST BLOGS */}
          <div className="sm:p-5">
            {/* HERE ARE FOR PROJECTS */}
            <h1 className="text-2xl sm:ml-40 font-bold text-center sm:text-start pt-2 pb-5">
              LATEST BLOGS
            </h1>
            <div className="sm:grid flex items-center justify-center">
              <div className="sm:grid sm:rid-col-2 justify-start sm:ml-40">
                <ReactTricks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
