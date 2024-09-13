/* eslint-disable react/prop-types */
import { useState } from "react";
import { menuItems } from "../data/navbarItems";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const MobileNav = ({ isMobileNavOpen, toggleMobileNav, socials }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  return (
    isMobileNavOpen && (
      <div className="min-h-screen bg-black/70 text-white fixed inset-0 right-1/4 z-50 backdrop-blur-md">
        <IoMdClose
          className="absolute top-4 left-4 text-xl cursor-pointer"
          onClick={toggleMobileNav}
        />

        <ul className="flex flex-col py-16 px-2 gap-3 capitalize font-medium text-sm">
          {menuItems.map((item, menuIndex) => (
            <div
              key={menuIndex}
              className="relative group"
              id={`menu-item-${menuIndex}`}
            >
              <div
                className="flex justify-between items-center px-3 py-2 cursor-pointer"
                onClick={() => toggleSubMenu(menuIndex)}
              >
                <a href={item.path}>{item.title}</a>
                {item.items && (
                  <>
                    {openSubMenuIndex === menuIndex ? (
                      <FaCaretUp />
                    ) : (
                      <FaCaretDown />
                    )}
                  </>
                )}
              </div>

              {openSubMenuIndex === menuIndex && item.items && (
                <div className="flex flex-col gap-4 px-5 py-3 text-xs">
                  {item.items.map((subItem, subIndex) => (
                    <div className="flex flex-col gap-2" key={subIndex}>
                      <a
                        href={subItem.path}
                        className="hover:underline hover:font-semibold"
                      >
                        {subItem.title}
                      </a>
                      {subItem?.items && (
                        <div className="px-2 text-gray-200 flex flex-col gap-2">
                          {subItem.items.map((innerItem, innerIndex) => (
                            <a
                              key={innerIndex}
                              href={innerItem.path}
                              className="hover:underline hover:font-semibold flex items-center gap-1"
                            >
                              {innerItem.title} <FaArrowRightLong />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    )
  );
};

export default MobileNav;
