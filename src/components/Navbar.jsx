import { navItems } from "../data";
const Navbar = ({
  activePage,
  handleNavClick,
  isNavbarOpen,
  setIsNavbarOpen,
}) => {
  return (
    <>
      <div
        className={`2xl:w-80 xl:w-64 w-44 h-full bg-[#f6f4f4] flex flex-col justify-between pt-5  pb-14 md:pb-0 absolute md:relative z-10 md:translate-0 ${
          isNavbarOpen ? "px-4" : "-translate-x-110 px-8"
        }  transition-transform duration-300`}
      >
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl font-light text-red-600 mb-14 tracking-wider"
        >
          Apple Products
        </a>
        <div className="flex flex-col flex-grow">
          {navItems.map((item, index) => (
            <a
              onClick={() => handleNavClick(index)}
              key={item.label}
              href="#"
              className="xl:w-44 lg:w-36 w-30 flex items-center justify-between text-left my-3.5 cursor-pointer w-full"
            >
              <i className={`${item.icon} text-xl text-pink-400`}></i>
              <span className="text-lg text-gray-500 mr-auto mx-2.5 tracking-wider">
                {item.label}
              </span>
              <i
                className={`${
                  activePage === index ? item.activeIcon : item.inactiveIcon
                } text-xl text-yellow-400`}
              ></i>
            </a>
          ))}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          <a href="#">
            <i className="bx bxl-instagram text-2xl text-pink-500"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter text-2xl text-pink-500"></i>
          </a>
          <a href="#">
            <i className="bx bxl-facebook text-2xl text-pink-500"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube text-2xl text-pink-500"></i>
          </a>
        </div>
      </div>
      <button
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        className="fixed md:hidden bottom-4 left-4 p-2 text-4xl text-blue-400 z-30"
      >
        {isNavbarOpen ? (
          <i className="bx bx-x"></i>
        ) : (
          <i className="bx bx-menu"></i>
        )}
      </button>
    </>
  );
};
export default Navbar;
