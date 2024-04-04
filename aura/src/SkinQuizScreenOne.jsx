import React from 'react';

const SkinQuizScreenOne = ({ activeScreen, setActiveScreen }) => {
  console.log(activeScreen);

  return (
    <div
      className={`sm:h-[500px] h-[600px] bg-white shadow-lg p-5 ${activeScreen === 1 ? 'scale-105 border border-black' : ''}`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex  bg-black text-tan rounded-full h-6 w-6 items-center justify-center text-xs">
          1
        </div>
        <p className="text-sm font-semibold">Personal Details</p>
        <hr className="border border-gray-500 w-1/4" />
      </div>

      <div className="flex flex-col justify-center items-center h-full sm:gap-10 gap-4">
        <h5 className="md:text-lg font-playfair text-gray-800">
          Tell us about yourself?
        </h5>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="p-2 border border-gray-300 text-sm placeholder:text-sm"
          />

          <div className="flex flex-col gap-6 bg-tan/20 px-3 py-6">
            <button className="text-sm font-medium border border-black p-2 uppercase">
              select a photo
            </button>
            <button className="text-sm font-medium border border-black p-2 uppercase">
              take a photo
            </button>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="rounded-full border-2 border-black bg-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
          </div>

          <button
            onClick={() => setActiveScreen(2)}
            className={` border border-black p-2 uppercase md:mt-5 mt-2 font-medium text-sm ${activeScreen === 1 ? 'bg-black text-tan' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinQuizScreenOne;
