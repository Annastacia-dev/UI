import { FaSquareFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { menuItems } from "../data/navbarItems";
import { FaArrowRightLong } from "react-icons/fa6";

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

const resources = [
  {
    title: "terms & conditions",
    path: "/terms-and-conditions",
  },
  {
    title: "privacy policy",
    path: "/privacy-policy",
  },
  {
    title: "data protection",
    path: "/data protection",
  },
  {
    title: "shipping & delivery",
    path: "/shipping-and-delivery",
  },
  {
    title: "return policy",
    path: "/return-policy",
  },
];

const Footer = () => {
  return (
    <div className="md:px-10 px-4 py-10 mt-10 bg-black text-white">
      <div className="grid md:grid-cols-3 md:justify-start justify-center md:gap-0 gap-12">
        <div className="flex md:gap-16 gap-8 flex-col">
          <h4 className="font-semibold capitalize">contact us</h4>
          <ul className="flex flex-col gap-6 text-sm border-t border-black">
            <a
              href="mailto:sales@plenish.com"
              className="flex items-center gap-2"
            >
              <MdEmail className="text-lg" />
              sales@plenish.com
            </a>
            <a href="tel:076837249" className="flex items-center gap-2">
              <FaPhoneAlt className="text-md" />
              +254 768 372 439
            </a>
            <div className="flex items-center gap-5">
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
            </div>
          </ul>
          <p className="font-bold text-lg font-ascent">
            plenish. <sup className="uppercase font-bold text-xs">tm</sup>
          </p>
        </div>

        <div className="flex gap-8 flex-col">
          <h4 className="font-semibold capitalize">catalogue</h4>
          <ul className="flex flex-col  gap-3 capitalize text-sm">
            {menuItems.map((item, menuIndex) => (
              <div
                key={menuIndex}
                className="relative group"
                id={`menu-item-${menuIndex}`}
              >
                <a href={item.path} className="hover:underline">
                  {item.title}
                </a>
              </div>
            ))}
          </ul>
        </div>

        <div className="flex gap-8 flex-col">
          <h4 className="font-semibold capitalize">resources</h4>
          <ul className="flex flex-col  gap-3 capitalize text-sm">
            {resources.map((resource, index) => (
              <div key={index} className="relative group" id={index}>
                <a href={resource.path} className="hover:underline">
                  {resource.title}
                </a>
              </div>
            ))}
          </ul>

          <div className="flex">
            <input
              className="px-4 py-2 border bg-transparent placeholder:text-sm"
              placeholder="Subscribe to our newsletter"
            />
            <button className="bg-white text-black py-2 px-4">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <hr className="md:flex hidden my-8" />

      <div className="flex md:flex-row flex-col md:gap-0 gap-6  md:justify-between justify-center md:mt-0 mt-8 md:ml-0 ml-10">
        <p className="text-[10px]">
          Website is for purposes of showcase.
          <br className="md:hidden" />I don&apos;t own rights to the images &
          products are not real*
        </p>
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://www.annastacia.dev/"
            className="underline font-medium"
          >
            annastacia.dev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
