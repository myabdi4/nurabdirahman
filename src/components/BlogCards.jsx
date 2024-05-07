const BlogCards = ({blogTitle, blogDescription }) => {
    return (
        <>
            <div className="bg-base-100 sm:w-[750px] sm:max-w-full">
                <div className="card-body shadow-lg shadow-slate-800 cursor-pointer">
                    <h2 className=" text-[#49df8f] font-bold word sm:w-96 uppercase">{blogTitle}</h2>
                    <p className="line-clamp-3 ">{blogDescription}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn hover-nav">READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCards