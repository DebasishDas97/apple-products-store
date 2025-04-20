const Controlls = ({ toggleZoom, frameZoom, backToHome, activePage }) => {
  return (
    <div className="absolute top-2 right-2 gap-1 flex items-center z-10">
      <button
        onClick={toggleZoom}
        className="text-3xl text-pink-400 cursor-pointer hidden lg:block"
      >
        {frameZoom ? (
          <i className="bx bxs-zoom-out"></i>
        ) : (
          <i className="bx bxs-zoom-in"></i>
        )}
      </button>
      <button
        onClick={() => backToHome(0)}
        disabled={activePage === 0}
        className={`text-3xl ${
          activePage === 0
            ? "text-pink-100 cursor-not-allowed"
            : "text-pink-400 cursor-pointer"
        } `}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
};
export default Controlls;
