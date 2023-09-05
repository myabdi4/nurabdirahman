function Blog() {
  return (
    <>
      {" "}
      <div className="sm:p-10">
        {/* HERE ARE FOR PROJECTS */}
        <h1 className="text-2xl ml-40 font-bold sm:text-center">LATEST BLOGS</h1>
        <div className="sm:grid flex items-center justify-center">
          <div className="sm:grid sm:rid-col-2 justify-start sm:ml-40">
            {/* BLOG HERE 1 */}
            <div className="md:flex gap-5 p-4 items-center">
              <img
                className="w-80 hover:cursor-pointer hover:shadow-lg rounded sm:ml-10"
                src="/blog.jpeg"
                alt=""
              />

              <div className="flex flex-col gap-5 p-2 items-start">
                <p className="text-justify  sm:w-3/4">
                  Savor the moment at Aramo Foods, where taste and speed unite!
                  Our crave-worthy menu delivers flavor-packed burgers, crispy
                  fries, and more – all served up swiftly for your satisfaction.
                  BiteBliss: Taste, Speed, Bliss!
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
    </>
  );
}

export default Blog;
