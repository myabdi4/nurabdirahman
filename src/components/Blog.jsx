import ReactTricks from "./Blogs/ReactTricks";

function Blog() {
  return (
    <>
      {" "}
      <div className="sm:p-10">
        {/* HERE ARE FOR PROJECTS */}
        <h1 className="text-2xl sm:ml-40 font-bold text-center sm:text-start pt-10 pb-5">
          LATEST BLOGS
        </h1>
        <div className="sm:grid flex items-center justify-center">
          <div className="sm:grid sm:rid-col-2 justify-start sm:ml-40">
            <ReactTricks />
            <ReactTricks />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
