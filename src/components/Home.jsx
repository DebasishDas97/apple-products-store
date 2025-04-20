import { items } from "../data";
const Home = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full bg-gray-50 h-full">
      {items.map((item) => (
        <div
          key={item.pageIndex}
          onClick={() => onNavigate(item.pageIndex)}
          className="flex flex-col flex-grow items-center justify-center bg-white"
        >
          <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide mb-12">
            {item.label}
          </span>
          <img
            src={item.img}
            alt="Iphone"
            className="max-w-[65%] max-h-[65%] object-contain"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
};
export default Home;
