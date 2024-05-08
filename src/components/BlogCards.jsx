const BlogCards = ({ blogTitle, blogDescription, blogLink }) => {
    return (
        <>
            <a href={blogLink} target="_blank" rel="noopener noreferrer">
                <div className="bg-base-100 sm:w-[750px] sm:max-w-full">
                    <div className="card-body shadow-lg shadow-slate-800 cursor-pointer">
                        <h2 className=" text-[#ecf1ee] font-bold word sm:w-96 uppercase bg-blue-700 w-full p-2 rounded">{blogTitle}</h2>
                        <p className="line-clamp-3">{blogDescription}
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn hover-nav">READ MORE</button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default BlogCards