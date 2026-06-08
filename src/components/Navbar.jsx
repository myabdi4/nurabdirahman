import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = [
      "about",
      "projects",
      "experience",
      "education",
      "contact",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `hover:text-[#18181B] dark:hover:text-[#FAFAFA] transition-colors ${
      active === id ? "text-[#2563EB] font-medium" : "text-[#71717A]"
    }`;

  return (
    <nav className="fixed top-0 w-full h-20 border-b border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAF9]/80 dark:bg-[#09090B]/80 backdrop-blur-sm z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
        <a
          href="#"
          className="font-semibold text-[#18181B] dark:text-[#FAFAFA] hover:text-[#2563EB] transition-colors"
        >
          Nur Abdirahman
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>
          <a href="#education" className={linkClass("education")}>
            Education
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="px-4 py-2 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] text-[#18181B] dark:text-[#FAFAFA] text-sm hover:bg-[#18181B] hover:text-white dark:hover:bg-white dark:hover:text-[#09090B] transition-all"
          >
            Resume
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-sm hover:border-[#2563EB] transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-sm"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className="text-[#18181B] dark:text-[#FAFAFA]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FAFAF9] dark:bg-[#09090B] border-b border-[#E4E4E7] dark:border-[#27272A] px-6 py-4 flex flex-col gap-4 text-sm">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className={linkClass("about")}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className={linkClass("projects")}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setOpen(false)}
            className={linkClass("experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={() => setOpen(false)}
            className={linkClass("education")}
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={linkClass("contact")}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="w-fit px-4 py-2 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] text-[#18181B] dark:text-[#FAFAFA] hover:bg-[#18181B] hover:text-white transition-all"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default Navbar;
