import ReactTricks from "./ReactTricks";
import Header from "../../components/Header";

function Blog() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="flex flex-col text-center justify-center items-center pt-10 text-white sm:ml-40">
          <ReactTricks />
        </div>
      </div>
    </>
  );
}

export default Blog;
