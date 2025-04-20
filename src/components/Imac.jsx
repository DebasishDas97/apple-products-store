import { useState } from "react";
import { imacModels } from "../data";

const Imac = () => {
  const [selectedColors, setSelectedColors] = useState(0);

  const handleColorClick = (index) => {
    setSelectedColors(index);
  };

  const currentModel = imacModels[selectedColors];

  return (
    <div className="grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] gap-3 w-full h-full">
      <>
        <div className="h-full row-span-2 bg-gray-50 p-5 flex w-full items-baseline md:items-center">
          <div className="absolute bottom-28">
            {imacModels.map((item, index) => (
              <div key={item.label} className=" flex items-center gap-1">
                <button
                  onClick={() => handleColorClick(index)}
                  aria-label={`Select color: ${item.label}`}
                  className={`rounded-full cursor-pointer w-6 h-6 border-1 my-1  ${
                    selectedColors === index
                      ? "border-blue-400"
                      : "border-gray-100"
                  }`}
                  style={{ backgroundColor: item.bg }}
                ></button>
                {index === selectedColors && <span>{item.label}</span>}
              </div>
            ))}
            <button className=" bg-blue-400 rounded-full px-4 py-1 mt-7 text-white cursor-pointer">
              Shop
            </button>
          </div>
          <img
            className="h-auto max-h-[440px] md:max-h-[700px] object-contain w-full"
            src={currentModel.images.side}
            alt={`${currentModel.label} side view`}
          />
        </div>
        <div className="bg-gray-50 p-5 flex items-center justify-center">
          <img
            src={currentModel.images.front}
            alt={`${currentModel.label} front view`}
          />
        </div>
        <div className="bg-gray-50 p-5 flex items-center justify-center">
          <img
            src={currentModel.images.back}
            alt={`${currentModel.label} back view`}
          />
        </div>
      </>
    </div>
  );
};
export default Imac;
