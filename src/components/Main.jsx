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
              <div className="sm:flex gap-4 sm:p-2 items-center">
                <img
                  className="sm:w-64 pb-5 rounded-lg"
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
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/myabdi4/myabdifoods"
                      target="_blink"
                      className=" p-2 rounded bg-green-800 w-max"
                    >
                      SOURCE CODE
                    </a>
                    <a
                      href="https://myabdifoods.netlify.app"
                      target="_blank"
                      className=" flex gap-2 text-center p-2 rounded bg-green-800 w-max"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      <p>aramofoods.com</p>
                    </a>
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
