import { useEffect, useState } from "react";
import Controlls from "./components/Controlls";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphones from "./components/Iphones";
import Macbooks from "./components/Macbooks";
import Watch from "./components/Watch";
import Imac from "./components/Imac";
import PageTransition from "./components/PageTransition";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerHeight > 1024);
    };
    if (window.innerWidth < 1024) {
      setFrameZoom(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleNavClick(pageIndex) {
    setActivePage(pageIndex);
    setIsNavbarOpen(false);
  }
  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  return (
    <div className="w-full h-screen grid place-items-center relative">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-300 flex`}
      >
        <Navbar
          activePage={activePage}
          handleNavClick={handleNavClick}
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
        />
        <Controlls
          backToHome={handleNavClick}
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          activePage={activePage}
        />
        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <Iphones />
            <Macbooks />
            <Watch />
            <Imac />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};
export default App;
