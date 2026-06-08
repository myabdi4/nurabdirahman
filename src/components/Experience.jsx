import experiences from "../data/experience";
import useInView from "../hooks/useInView";

function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-4">
          Experience
        </p>
        <h2 className="text-[36px] font-semibold text-[#18181B] dark:text-[#FAFAFA] leading-[1.1] mb-16">
          Where I&apos;ve worked
        </h2>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16"
            >
              {/* Left — Date & Company */}
              <div>
                <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  {exp.date}
                </p>
                <p className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                  {exp.location}
                </p>
              </div>

              {/* Right — Role & Details */}
              <div className="bg-[#EFF6FF] dark:bg-[#1E3A5F] border border-[#DBEAFE] dark:border-[#1D4ED8] rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-4">
                  {exp.role}
                </h3>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[#71717A] dark:text-[#A1A1AA] text-sm leading-[1.7]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
