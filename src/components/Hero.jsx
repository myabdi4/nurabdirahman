import photo from "../assets/abdirahman.jpeg";
import useInView from "../hooks/useInView";
import useVisitorCount from "../hooks/useVisitorCount";

function Hero() {
  const [ref, inView] = useInView();
  const count = useVisitorCount();

  return (
    <section
      ref={ref}
      className={`fade-up ${inView ? "is-visible" : ""} py-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Left — Text */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <p className="text-sm text-[#2563EB] font-medium uppercase tracking-widest mb-6">
              Software Engineer
            </p>
            {count !== null && (
              <p className="text-xs text-[#71717A] mb-6">
                👁 {count} {count === 1 ? "visitor" : "visitors"} in the last 24
                hours
              </p>
            )}
            <h1 className="text-5xl md:text-[64px] font-bold leading-[1.1] text-[#18181B] dark:text-[#FAFAFA] mb-6">
              Building thoughtful digital experiences.
            </h1>
            <p className="text-lg text-[#71717A] dark:text-[#A1A1AA] leading-[1.7] max-w-xl mb-10">
              I&apos;m Nur Abdirahman, a software engineer focused on building
              clean, performant, and user-friendly products.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#2563EB] text-white text-sm font-medium rounded-xl hover:bg-[#1D4ED8] transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#E4E4E7] dark:border-[#27272A] text-[#18181B] dark:text-[#FAFAFA] text-sm font-medium rounded-xl hover:bg-[#18181B] hover:text-white dark:hover:bg-white dark:hover:text-[#09090B] transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex-shrink-0">
            <img
              src={photo}
              alt="Nur Abdirahman"
              className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover border border-[#E4E4E7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
