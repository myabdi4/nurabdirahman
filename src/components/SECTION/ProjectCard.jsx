// THIS IS IS THE PROJECT CARDS
const BlogCard = ({ imageSource, projectTitle, projectDescription }) => {
  return (
    <>
      <div className="grid gap-4 p-4 cursor-pointer bg-[#2f93d0] rounded-md sm:w-96 shadow-lg shadow-[#2a2c2f]">
        <figure className="flex justify-center">
          <img src={imageSource} alt="" className="w-full h-40 object-cover" />
        </figure>
        <h2 className="uppercase text-[#ffffff] font-semibold text-xl">
          {[projectTitle]}
        </h2>
        <p className="line-clamp-3 text-md">{projectDescription}</p>
        <button className="flex gap-4 justify-start pt-6 pb-6">
          <button className="btn hover-nav bg-green-500 text-white hover:bg-green-400 hover:text-black">
            Visit Site
          </button>
          <button className="btn hover-nav bg-gray-500 text-white">
            GET CODE
          </button>
        </button>
      </div>
    </>
  );
};

export default BlogCard;
