import { useState } from "react";
import { macbookModels } from "../data";
const Macbooks = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedColors, setSelectedColors] = useState(0);

  const handleModelClick = (index) => {
    setSelectedModel(index);
    setSelectedColors(0);
  };

  const handleColorClick = (index) => {
    setSelectedColors(index);
  };

  const currentModel = macbookModels[selectedModel];
  const currentColor = currentModel.colors[selectedColors];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-semibold text-greay-800 my-14">
        Choose your new MacBookAir Air.
      </h2>
      <div className="flex justify-center">
        {macbookModels.map((model, index) => (
          <button
            key={model.chip}
            onClick={() => handleModelClick(index)}
            className={`${index === 0 ? "rounded-l-xl" : "rounded-r-xl"} ${
              selectedModel === index
                ? "border-blue-400 border-2"
                : "border-gray-800"
            } border-1 border-gray-500 px-3 py-1 cursor-pointer flex flex-col justify-evenly tracking-wide`}
          >
            <span className="font-semibold text-sm">
              With {`${model.chip}`} chip
            </span>
            <span className="text-xs text-gray-500 font-light">
              {model.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex- flex-col items-center 2xl:p-4 md:items-start">
        <div className="w-96 h-64">
          <img
            src={
              currentColor?.img ? currentColor.img : currentModel.colors[0].img
            }
            alt={`Mackbook air with ${currentModel.chip} chip`}
            className="w-full h-full object-contain"
          />
          <span className="md:text-left text-center">
            {currentColor?.label
              ? currentColor.label
              : currentModel.colors[0].label}
          </span>
          <div className="flex space-x-2 mb-4 justify-center md:justify-start mt-3">
            {currentModel.colors.map((color, index) => (
              <button
                key={color.bg}
                onClick={() => handleColorClick(index)}
                className={`rounded-full cursor-pointer w-6 h-6 border-2  ${
                  selectedColors === index
                    ? "border-blue-400"
                    : "border-gray-100"
                }`}
                style={{ backgroundColor: color.bg }}
              ></button>
            ))}
          </div>
          <img
            className="w-10 h-10 object-contain"
            src={currentModel.icon}
            alt={currentModel.icon}
          />
          <div className="grid grid-cols-2 space-x-10 space-y-2 mb-4 mt-3">
            {currentModel.specs.map((spec) => (
              <div key={spec} className="text-gray-500 text-base">
                {spec}
              </div>
            ))}
          </div>
          <button className=" bg-blue-400 rounded-full px-4 py-1 text-white cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Macbooks;
