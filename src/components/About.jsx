import skills from "../data/skills";
import useInView from "../hooks/useInView";

function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-4">
          About
        </p>
        <h2 className="text-[36px] font-semibold text-[#18181B] dark:text-[#FAFAFA] leading-[1.1] mb-16">
          A little about me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Bio */}
          <div>
            <p className="text-lg text-[#18181B] dark:text-[#FAFAFA] leading-[1.7] mb-4">
              I&apos;m a Computer Science graduate based in Edmonton, Canada. I
              build clean, minimal software with a focus on great user
              experience and solid engineering.
            </p>
            <p className="text-lg text-[#71717A] dark:text-[#A1A1AA] leading-[1.7] mb-8">
              I enjoy tackling complex problems and turning them into simple,
              elegant solutions. When I&apos;m not coding, you&apos;ll find me
              reading sci-fi, cooking, or picking up something new to learn.
            </p>

            <div className="flex flex-col gap-3 text-[#71717A] dark:text-[#A1A1AA] text-sm">
              {[
                "Clean, readable code",
                "Minimal, purposeful UI/UX",
                "Continuous learning",
                "Attention to detail",
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 text-[#71717A] text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#EFF6FF] dark:bg-[#1E3A5F] border border-[#DBEAFE] dark:border-[#1D4ED8] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-sm font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white dark:bg-[#18181B] border border-[#BFDBFE] dark:border-[#1D4ED8] text-[#1D4ED8] dark:text-white text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
