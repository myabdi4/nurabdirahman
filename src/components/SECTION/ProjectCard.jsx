// THIS IS IS THE PROJECT CARDS
const BlogCard = ({ imageSource, projectTitle, projectDescription }) => {
    return (
        <>
            <div className="grid gap-4 p-4 cursor-pointer bg-[#212629] rounded-md sm:w-96 shadow-lg shadow-[#2a2c2f]">
                <figure className="flex justify-center">
                    <img src={imageSource} alt="" className="rounded h-96 w-full" />
                    </figure>
                <h2 className="uppercase text-[#ffffff] font-semibold text-xl">{[projectTitle]}</h2>
                <p className="line-clamp-3 text-md">
                    {projectDescription}
                </p>
                <button className="flex gap-4 justify-start pt-6 pb-6">
                    <button className="btn hover-nav bg-green-500 text-white hover:bg-green-400 hover:text-black">Visit Site</button>
                    <button className="btn hover-nav bg-gray-500 text-white">GET CODE</button>
                </button>
            </div>
        </>
    )
}

export default BlogCard

// < div className = "card w-96 bg-base-100  image-full cursor-pointer" >
//             <figure className="image-zoom"><img src={imageSource} alt="project" className="w-full h-full object-fit" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title font-bold text-[#49df8f] uppercase">{projectTitle}</h2>
//                 <p className="text-white text-justify">{projectDescription}</p>
//                 <div className="flex gap-4 justify-end pt-32">
//                     <button className="btn hover-nav">GET CODE</button>
//                     <button className="btn hover-nav hover:bg-red-400">TRY DEMO</button>
//                 </div>
//             </div>
//         </ >