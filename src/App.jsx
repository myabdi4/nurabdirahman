import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`${dark ? "dark" : ""} bg-[#FAFAF9] dark:bg-[#09090B] transition-colors duration-300`}
    >
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="border-t border-[#E4E4E7] dark:border-[#27272A] py-8 text-center text-sm text-[#71717A]">
        © {new Date().getFullYear()} Nur Abdirahman. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
