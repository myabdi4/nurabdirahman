import { education, awards } from "../data/education";
import useInView from "../hooks/useInView";

function Education() {
  const [ref, inView] = useInView();
  return (
    <section
      id="education"
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-4">
          Education
        </p>
        <h2 className="text-[36px] font-semibold text-[#18181B] dark:text-[#FAFAFA] leading-[1.1] mb-16">
          Academic background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div className="flex flex-col gap-8">
            <h3 className="text-sm font-semibold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-widest">
              Degrees & Certificates
            </h3>
            {education.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold text-[#18181B] dark:text-[#FAFAFA] text-sm">
                    {item.degree}
                  </p>
                  <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-[#2563EB]">{item.school}</p>
                {item.description && (
                  <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] leading-[1.7]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="flex flex-col gap-8">
            <h3 className="text-sm font-semibold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-widest">
              Awards
            </h3>
            {awards.map((award, i) => (
              <div
                key={i}
                className="bg-[#EFF6FF] dark:bg-[#1E3A5F] border border-[#DBEAFE] dark:border-[#1D4ED8] rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-semibold text-[#18181B] dark:text-[#FAFAFA] text-sm">
                    {award.title}
                  </p>
                  <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] whitespace-nowrap">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs text-[#2563EB] mb-3">{award.event}</p>
                <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] leading-[1.7]">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
