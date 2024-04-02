import React from 'react';
import { FaStar } from 'react-icons/fa';

import { products } from './data/products';

const BestPicks = () => {
  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="flex flex-col gap-2">
        <h5 className="font-playfair font-bold capitalize text-xl">
          best picks
        </h5>
        <div class="flex sm:flex-row flex-col justify-between gap-4">
          <p className="sm:text-sm text-xs text-gray-500">
            Not sure where to start? These are our best picks.
          </p>
          <p className="text-xs font-bold uppercase hover:underline">
            personalized skin quiz {'->'}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {products.slice(0, 4).map((product) => (
          <div class="bg-white border p-1 rounded shadow-md">
            <div class="h-40 w-full">
              <img
                src={product.image}
                alt={product.title}
                class="h-40 w-full object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h5 class="text-sm font-semibold mt-3 px-2">{product.title}</h5>
            <div class="flex justify-between items-center mt-3 px-2">
              <p class="text-gray-500 text-xs mt-1">
                {product.description.slice(0, 20)}
                {product.description.length > 20 ? '...' : ''}
              </p>
              <p class="text-xs text-gray-500 ml-1 relative">
                {product.rating} ({Math.floor(Math.random() * 100)})
                <span className="absolute -left-2 -top-2">
                  <FaStar className="text-2xl opacity-20" />
                </span>
              </p>
            </div>
            <div className="px-2">
              <button class="border border-black text-sm font-bold uppercase  mt-3 mb-2 w-full relative flex justify-between">
                <p className="px-4 py-2 ml-8 "> add to bag</p>
                <span class="px-3 py-2 absolute right-2 border-l border-black">
                  + ${product.price}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPicks;
