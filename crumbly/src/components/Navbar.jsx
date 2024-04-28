const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className=" flex  justify-between  gap-1 px-10 py-5">
        <div className="flex gap-1 items-center">
          <img src="/logo.png" className="w-8" />
          <p className="font-coolvetica text-2xl text-primary">crumbly</p>
        </div>

        <ul className="flex gap-5">
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
        </ul>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
