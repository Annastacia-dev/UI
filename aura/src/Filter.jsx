import React from 'react';
import { IoFilter } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';

const Filter = ({ toggle }) => {
  return (
    <div className="flex flex-col text-sm md:absolute  md:mt-0 mt-10">

      <IoCloseSharp className="text-2xl text-tan md:hidden absolute top-3 right-2 cursor-pointer" onClick={toggle} />

      <div className="flex items-center gap-2">
        <IoFilter className="text-2xl text-tan" />
        <h5 className="font-bold uppercase">Filters</h5>
      </div>
      <hr className="border border-gray-200 my-1" />

      <div className="flex flex-col gap-6 mt-2">
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold capitalize">Categories</h5>
          <div className="flex flex-col gap-1">
            <label>
              <input type="checkbox" className="mr-2" />
              Skincare
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              Wellness
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              Haircare
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-semibold capitalize">Price</h5>
          <div className="flex flex-col gap-1">
            <label>
              <input type="checkbox" className="mr-2" />
              $0 - $50
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              $50 - $100
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              $100 - $200
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-semibold capitalize">Skin Type</h5>
          <div className="flex flex-col gap-1">
            <label>
              <input type="checkbox" className="mr-2" />
              oily
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              Dry
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              Combination
            </label>
            <label>
              <input type="checkbox" className="mr-2" />
              Normal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
