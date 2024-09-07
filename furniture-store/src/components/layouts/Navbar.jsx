import { useState, useRef } from "react";
import {
  FaStore,
  FaUser,
  FaCartShopping,
  FaSquareFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowRightLong,
} from "react-icons/fa6";

import { menuItems } from "../data/navbarItems";

const storeIcons = [
  {
    title: "login/register",
    icon: <FaUser />,
    path: "/login",
  },
  {
    title: "cart",
    icon: <FaCartShopping />,
    path: "/cart",
  },
  {
    title: "our stores",
    icon: <FaStore />,
    path: "/stores",
  },
];

const socials = [
  {
    title: "facebook",
    icon: <FaSquareFacebook />,
    path: "https://facebook.com",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    path: "https://instagram.com",
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    path: "https://youtube.com",
  },
];

const Navbar = () => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = (itemTitle, index) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenuItem(itemTitle);
    adjustSubmenuPosition(index);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenuItem(null);
    }, 100);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center px-10 py-3 bg-black/90 fixed text-white z-50">
        <div>
          <p className="font-bold text-lg font-ascent">
            plenish. <sup className="uppercase font-bold text-xs">tm</sup>
          </p>
        </div>

        <ul className="flex gap-6 items-center">
          {storeIcons.map((store, index) => (
            <div key={index} className="relative">
              <a className="text-lg" href={store.path}>
                {store.icon}
              </a>
            </div>
          ))}
        </ul>

        <ul className="md:flex hidden gap-4 items-center text-sm">
          <a href="mailto:sales@plenish.com">sales@plenish.com</a>
          <span>|</span>
          <a href="tel:076837249">+254 768 372 439</a>
          <span>|</span>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.path}
              target="_blank"
              className="text-lg"
            >
              {social.icon}
            </a>
          ))}
        </ul>
      </nav>

      <nav className="w-full md:flex hidden justify-between items-center px-7  border border-black pt-16 pb-2 bg-white/50 fixed">
        <ul className="flex items-center gap-3 capitalize font-medium text-sm">
          {menuItems.map((item, menuIndex) => (
            <div
              key={menuIndex}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.title, menuIndex)}
              onMouseLeave={handleMouseLeave}
              id={`menu-item-${menuIndex}`}
            >
              <a
                href={item.path}
                className={`${item.items ? "hover:bg-black hover:text-white" : "hover:underline hover:font-semibold"} px-3 py-2 cursor-pointer rounded`}
              >
                {item.title}
              </a>

              {item?.items && hoveredMenuItem === item.title && (
                <div
                  id={`submenu-${menuIndex}`}
                  className={`absolute top-8 mt-2 bg-black/80 text-white border border-black rounded px-4 py-3 grid grid-cols-3 gap-2 min-w-[50vw] ${menuIndex > 5 ? "right-0" : ""}`}
                  onMouseEnter={() => handleMouseEnter(item.title, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.items.map((subItem, subIndex) => (
                    <div className="flex flex-col gap-2" key={subIndex}>
                      <a
                        href={subItem.path}
                        className="hover:underline hover:font-semibold"
                      >
                        {subItem.title}
                      </a>
                      <div className="px-1 text-gray-300 flex flex-col gap-1">
                        {subItem?.items &&
                          subItem.items.map((innerItem, innerIndex) => (
                            <a
                              key={innerIndex}
                              href={innerItem.path}
                              className="hover:underline hover:font-semibold flex items-center gap-1"
                            >
                              {innerItem.title} <FaArrowRightLong />
                            </a>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
