import Card from "./Card"
import BlogCards from "./BlogCards"
import jsonData from '../JSON/data.json'; // Import JSON data



const LatestUplods = () => {
    const { projects, blogs} = jsonData; // Destructure projectTitle from JSON data
    return (
        <>
            <div className="grid justify-center px-20 gap-2 p-2 text-lg">
                <div className="p-5 ">
                    <div className="flex gap-5 tabs tabs-boxed justify-center cursor-pointer">
                        <a className="p-5 hover-nav">LASTEST PROJECTS</a>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8 justify-between pt-4">
                        {projects.map((project, index1) => (
                            <Card key={index1} imageSource={project.imageSource} projectTitle={project.projectTitle} projectDescription={project.projectDescription} />
                        ))}
                        
                    </div>
                </div>

                <div className="p-5 justify-center">
                    <div className="gap-5 tabs tabs-boxed justify-center cursor-pointer pb-5">
                        <a className="p-5 hover-nav font-bold">LATEST BLOGS</a>
                    </div>
                    <div className="grid sm:grid-cols-1 justify-center gap-5 pt-8 border border-slate-600 shadow-sm shadow-zinc-300 p-2">
                        {blogs.map((blog, index2) => (
                            <BlogCards key={index2} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} />
                        ))}
                    </div>
                </div>


            </div>
        </>
    );
}

export default LatestUplods;