import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  const images = ["/dining.webp", "/office.webp", "/room.webp", "/room2.webp"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change every 3 seconds

    return () => clearInterval(intervalId); // clean up the interval on component unmount
  }, [images.length]);

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="min-h-screen md:bg-gradient-to-r bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent  pt-32 pb-12 px-10">
        <div className="md:w-1/2 flex flex-col gap-8">
          <h1 className="md:text-7xl text-5xl font-semibold">
            where comfort <br /> meets style.
          </h1>
          <p className="text-sm leading-6 md:w-3/4">
            Discover timeless designs and exceptional craftsmanship that
            transform your home into a sanctuary. From elegant living spaces to
            cozy corners, our furniture is built to inspire and last.
          </p>
          <div className="relative md:w-3/4">
            <input
              className="md:w-3/4 w-11/12 px-4 py-2 rounded-full bg-transparent border border-black mt-4 placeholder:text-black"
              placeholder="search"
            />
            <IoSearch className="absolute text-2xl md:right-32 right-10 top-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <a href="/dining" className="relative">
              <img src="/dining.webp" className="rounded hover:scale-105" />
              <p className="flex items-center gap-1 absolute top-2 left-3 text-black capitalize font-semibold text-sm">
                dining <FaArrowRightLong />
              </p>
            </a>
            <a href="/living-room" className="relative">
              <img src="/room.webp" className="rounded hover:scale-105" />
              <p className="flex items-center gap-1 absolute top-2 left-3 text-black capitalize font-semibold text-sm">
                living room <FaArrowRightLong />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
