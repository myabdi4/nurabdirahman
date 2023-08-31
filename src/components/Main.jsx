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

          <div className="sm:p-10">
            {/* HERE ARE FOR PROJECTS */}
            <h1 className="text-2xl ml-40 font-bold sm:text-start">
              LATEST BLOGS
            </h1>
            <div className="sm:grid flex items-center justify-center">
              <div className="sm:grid sm:rid-col-2 justify-start sm:ml-40">
                {/* BLOG HERE 1 */}
                <div className="sm:flex sm:items-start gap-5 p-4">
                  <img
                    className="w-80 hover:cursor-pointer hover:shadow-lg rounded ml-10"
                    src="/blog.jpeg"
                    alt=""
                  />

                  <div className="flex flex-col gap-5 p-2 items-start">
                    <p className="text-justify  sm:w-3/4">
                      Savor the moment at Aramo Foods, where taste and speed
                      unite! Our crave-worthy menu delivers flavor-packed
                      burgers, crispy fries, and more – all served up swiftly
                      for your satisfaction. BiteBliss: Taste, Speed, Bliss!
                    </p>
                    <div>
                      <a
                        href="https://github.com/myabdi4/myabdifoods"
                        target="_blink"
                        className=" p-2 rounded bg-green-800 w-max"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>

                {/* BLOG HERE 1 */}
                <div className="sm:flex sm:items-start gap-5 p-4">
                  <img
                    className="w-80 hover:cursor-pointer hover:shadow-lg rounded ml-10"
                    src="/blog.jpeg"
                    alt=""
                  />

                  <div className="flex flex-col gap-5 p-2 items-start">
                    <p className="text-justify  sm:w-3/4">
                      Savor the moment at Aramo Foods, where taste and speed
                      unite! Our crave-worthy menu delivers flavor-packed
                      burgers, crispy fries, and more – all served up swiftly
                      for your satisfaction. BiteBliss: Taste, Speed, Bliss!
                    </p>
                    <div>
                      <a
                        href="https://github.com/myabdi4/myabdifoods"
                        target="_blink"
                        className=" p-2 rounded bg-green-800 w-max"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>

                {/* END HERE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
