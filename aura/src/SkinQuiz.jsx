import { useState } from 'react';
import SkinQuizScreenOne from './SkinQuizScreenOne';
import SkinQuizScreenTwo from './SkinQuizScreenTwo';
import SkinQuizScreenThree from './SkinQuizScreenThree';
import SkinQuizScreenFour from './SkinQuizScreenFour';
import { oilyProducts } from './data/oilySkinProducts';

const SkinQuiz = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="bg-tan/20 py-16 sm:px-5 px-2">
      <div className="flex flex-col gap-2">
        <h5 className="font-playfair font-bold capitalize text-xl">
          Discover Your Ideal Skincare Routine
        </h5>
        <p className="text-sm text-gray-800 md:w-1/2">
          Our skincare quiz is designed to help you find the perfect skincare
          routine tailored to your unique needs. Answer these questions to
          uncover the best products and practices for your skin type and
          concerns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 gap-10 mt-10">
        <SkinQuizScreenOne
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
        <SkinQuizScreenTwo
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
        <SkinQuizScreenThree
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
        <SkinQuizScreenFour
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
      </div>

      <div className="p-5 grid md:grid-cols-3 mt-16 gap-6" id="recommendations">
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="font-playfair text-2xl text-gray-800">
            Recommended products from your Quiz
          </h5>

          <p className="text-sm text-left">
            You have an oily skin type. Your current skincare routine includes
            cleansing, moisturizing, and SPF. You are looking for products that
            will help control oil production and reduce the appearance of pores.
          </p>

          <p className="text-sm text-left">
            Based on your answers, we recommend the following products to help
            you achieve your skincare goals.
          </p>

          <p className="text-sm text-left">
            Add everything as a bundle and save 10%
          </p>

        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {oilyProducts.slice(0, 6).map((product) => (
            <div className="bg-white border p-1 rounded shadow-md">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-36 w-full object-cover hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <h5 className="text-sm font-semibold mt-3 px-2">{product.title}</h5>
              <div className="flex justify-between items-center mt-3 px-2">
                <p className="text-gray-500 text-xs mt-1">
                  {product.description.slice(0, 20)}
                  {product.description.length > 20 ? '...' : ''}
                </p>
                <p className="text-xs text-gray-500 ml-1 relative">
                  {product.rating} ({Math.floor(Math.random() * 100)})
                </p>
              </div>
              <div className="px-2 flex items-center">
                <button className="border border-black text-sm font-bold uppercase  mt-3 mb-2 w-full  px-4 py-2 hover:bg-black hover:text-white">
                  add to bag
                </button>
                <button className="border border-l-0 border-black text-sm font-bold uppercase  mt-3 mb-2 w-1/2  px-4 py-2">
                  ${product.price}
                </button>
              </div>
            </div>
          ))}
          <p className="text-xs font-medium mb-5">
            add everything as a bundle and save 10%
          </p>
          <div className='flex justify-center items-center'>
            <button
              className="border border-black text-sm font-bold uppercase  mt-3 mb-2 px-4 py-2 hover:bg-black hover:text-white absolute right-20 -bottom-10  cursor-pointer"
            >
              add as bundle
            </button>
            <button
              className="border border-black text-sm font-bold uppercase  mt-3 mb-2 px-4 py-2 hover:bg-black hover:text-white absolute right-3 -bottom-10  cursor-pointer"
            >
              $100
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinQuiz;
