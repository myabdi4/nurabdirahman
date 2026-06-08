import projects from "../data/projects";
import useInView from "../hooks/useInView";

function Projects() {
  const [ref, inView] = useInView();
  return (
    <section
      id="projects"
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-4">
          Projects
        </p>
        <h2 className="text-[36px] font-semibold text-[#18181B] dark:text-[#FAFAFA] leading-[1.1] mb-16">
          Things I&apos;ve built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div>
                {/* Title & Status */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#18181B] dark:text-[#FAFAFA]">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === "Live"
                        ? "bg-[#DCFCE7] text-[#16A34A]"
                        : "bg-[#FEF9C3] text-[#CA8A04]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] leading-[1.7] mb-4">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#EFF6FF] dark:bg-[#1E3A5F] border border-[#DBEAFE] dark:border-[#1D4ED8] text-[#2563EB] dark:text-[#3B82F6] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#2563EB] text-white text-xs font-medium rounded-xl hover:bg-[#1D4ED8] transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-[#E4E4E7] dark:border-[#27272A] text-[#18181B] dark:text-[#FAFAFA] text-xs font-medium rounded-xl hover:bg-[#18181B] hover:text-white dark:hover:bg-white dark:hover:text-[#09090B] transition-all"
                  >
                    GitHub
                  </a>
                )}
                {!project.live && !project.github && (
                  <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
