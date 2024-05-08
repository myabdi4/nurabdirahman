import svgs from './svgs.json'

const Header = () => {
  // BURGER-MENU ICON
  const burgerMenu = (
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
  );

  const projectsIcon = svgs.projectsIcon;

  return (
    <>

      <div className="navbar-container">
        <div className="container">
          <div className="menu-content">
            <div>
              <p className="hover-nav font-bold"><a href="/">ABDIRAHMAN NUR</a></p>
            </div>
            <ul className="url-links hidden">
              <li className="hover-nav ">
                <a href="/#"> PROJECTS</a>
              </li>
              <li className="hover-nav">
                <a href="/#">BLOG</a>
              </li>
              <li className="hover-nav">
                <a href="/#">ABOUT</a>
              </li>
            </ul>

            {/* SMALL SCREEN */}
            <div className="sm:hidden">
              <details className="dropdown sm:px-8">
                <summary className="m-2 btn border border-gray-500 px-18">{burgerMenu}</summary>
                <ul className="p-2 border border-white shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32 left-12">
                  <li><a href="/#">PROJECTS</a></li>
                  {/* WHAT SHOULD HAPPEN WHEN YOU CLICK BLOG? */}
                  <li><a href="./BlogCard.jsx">BLOGS</a></li>
                  <li><a href="/#">ABOUT </a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
