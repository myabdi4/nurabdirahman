const BlogCards = () => {
    return (
        <>
            <div className="bg-base-100 sm:w-[750px] sm:max-w-full">
                <div className="card-body shadow-lg shadow-slate-800 cursor-pointer">
                    <h2 className=" text-blue-600 font-bold word sm:w-96">The Title of Today's Blog</h2>
                    <p className="line-clamp-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio corrupti reiciendis modi expedita 
                        ipsa praesentium consequuntur in unde. Sapiente nesciunt animi laboriosam at possimus cumque impedit 
                        ad quaerat consequatur?
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