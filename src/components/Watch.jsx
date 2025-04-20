import { watchModels } from "../data";

const Watch = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-greay-800 mt-20 mb-14">
        Which Apple Watch is right for you?
      </h2>
      <div className="flex justify-evenly">
        {watchModels.map((model, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-between p-4 m-2 rounded-lg ${
              index === 2 ? "hidden" : "flex"
            }`}
          >
            <div className="group 2xl:w-42 lg:w-48 sm:w-48 sm:h-48 flex relative h-[200px] w-[150px] md:h-72">
              <img
                src={model.imgs[1]}
                alt={model.name}
                className="w-full h-[200px] object-contain transition-opacity duration-500 absolute group-hover:opacity-100 opacity-0"
              />
              <img
                src={model.imgs[0]}
                alt={model.name}
                className="w-full h-[200px] object-contain transition-opacity duration-500 absolute group-hover:opacity-0"
              />
            </div>
            <a href="#" className="text-lg font-semibold text-gray-800 mb-2">
              {model.name}
            </a>
            <p className="text-blue-400 mb-3">{model.price}</p>

            {model.desc.map((desc, index) => (
              <p key={index} className="text-gray-600 text-base">
                {desc}
              </p>
            ))}
            <button className="mt-4 bg-blue-400 rounded-full px-4 text-white cursor-pointer">
              Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Watch;
