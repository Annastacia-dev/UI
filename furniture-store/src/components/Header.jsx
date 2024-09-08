import { useState, useEffect } from "react";

const Header = () => {
  const images = [
    "/dining.webp",
    "/office.webp",
    "/room.webp",
    "/room2.webp",
  ];

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
    ></div>
  );
};

export default Header;
