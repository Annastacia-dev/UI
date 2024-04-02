import React from 'react';

const ProductCategories = () => {
  return (
    <ul className='flex md:flex-row flex-col gap-6 md:p-2 text-xs uppercase font-normal'>
      <li>
        <a
          aria-label="serums"
          href="#serums"
          className="hover:underline cursor-pointer"
        >
          serums
        </a>
      </li>
      <li>
        <a
          aria-label="cleansers"
          href="#cleansers"
          className="hover:underline cursor-pointer"
        >
          cleansers
        </a>
      </li>
      <li>
        <a
          aria-label="oils"
          href="#blog"
          className="hover:underline cursor-pointer"
        >
          oils
        </a>
      </li>
      <li>
        <a
          aria-label="moisturizers"
          href="#moisturizers"
          className="hover:underline cursor-pointer"
        >
          moisturizers
        </a>
      </li>
      <li>
        <a
          aria-label="masks"
          href="#masks"
          className="hover:underline cursor-pointer"
        >
          masks
        </a>
      </li>
      <li>
        <a
          aria-label="toners"
          href="#toners"
          className="hover:underline cursor-pointer"
        >
          toners
        </a>
      </li>
      <li>
        <a
          aria-label="exfoliators"
          href="#exfoliators"
          className="hover:underline cursor-pointer"
        >
          exfoliators
        </a>
      </li>
      <li>
        <a
          aria-label="eye care"
          href="#eye-care"
          className="hover:underline cursor-pointer"
        >
          eye care
        </a>
      </li>
      <li>
        <a
          aria-label="sunscreen"
          href="#sunscreen"
          className="hover:underline cursor-pointer"
        >
          sunscreen
        </a>
      </li>
    </ul>
  );
};

export default ProductCategories;
