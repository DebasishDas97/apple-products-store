import { iphoneModels } from "../data";
const Iphones = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-greay-800 my-20">
        Which Iphone is right for you?
      </h2>
      <div className="flex mt-8 justify-evenly">
        {iphoneModels.map((model, index) => (
          <div
            key={index}
            className={`flex-col items-center justify-between p-4 m-2 rounded-lg ${
              index === 2 ? "hidden" : "flex"
            }`}
          >
            <img
              src={model.img}
              alt={model.name}
              className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain"
            />
            <a
              href="#"
              className="md:text-xl text-lg font-semibold text-gray-800 mb-3"
            >
              {model.name}
            </a>
            <p className="text-gray-600 text-base">{model.description}</p>
            <p className="text-blue-400 mt-1">{model.price}</p>
            <button className="mt-4 bg-blue-400 rounded-full px-4 text-white cursor-pointer">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Iphones;
