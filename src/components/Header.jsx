const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".url-links");
    menu.classList.toggle("hidden");
  };

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

  return (
    <>
      <nav className="navbar-background">
        <div className="navbar-container">
          <div className="container">
            <div className="menu-content">
              <p className="hover-nav font-bold">
                <a href="/">ABDIRAHMAN NUR</a>
              </p>

              <ul className="url-links hidden">
                <li className="hover-nav ">
                  <a href="/projects">PROJECTS</a>
                </li>
                <li className="hover-nav">
                  <a href="/blogs">BLOG</a>
                </li>
                <li className="hover-nav">
                  <a href="#">ABOUT</a>
                </li>
              </ul>

              <p className={"menu-burger"} onClick={toggleMenu}>
                {burgerMenu}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
