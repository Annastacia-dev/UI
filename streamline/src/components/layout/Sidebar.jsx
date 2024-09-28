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
    path: '/',
  },
  {
    title: 'projects',
    icon: <GoProjectRoadmap />,
    path: '/projects',
  },
  {
    title: 'finances',
    icon: <FaMoneyBill1Wave />,
    path: '/finances',
  },
  {
    title: 'analytics',
    icon: <FaChartPie />,
    path: '/analytics',
  },
  {
    title: 'library',
    icon: <IoMdImages />,
    path: '/library',
  },
];

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const [activeItem, setActiveItem] = useState(window.location.pathname);

  return (
    <nav
      className={`fixed max-h-[98vh] flex flex-col gap-8 transition-all bg-slate-50 h-screen shadow-lg rounded-lg transition-width duration-300 ml-3 mt-2 border border-slate-100 ${collapsed ? 'w-12' : 'w-36'} `}
    >
      <div className="px-4 pt-5">
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
          <a
            href={item.path}
            key={item.title}
            className={`flex items-center gap-2 text-xl cursor-pointer px-4 py-2 hover:bg-slate-100 ${activeItem == item.path && 'bg-slate-100 border-r-4 border-slate-500'}`}
            onClick={() => setActiveItem(item.path)}
          >
            {item.icon}
            <p
              className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
            >
              {item.title}
            </p>
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 flex flex-col gap-2">
        <a
          href="/settings"
          className={`flex items-center gap-2 text-xl cursor-pointer px-4 py-2 ${collapsed ? 'w-12' : 'w-36'} hover:bg-slate-100 ${activeItem == '/settings' && 'bg-slate-100 border-r-4 border-slate-500'}`}
          onClick={() => setActiveItem('/settings')}
        >
          <IoSettings />
          <p
            className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
          >
            settings
          </p>
        </a>
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
