import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail, MdHeadphones } from "react-icons/md";

const socials = [
  {
    id: 1,
    icon: <FaTwitter />,
    link: 'https://twitter.com'
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: 'https://instagram.com'
  },
  {
    id: 3,
    icon: <FaTiktok />,
    link: 'https://tiktok.com'
  }
]

const Footer = () => {
  return (
    <>
    <footer className="flex md:flex-row flex-col gap-12 justify-between items-center z-10 md:px-10 px-5 md:py-3 py-6  bg-tan/80 text-black w-full">
      <div className="text-sm font-medium flex gap-3">
        <p className="hover:underline">Privacy Policy</p>
        <span className="border-r border-black h-5"></span>
        <p className="hover:underline">Terms of Service</p>
        <span className="border-r border-black h-5"></span>
        <p className="hover:underline">FAQ</p>
      </div>
      <div className="flex gap-3">
        {
          socials.map(social => (
            <a key={social.id} href={social.link} className="text-black border border-black p-3 rounded-full hover:bg-black hover:text-tan">
              {social.icon}
            </a>
          ))
        }
      </div>
      <p className='font-medium flex items-center text-sm  gap-3 text-black'>
        <MdEmail className='text-base' />
        <a href='mailto:skincare@aura.com' className='hover:underline'>
          skincare@aura.com
        </a>
        <span className="border-r border-black h-5"></span>
        <MdHeadphones className='text-base' />
        <a href='tel:+1234567890' className='hover:underline'>
          +1 (234) 567-890
        </a>
     </p>
    </footer>
    <footer className="flex md:flex-row flex-col gap-8 justify-between items-center z-10 px-10 md:py-3 py-6 border border-khaki w-full bg-black/80 text-tan">
      <h5 className="text-sm font-medium">© 2024 | All Rights Reserved</h5>
      <p className="text-lg font-playfair font-bold">aura</p>
      <p className='text-sm font-medium'>
        Designed & Developed by <a href='https://www.annastacia.dev' className='underline'>Annastacia</a>
     </p>
    </footer>
    </>
  );
};

export default Footer;
