const Header = () => {
  return (
    <>
      <nav className="navbar-background">
        <div className="navbar-container border-b border-gray-700">
          <div className="container p-6 mx-auto text-white">
            <div className="sm:grid sm:grid-cols-3 grid grid-cols-2 sm:justify-center sm:space-x-4 text-lg">
              <p className="hover:text-green-400 hover:cursor-pointer">
                <a href="/">ABDIRAHMAN NUR</a>
              </p>
              <ul className="url-links ">
                <li className="hover:text-green-400 ">
                  <a href="/">PROJECTS</a>
                </li>
                <li className="hover:text-green-400">
                  <a href="/">BLOG</a>
                </li>
                <li className="hover:text-green-400">
                  <a href="/">ABOUT</a>
                </li>
              </ul>
              <p className="sm:hidden flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
