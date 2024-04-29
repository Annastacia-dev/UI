const Header = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-16 px-10 min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl leading-tight font-coolvetica tracking-wide">
          handmade,
          <br />
          with an extra
          <br />
          pinch of love
        </h1>
        <p className="leading-7 font-light text-sm mt-5 sm:w-3/4">
          We take pride in crafting every item by hand, ensuring that each bite
          is filled with the love and care that only homemade treats can offer.
          From our freshly baked bread to our decadent pastries, every product
          is made with the finest ingredients and a dedication to quality.
          Explore our menu and taste the difference of handmade goodness today.
        </p>
        <button className="bg-primary py-3 px-6 rounded-md text-darkgrey mt-5 sm:w-40">
          Explore Menu
        </button>
      </div>
      <div className="relative">
        <div className="bg-black sm:-mt-5  flex justify-center items-center md:border-[12px] border-4 border-white h-[50vh] md:w-3/4 overflow-hidden">
          <video
            className="h-[50vh] w-full object-cover"
            src="https://res.cloudinary.com/dlahz5ciz/video/upload/v1712821455/bakingvideo_ouzxfr.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="bg-black absolute sm:bottom-20 -bottom-48 sm:right-0 -right-6  flex justify-center items-center md:border-[12px] border-4 border-white h-[50vh] md:w-3/4 overflow-hidden">
          <video
            className="h-[50vh] w-full object-cover"
            src="https://res.cloudinary.com/dlahz5ciz/video/upload/v1714324306/5380369-uhd_2160_4096_30fps_yqopso.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Header;
