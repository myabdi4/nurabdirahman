import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ENVIRONEMTAL VARIABLES
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseToken = import.meta.env.VITE_SUPABASE_TOKEN;

// DATABASE CONNECTION
const supabase = createClient(supabaseUrl, supabaseToken);

const Main = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data } = await supabase.from("projects").select();
    setProjects(data);
  }

  return (
    <>
      <div className="mainContent">
        <div className="w-auto">
          <div className="sm:p-20">
            <h1 className="border-b-2 text-2xl border-gray-600">
              LATEST PROJECTS
            </h1>
            <div className="flex sm:flex-col pt-5 gap-2 ">
              <div className="sm:flex gap-4 sm:p-2 items-center">
                <img
                  className="sm:w-64 hover:cursor-pointer hover:shadow-lg object-cover rounded"
                  src="/chicken.jpg"
                  alt=""
                />
                <div className="flex flex-col gap-5 ">
                  <h2 className="text-2xl pt-4 uppercase sm:text-start text-center">
                    {/* ENTER HERE */}
                    <ul>
                      {projects.map((project) => (
                        <li key={project.title}>{project.title}</li>
                      ))}
                    </ul>
                  </h2>
                  <div className="text-lg sm:w-4/5 ">
                    <ul>
                      {projects.map((project) => (
                        <li key={project.description}>{project.description}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex gap-5">
                      <a
                        href="https://github.com/myabdi4/myabdifoods"
                        target="_blink"
                        className=" p-2 rounded bg-green-800 w-max"
                      >
                        SOURCE CODE
                      </a>

                      <a
                        href="https://myabdifoods.netlify.app/"
                        target="_blink"
                        className=" p-2 rounded bg-green-800 w-max"
                      >
                        🌐 MYABDIFOODS.COM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
