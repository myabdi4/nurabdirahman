import BlogPost from "../BlogPost"
import ProjectCards from "../ProjectCard"
import HeaderTitle from "../HeaderTitle";
import jsonData from '../../../JSON/data.json'; // Import JSON data



const LatestUplods = () => {
    const { projects, blogs } = jsonData; // Destructure projectTitle from JSON data
    return (
        <>
            <div className="grid justify-center p-2 text-lg">
                <div className="">
                    <HeaderTitle title={"PROJECT POSTS"} />
                    <div className="grid sm:grid-cols-3 gap-6 justify-between pt-4">
                        {projects.map((project, index1) => (
                            <ProjectCards key={index1} imageSource={project.imageSource} projectTitle={project.projectTitle} projectDescription={project.projectDescription} />
                        ))}
                    </div>
                </div>

                <div className=" justify-center pt-8">
                    <HeaderTitle title={"BLOG POSTS"} />
                    <div className="grid sm:grid-cols-1 justify-center gap-5 p-10 rounded-md justify-items-center">
                        {blogs.map((blog, index2) => (
                            <BlogPost key={index2} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogLink={blog.blogLink} />
                        ))}
                    </div>
                </div>


            </div>
        </>
    );
}

export default LatestUplods;