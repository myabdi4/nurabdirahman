const Main = () => {
  return (
    <>
      <div className="mainContent">
        <div className="w-auto">
          <div className="sm:p-20">
            <h1 className="border-b-2 text-2xl border-gray-600">
              LATEST PROJECTS
            </h1>
            <div className="flex sm:flex-col pt-5 gap-2 ">
              <div className="sm:flex gap-4 sm:p-2 items-center ">
                <img
                  className="sm:w-64 w-max pb-5 rounded hover:cursor-pointer hover:shadow-lg object-cover"
                  src="/chicken.jpg"
                  alt=""
                />
                <div className="flex flex-col gap-5 ">
                  <h2 className="text-xl uppercase sm:text-start text-center">
                    ARAMO FOODS
                  </h2>
                  <div className="text-lg sm:w-4/5 ">
                    Savor the moment at Aramo Foods, where taste and speed
                    unite! Our crave-worthy menu delivers flavor-packed burgers,
                    crispy fries, and more – all served up swiftly for your
                    satisfaction. BiteBliss: Taste, Speed, Bliss!
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
