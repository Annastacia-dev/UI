import React from 'react';

const Header = () => {
  return (
    <header
      className="min-h-[80vh] bg-cover bg-fixed md:bg-center bg-right bg-no-repeat relative"
      style={{
        backgroundImage: `url('background.jpg')`,
      }}
    >
      <div className="absolute bg-black/30 min-h-[80vh] w-full">
        <div className="absolute bottom-36 px-5 text-white">
          <h5 className="text-2xl font-playfair">
            transform your skin,
            <br />
            illuminate your confidence
          </h5>
          <button className="border border-tan hover:bg-tan hover:text-black text-white px-4 py-2 mt-4">
            Shop Now {'->'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
