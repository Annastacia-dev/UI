import React from 'react';

const skinTypes = [
  'dry',
  'oily',
  'combination',
  'sensitive',
  'acne-prone',
  'normal',
];

const SkinQuizScreenTwo = ({ activeScreen, setActiveScreen }) => {
  return (
    <div
      className={`sm:h-[500px] h-[600px] bg-white shadow-lg p-5 ${activeScreen === 2 ? 'scale-105 border border-black' : ''}`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex bg-black text-tan rounded-full h-6 w-6 items-center justify-center text-xs">
          2
        </div>
        <p className="text-sm font-semibold">Skin Type</p>
        <hr className="border border-gray-500 w-1/4" />
      </div>

      <div className="flex flex-col justify-center items-center h-full gap-10">
        <h5 className="md:text-lg font-playfair text-gray-800">
          How would you describe your skin type?
        </h5>
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 sm:gap-5 gap-3 px-2 py-4">
            {skinTypes.map((type, index) => (
              <button
                key={index}
                className="text-xs font-medium border border-black p-2 capitalize rounded-full hover:bg-black hover:text-tan flex items-center justify-center"
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black bg-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
          </div>

          <button
            onClick={() => setActiveScreen(3)}
            className={` border border-black p-2 uppercase md:mt-5 mt-3 font-medium text-sm ${activeScreen === 2 ? 'bg-black text-tan' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinQuizScreenTwo;
