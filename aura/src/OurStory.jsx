import React from 'react';

const OurStory = () => {
  return (
    <div className="bg-tan/20 py-10 px-5" id="story">
      <div className="relative flex flex-col justify-center  md:mt-20 mt-10">
        <h5 className="font-playfair text-2xl md:ml-60 ml-0 mb-6">
          holistic beauty and wellness
          <br />
          unveil your natural beauty
        </h5>
        <div class="grid sm:grid-cols-2 gap-4">
          <div className="flex  gap-2">
            <img
              src="imageone.jpeg"
              alt="our story"
              className="w-1/2 h-96 object-cover mt-6"
            />
            <img
              src="imagetwo.jpeg"
              alt="our story"
              className="w-1/4 h-96 object-cover mt-2 md:flex hidden"
            />
            <img
              src="imagethree.jpeg"
              alt="our story"
              className="w-1/2 h-96 object-cover mt-10 "
            />
          </div>

          <p className="text-sm mt-5 leading-relaxed md:ml-24 ml-0">
            <h5 className="font-playfair font-bold capitalize text-xl mb-2">
              our story
            </h5>
            We believe that beauty is more than skin deep. Our products are
            designed to help you feel good and look good. We use only the best
            ingredients to create products that are safe, effective, and
            sustainable. Our mission is to help you look and feel your best
            every day. We believe that beauty is more than skin deep. Our
            products are designed to help you feel good and look good. We use
            only the best ingredients to create products that are safe,
            effective, and sustainable. Our mission is to help you look and feel
            your best every day.
            <br />
            <br />
            Our products are designed to help you feel good and look good. We
            use only the best ingredients to create products that are safe,
            effective, and sustainable. Our mission is to help you look and feel
            your best every day. We believe that beauty is more than skin deep.
            Our products are designed to help you feel good and look good. We
            use only the best ingredients to create products that are safe,
            effective, and sustainable. Our mission is to help you look and feel
            your best every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
