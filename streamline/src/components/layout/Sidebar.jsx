/* eslint-disable react/prop-types */
// import { TbTargetArrow } from 'react-icons/tb';
import { GoProjectRoadmap } from 'react-icons/go';
import {
  MdOutlineClose,
  MdOutlineMenu,
  MdDashboard,
  MdNotifications,
} from 'react-icons/md';
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
  {
    title: 'notifications',
    icon: <MdNotifications />,
  },
];

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  return (
    <nav
      className={`fixed min-h-screen bg-slate-100 rounded-lg flex flex-col gap-12 p-3 transition-all ${collapsed ? 'w-12' : 'w-36'} `}
    >
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

      <div className="flex flex-col gap-8 mt-8">
        {items.map((item) => (
          <a
            href={item.title}
            key={item.title}
            className="flex items-center gap-2 text-lg cursor-pointer"
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

      <div className="absolute bottom-8 flex flex-col gap-8">
        <a href="/profile" className="flex items-center gap-2 cursor-pointer">
          <img
            src="profile.webp"
            className="h-6 w-6 rounded-full object-cover "
          />
          <p
            className={`capitalize text-xs font-medium ${collapsed ? 'hidden' : ''}`}
          >
            profile
          </p>
        </a>
        <a
          href="/settings"
          className="flex items-center gap-2 text-lg cursor-pointer"
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
          className="flex items-center gap-2 text-lg cursor-pointer text-red-600"
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
