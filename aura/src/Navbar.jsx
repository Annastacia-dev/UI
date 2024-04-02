import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { BiSolidUser } from 'react-icons/bi';
import { GiShoppingBag } from 'react-icons/gi';
import MobileNavbar from './MobileNavbar';
import { IoCloseSharp } from 'react-icons/io5';
import ProductCategories from './ProductCategories';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="md:absolute fixed flex justify-between items-center z-10 px-10 py-1 border border-khaki w-full bg-black/80 text-tan">
        <div className="absolute right-10 md:hidden">
          {!isOpen ? (
            <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />
          ) : (
            <IoCloseSharp className="text-xl" onClick={toggle} />
          )}
        </div>

        <ul className="hidden md:flex gap-6 p-2  text-sm capitalize font-semibold">
          <li className="hover:text-white cursor-pointer">
            <a
              aria-label="our story"
              href="#story"
              className="hover:underline hover:text-white cursor-pointer"
            >
              our story
            </a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a
              aria-label="products"
              href="#products"
              className="hover:underline hover:text-white cursor-pointer"
            >
              products
            </a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a
              aria-label="blog"
              href="#blog"
              className="hover:underline hover:text-white cursor-pointer"
            >
              blog
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/"
            className="font-playfair transition duration-500 ease-in-out transform text-xl font-bold cursor-pointer"
          >
            aura
          </a>
        </div>

        <ul className="gap-3 sm:flex hidden">
          <li className="hover:text-white cursor-pointer">
            <IoSearch />
          </li>
          <span className="border-r border-tan h-5"></span>
          <li className="hover:text-white cursor-pointer">
            <BiSolidUser />
          </li>
          <span className="border-r border-tan h-5"></span>
          <li className="hover:text-white cursor-pointer">
            <GiShoppingBag />
          </li>
        </ul>
        <MobileNavbar isOpen={isOpen} toggle={toggle} />
      </nav>

      <nav className="absolute md:flex hidden justify-between mt-[46px] items-center z-10 px-10 py-1 w-full bg-tan/80 text-black">
        <div></div>

        <ul className="md:flex hidden">
          <ProductCategories />
        </ul>

        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
