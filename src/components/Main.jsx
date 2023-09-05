import Blog from "./Blog";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ENVIRONEMTAL VARIABLES
const supabaseToken = import.meta.env.VITE_SUPABASE_TOKEN;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

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
            {/* HERE ARE FOR PROJECTS */}
            <h1 className="text-2xl sm:ml-40 font-bold text-center sm:text-start">
              LATEST PROJECTS
            </h1>
            <div className="flex sm:flex-col pt-5 gap-2 ">
              <div className="flex flex-wrap justify-center">
                {/* CARDS HERE 1 */}
                <div className="image flex flex-col gap-3 items-center p-4">
                  <img
                    className="sm:w-80 hover:cursor-pointer hover:shadow-lg object-cover rounded"
                    src="/chicken.jpg"
                    alt=""
                  />
                  <div className="flex gap-2">
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

                {/* END HERE */}
              </div>
            </div>
          </div>

          <Blog />
        </div>
      </div>
    </>
  );
};

export default Main;
