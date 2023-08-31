const Footer = () => {
  return (
    <>
      <nav className="navbar-background">
        <div className="navbar-container border-t border-gray-700 ">
          <div className="container p-6 text-white">
            <div className="justify-center space-x-4 text-lg">
              <ul className="flex justify-center space-x-4">
                <li className="bg-gray-300  p-1 w-10 hover:bg-green-300">
                  <a href="/">
                    <img src="github.png" alt="" />
                  </a>
                </li>
                <li className="bg-gray-300 p-1 w-10 hover:bg-green-300">
                  <a href="/">
                    <img src="linkedin.png" alt="" />
                  </a>
                </li>
                <li className="bg-gray-300 p-1 w-10 hover:bg-green-300">
                  <a href="/">
                    <img src="twitter.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
