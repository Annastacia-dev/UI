import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { menuItems } from "./data/navbarItems";

const Header = () => {
  const images = ["/dining.webp", "/office.webp", "/room.webp", "/room2.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [highlightedItems, setHighlightedItems] = useState([]);

  // Function to get four random menu items
  const getRandomItems = (items, num) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    // Set an interval to change the image every 5 seconds
    const imageIntervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Set initial highlighted items
    setHighlightedItems(getRandomItems(menuItems, 4));

    // Set an interval to change highlighted items every hour (3600000 ms)
    const highlightIntervalId = setInterval(() => {
      setHighlightedItems(getRandomItems(menuItems, 4));
    }, 3600000);

    // Clean up intervals
    return () => {
      clearInterval(imageIntervalId);
      clearInterval(highlightIntervalId);
    };
  }, [images.length]);

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="min-h-screen md:bg-gradient-to-r bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent pt-20 md:pt-40 pb-12 md:px-10 px-5">
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
              className="md:w-3/4 w-11/12 px-4 py-2 rounded-full bg-transparent border border-black placeholder:text-black"
              placeholder="search"
            />
            <IoSearch className="absolute text-2xl md:right-32 right-10 md:top-3 top-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-10 absolute">
          {highlightedItems.map((item) => (
            <a
              href={item.path}
              className="relative hover:scale-105"
              key={item.title}
            >
              <img
                src={item.image}
                className="rounded w-full h-48 object-cover"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-white opacity-20"></div>
              <p className="flex items-center gap-1 absolute top-2 left-3 text-black capitalize font-semibold text-xs">
                {item.title} <FaArrowRightLong />
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
