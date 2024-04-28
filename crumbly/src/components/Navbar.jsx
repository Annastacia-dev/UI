import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className=" flex  justify-between  gap-1 px-10 py-5">
        <div className="flex gap-1 items-center">
          <img src="/logo-primary.png" alt="logo" className="w-8" />
        </div>

        <ul className="flex gap-5 capitalize font-medium text-sm">
        <li>
            <a className="cursor-pointer hover:underline hover:text-primary">
              +2547 1234 5678
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:underline hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:underline hover:text-primary">
              Locations
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:underline hover:text-primary">
              Delivery
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:underline hover:text-primary">
              contacts
            </a>
          </li>
        </ul>
        <div className="relative flex gap-2">
          <FaBasketShopping className="text-xl" />
          <div className="bg-primary h-5 w-5 flex justify-center items-center text-xs rounded-sm text-darkgrey">2</div>
          <div className="bg-primary h-2 w-2 rotate-45 absolute right-4 bottom-4"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
