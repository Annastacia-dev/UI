import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

const Header = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 mt-3">
      <div className="flex flex-col gap-2">
        <div className="bg-tertiary px-5 py-5 rounded-lg flex flex-col items-start gap-5">
          <h1 className="text-4xl font-bold">
            Cookbooks from around the world
          </h1>
          <p className="text-sm md:w-10/12 leading-7">
            Welcome to your culinary community hub! Whether you're an aspiring
            chef with a collection of treasured recipes or a food enthusiast
            looking to discover new flavors, our platform is for you. Upload
            your own cookbooks, explore those shared by others, and connect with
            fellow food lovers.
          </p>
          <button className="bg-primary px-8 py-3 rounded-full flex items-center gap-4 text-white capitalize font-medium">
            join now
            <FaArrowRightLong />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-[200px] relative rounded-lg">
            <img
              src="/cocktail.jpeg"
              className="object-cover object-center h-full w-full rounded-lg"
            />
            <MdOutlineArrowCircleRight className="text-2xl text-secondary cursor-pointer hover:text-primary absolute top-3 left-3" />
          </div>
          <div className="h-[200px] relative rounded-lg">
            <img
              src="/cupcake.jpeg"
              className="object-cover object-center h-full w-full rounded-lg"
            />
            <MdOutlineArrowCircleRight className="text-2xl text-secondary cursor-pointer hover:text-primary absolute top-3 left-3" />
          </div>
        </div>
      </div>

      <div className="md:h-[555px] h-[300px] relative rounded-lg">
        <img
          src="/pasta.jpeg"
          className="object-cover object-center h-full w-full rounded-lg"
        />
        <MdOutlineArrowCircleRight className="text-2xl text-secondary cursor-pointer hover:text-primary absolute top-3 left-3" />
      </div>
    </div>
  );
};

export default Header;
