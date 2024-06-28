import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import Icons from './Icons';
import MobileNavbar from './MobileNavbar';
import SignUp from './SignUp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSignUp = () => setIsSignUpOpen(!isSignUpOpen);

  return (
    <nav className="bg-primary w-full rounded-full text-white flex justify-between gap-5 shadow-sm">
      <ul className="md:flex hidden items-center gap-2 text-lg">
        <Icons />
      </ul>
      <div className="md:hidden flex items-center gap-2  p-3 text-xl">
        {!isMenuOpen ? (
          <HiOutlineMenuAlt2 onClick={toggleMenu} />
        ) : (
          <IoCloseSharp onClick={toggleMenu} />
        )}
      </div>

      <p className="p-3 font-light">cookbook.</p>

      <button
        className="bg-secondary/10 hover:bg-secondary/30 rounded-full py-3 md:px-8 px-5 capitalize font-medium md:text-sm text-xs"
        onClick={toggleSignUp}
      >
        sign up
      </button>

      <MobileNavbar isMenuOpen={isMenuOpen} />
      <SignUp isSignUpOpen={isSignUpOpen} setIsSignUpOpen={setIsSignUpOpen} />
    </nav>
  );
};

export default Navbar;
