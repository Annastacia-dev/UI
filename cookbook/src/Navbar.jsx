import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import Icons from './Icons';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary w-full rounded-full text-white flex justify-between gap-5 shadow-sm">
      <ul className="md:flex hidden items-center gap-2 text-lg">
        <Icons />
      </ul>
      <div className="md:hidden flex items-center gap-2  p-3 text-xl">
        {!isOpen ? (
          <HiOutlineMenuAlt2 onClick={toggle} />
        ) : (
          <IoCloseSharp onClick={toggle} />
        )}
      </div>

      <p className="p-3 font-light">cookbook.</p>

      <button className="bg-secondary/10 hover:bg-secondary/30 rounded-full py-3 md:px-8 px-5 capitalize font-medium md:text-sm text-xs">
        sign up
      </button>

      <MobileNavbar isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
