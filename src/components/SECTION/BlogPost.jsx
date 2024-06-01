// THIS IS THE BLOG POSTS
const BlogPost = ({ blogTitle, blogDescription, blogLink }) => {
    return (
        <>
            <a href={blogLink} target="_blank" rel="noopener noreferrer">
                <div className="bg-base-100 sm:w-[750px] sm:max-w-full">
                    <div className="card-body shadow-lg shadow-slate-900 cursor-pointer">
                        <h2 className=" text-[#f5f2f2] font-bold word p-4 w-fit bg-slate-800 uppercase text-xl rounded">
                            {blogTitle}
                        </h2>
                        <p className="pt-8 text-[#D2CECE] line-clamp-3">{blogDescription}
                        </p>
                        <div className="card-actions justify-end pt-8">
                            <button className="btn hover-nav">READ MORE</button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default BlogPost