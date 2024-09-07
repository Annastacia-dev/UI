import { useState } from "react";

import {
  FaStore,
  FaUser,
  FaCartShopping,
  FaSquareFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const menuItems = [
  {
    title: "office",
    items: [{ title: "executive desks" }, { title: "reception counters" }],
  },
  {
    title: "living room",
    items: [
      {
        title: "fabric sofas",
        items: [{ title: "corner sofas" }, { title: "stationery sofas" }],
      },
    ],
  },
  {
    title: "dining",
    items: [{ title: "dining sets" }, { title: "dining chairs" }],
  },
];

const storeIcons = [
  {
    title: "login/register",
    icon: <FaUser />,
    path: "",
  },
  {
    title: "cart",
    icon: <FaCartShopping />,
    path: "",
  },
  {
    title: "our stores",
    icon: <FaStore />,
    path: "",
  },
];

const socials = [
  {
    title: "facebook",
    icon: <FaSquareFacebook />,
    path: "",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    path: "",
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    path: "",
  },
];

const Navbar = () => {
  const [hoveredStore, setHoveredStore] = useState(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-10 py-3 bg-black text-white">
        <div>
          <p className="font-bold text-lg font-ascent">
            plenish. <sup className="uppercase font-bold text-xs">tm</sup>
          </p>
        </div>

        <ul className="flex gap-6 items-center">
          {storeIcons.map((store, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredStore(store.title)}
              onMouseLeave={() => setHoveredStore(null)}
            >
              <a className="text-lg" href={store.path}>
                {store.icon}
              </a>
              {hoveredStore === store.title && (
                <p className="absolute top-full mt-1 p-2 text-sm capitalize font-semibold bg-black text-white border rounded w-40 text-center">
                  {store.title}
                </p>
              )}
            </div>
          ))}
        </ul>

        <ul className="flex gap-6 items-center text-sm">
          <a href="mailto:sales@plenish.com">sales@plenish.com</a>
          <span>|</span>
          <a href="tel:076837249">+254 768 372 439</a>
          <span>|</span>
          {socials.map((social) => (
            <a href={social.path} target="_blank" className="text-lg">
              {social.icon}
            </a>
          ))}
        </ul>
      </nav>

      <nav className="w-full flex justify-between items-center px-7 py-1 border border-black">
        <ul className="flex items-center gap-3 capitalize font-medium text-sm">
          {menuItems.map((item) => (
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenuItem(item.title)}
              onMouseLeave={() => setHoveredMenuItem(null)}
            >
              <li className="hover:bg-black hover:text-white px-3 py-2 cursor-pointer rounded relative">
                {item.title}
              </li>
              {hoveredMenuItem == item.title && (
                <div className="border border-black textblack  rounded px-4 py-3 grid grid-cols-6 gap-5 absolute min-w-[80vw] top-12">
                  {item.items.map((subItem) => (
                    <p>{subItem.title}</p>
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
