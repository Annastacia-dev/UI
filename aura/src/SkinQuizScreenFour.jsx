import React from 'react';

const SkinQuizScreenFour = ({ activeScreen, setActiveScreen }) => {
  return (
    <div
      className={`sm:h-[500px] h-[600px] bg-white shadow-lg p-5 ${activeScreen === 4 ? 'sm:scale-105 scale-95 border border-black' : ''}`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex bg-black text-tan rounded-full h-6 w-6 items-center justify-center text-xs">
          4
        </div>
        <p className="text-sm font-semibold">Results</p>
        <hr className="border border-gray-500 w-1/4" />
      </div>

      <div className="flex flex-col justify-center items-center h-full gap-5">
        <h5 className="text-lg font-playfair text-gray-800">
          Based on your answers ...
        </h5>
        <div className="flex flex-col gap-4">
          <p className="text-xs text-left">
            You have an oily skin type. Your current skincare routine includes
            cleansing, moisturizing, and SPF. You are looking for products that
            will help control oil production and reduce the appearance of pores.
          </p>

          <img
            src="products/oily.jpeg"
            alt="mask"
            className="w-40 h-40 object-cover ml-8"
          />

          <div className="flex gap-2 justify-center items-center">
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black bg-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
          </div>

          <button
            href="#recommendations"
            onClick={() => setActiveScreen(1)}
            className={` border border-black p-2 uppercase mt-5 font-medium text-sm ${activeScreen === 4 ? 'bg-black text-tan' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinQuizScreenFour;
