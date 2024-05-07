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
              <div> 
                <p className="hover-nav font-bold"><a href="/">ABDIRAHMAN NUR</a></p>
              </div>
              <ul className="url-links hidden">
                <li className="hover-nav ">
                  <a href="/#">PROJECTS</a>
                </li>
                <li className="hover-nav">
                  <a href="/#">BLOG</a>
                </li>
                <li className="hover-nav">
                  <a href="/#">CONTACT ME</a>
                </li>
              </ul>

              {/* BIG SCREEN */}
              <div className="sm:hidden">
                <details className="dropdown">
                  <summary className="m-2 btn justify-center">{burgerMenu}</summary>
                    <ul className="p-2 w-32 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-42">
                      <li><a href="/projects">PROJECTS</a></li>
                      <li><a href="/projects">BLOGS</a></li>
                      <li><a href="/projects">CONTACT</a></li>
                    </ul>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div className="p-5 grid items-end ">
        <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>CHECK SITE STATUS</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4 text-center">THIS WEBSITE IS UNDER CONSTRUCTION!</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        </div>
        
      </nav>
    </>
  );
};

export default Header;
