import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoSearch } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute flex justify-between items-center z-10 px-5 py-2 border border-black pt-4 mt-3 ml-10 w-11/12 bg-black/60 text-white ">
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="font-playfair transition duration-500 ease-in-out transform text-xl font-bold"
        >
          aura
        </a>
      </div>
      <div className="absolute right-0 md:hidden">
        {!isOpen && <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />}
      </div>
      <ul className="hidden md:flex gap-6 p-2 font-normal text-sm capitalize">
        <li>
          <a aria-label="home" href="/" className="hover:underline">
            our story
          </a>
        </li>
        <li>
          <a
            aria-label="products"
            href="#products"
            className="hover:underline"
          >
            products
          </a>
        </li>
        <li>
          <a
            aria-label="blog"
            href="#blog"
            className="hover:underline"
          >
            blog
          </a>
        </li>
      </ul>
      <ul className="gap-3 text- sm:flex hidden">
        <li>
          <IoSearch />
        </li>
        <span className="border-r border-white h-5"></span>
        <li>
          <BiSolidUser />
        </li>
        <span className="border-r border-white h-5"></span>
        <li>
          <GiShoppingBag />
        </li>
      </ul>
      <MobileNavbar isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default Navbar;