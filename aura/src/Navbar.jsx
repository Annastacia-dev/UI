import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileNavbar from './MobileNavbar';
import { MdEmail, MdHeadphones } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handlePhone = () => {
    window.open('tel:+254768372439');
  };

  return (
    <nav className="absolute flex justify-between items-center z-10 ml-10 mt-10 sm:w-10/12 w-8/12 border-t pt-4 text-white">
      <div className="flex items-center gap-2 hover:-translate-y-1">
        <img
          src="/logo.png"
          width={24}
          height={28}
          alt="webcafe africa logo"
          className="sm:w-6 w-4 sm:h-6 h-4 animate-spin"
        />
        <a
          href="/"
          className="font-bold font-quicksand uppercase transition duration-500 ease-in-out transform sm:text-base text-sm"
        >
          aura
        </a>
      </div>
      <div className="absolute right-0 md:hidden">
        {!isOpen && <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />}
      </div>
      <ul className="hidden md:flex gap-6 p-2 font-normal text-sm uppercase">
        <li>
          <a aria-label="home" href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a
            aria-label="portfolio"
            href="/portfolio"
            className="hover:underline"
          >
            Portfolio
          </a>
        </li>
      </ul>
      <ul className="gap-3 text-2xl sm:flex hidden">
        <li>
          <a
            aria-label="email"
            href="mailto:info@webcafe.africa"
            className="hover:underline"
          >
            <MdEmail />
          </a>
        </li>
        <li>
          <button
            role="button"
            aria-label="phone"
            aria-labelledby="phone"
            onClick={handlePhone}
            className="hover:underline"
          >
            <MdHeadphones />
          </button>
        </li>
      </ul>
      <MobileNavbar isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default Navbar;