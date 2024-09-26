/* eslint-disable react/prop-types */
import { useState } from 'react';
import { GoProjectRoadmap } from 'react-icons/go';
import { MdOutlineClose, MdOutlineMenu, MdDashboard } from 'react-icons/md';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { FaChartPie } from 'react-icons/fa';
import { IoMdImages } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const items = [
  {
    title: 'dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'projects',
    icon: <GoProjectRoadmap />,
  },
  {
    title: 'finances',
    icon: <FaMoneyBill1Wave />,
  },
  {
    title: 'analytics',
    icon: <FaChartPie />,
  },
  {
    title: 'library',
    icon: <IoMdImages />,
  },
];

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <nav
      className={`fixed min-h-screen flex flex-col gap-8 transition-all bg-slate-50 h-screen shadow-lg rounded-lg transition-width duration-300 ${collapsed ? 'w-12' : 'w-36'} `}
    >
      <div className="px-4 py-2">
        {collapsed ? (
          <MdOutlineMenu
            className="text-xl cursor-pointer"
            onClick={toggleCollapsed}
          />
        ) : (
          <MdOutlineClose
            className="text-xl cursor-pointer"
            onClick={toggleCollapsed}
          />
        )}
      </div>

      <div className="flex flex-col gap-2 mt-5">
        {items.map((item) => (
          <div
            href={item.title}
            key={item.title}
            className={`flex items-center gap-2 text-lg cursor-pointer px-4 py-2 hover:bg-slate-100 ${activeItem == item.title && 'bg-slate-100 border-r-4 border-slate-500'}`}
            onClick={() => setActiveItem(item.title)}
          >
            {item.icon}
            <p
              className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 flex flex-col gap-2">
        <div
          href="/settings"
          className={`flex items-center gap-2 text-lg cursor-pointer px-4 py-2 hover:bg-slate-100 ${activeItem == 'settings' && 'bg-slate-100 border-r-4 border-slate-500'}`}
            onClick={() => setActiveItem('settings')}
        >
          <IoSettings />
          <p
            className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
          >
            settings
          </p>
        </div>
        <a
          href="/logout"
          className="flex items-center gap-2 text-lg cursor-pointer text-red-600 px-4 py-2"
        >
          <RiLogoutCircleRLine />
          <p
            className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
          >
            logout
          </p>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
