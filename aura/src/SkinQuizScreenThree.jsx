import React from 'react';

const skinCareSteps = [
  {
    title: 'Cleanse',
    image:
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-face-wash-skincare-flaticons-lineal-color-flat-icons.png',
  },
  {
    title: 'Tone',
    image:
      'https://img.icons8.com/external-others-pike-picture/50/external-Clarifier-cosmetics-others-pike-picture.png',
  },
  {
    title: 'Serum',
    image:
      'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-serum-cosmetics-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png',
  },
  {
    title: 'Moisturize',
    image:
      'https://img.icons8.com/external-justicon-flat-justicon/64/external-moisturizer-cosmetics-justicon-flat-justicon.png',
  },
  {
    title: 'Spf',
    image:
      'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-sunscreen-beach-wanicon-flat-wanicon.png',
  },
  {
    title: 'Mask',
    image: 'https://img.icons8.com/fluency/48/spa-mask.png',
  },
];

const SkinQuizScreenThree = ({ activeScreen, setActiveScreen }) => {
  return (
    <div
      className={`sm:h-[500px] h-[600px] bg-white shadow-lg p-5 ${activeScreen === 3 ? 'scale-105 border border-black' : ''}`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex bg-black text-tan rounded-full h-6 w-6 items-center justify-center text-xs">
          3
        </div>
        <p className="text-sm font-semibold">Current Routine</p>
        <hr className="border border-gray-500 w-1/4" />
      </div>

      <div className="flex flex-col justify-center items-center h-full md:gap-5 gap-2">
        <h5 className="md:text-lg font-playfair text-gray-800">
          What is your current skincare routine? (Select all that apply)
        </h5>
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-3 px-2 py-4">
            {skinCareSteps.map((step, index) => (
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col bg-gray-50 shadow-lg gap-3 px-4 py-2 justify-center items-center">
                  <img src={step.image} alt={step.title} className="w-8 h-8" />

                  <p className="text-xs font-semibold">{step.title}</p>
                </div>
                <div className="rounded-full border border-black h-2 w-2 hover:bg-black"></div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black  text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black bg-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
            <div className="rounded-full border-2 border-black text-tan h-2 w-2 items-center justify-center text-xs"></div>
          </div>

          <button
            onClick={() => setActiveScreen(4)}
            className={` border border-black p-2 uppercase md:mt-5 mt-2 font-medium text-sm ${activeScreen === 3 ? 'bg-black text-tan' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinQuizScreenThree;
