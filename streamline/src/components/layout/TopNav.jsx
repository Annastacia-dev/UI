/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

const TopNav = ({ collapsed }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State for profile dropdown

  const notificationRef = useRef(null); // Ref to track the notification dropdown
  const profileRef = useRef(null); // Ref to track the profile dropdown

  const notifications = [
    {
      title: 'Payment Received',
      content: 'You have received $100 from John Doe',
      read: false,
    },
    {
      title: 'Project Milestone',
      content: 'The design phase has been completed',
      read: true,
    },
    {
      title: 'New Comment',
      content: 'Someone commented on your post',
      read: true,
    },
  ];

  // Function to hide notification when mouse leaves both bell and dropdown
  const handleNotificationMouseLeave = (event) => {
    if (!notificationRef.current.contains(event.relatedTarget)) {
      setShowNotifications(false);
    }
  };

  // Function to hide profile menu when mouse leaves both profile button and dropdown
  const handleProfileMouseLeave = (event) => {
    if (!profileRef.current.contains(event.relatedTarget)) {
      setShowProfileMenu(false);
    }
  };

  const greeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <nav
      className={`bg-slate-50 py-5 px-10 rounded ${collapsed ? 'ml-12' : 'ml-36'} flex justify-between text-sm rounded`}
    >
      <h5 className="capitalize font-semibold">{greeting()}, james</h5>
      <div className="flex items-center gap-10">
        <div className="relative">
          {showSearch && (
            <input
              className="bg-slate-100 px-4 py-2 text-sm rounded transition-width duration-300"
              placeholder="Search.."
            />
          )}
          <IoSearch
            className={`text-xl cursor-pointer ${showSearch && 'absolute right-2 top-2'}`}
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>

        {/* Notification Icon and Dropdown */}
        <div className="relative">
          <MdNotifications
            className="text-xl cursor-pointer"
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={handleNotificationMouseLeave}
          />
          <div className="bg-black text-[9px] font-medium text-white flex justify-center items-center rounded-full absolute -top-2 -right-2 border-2 border-slate-50 h-4 w-4">
            {notifications.filter((n) => !n.read).length}
          </div>
          {showNotifications && (
            <div
              ref={notificationRef}
              className="absolute top-8 right-0 border border-slate-100 bg-slate-50 shadow-md md:w-[25vw] rounded text-sm"
              onMouseLeave={handleNotificationMouseLeave}
            >
              <h4 className="font-medium text-center text-sm mb-2 capitalize p-2">
                your notifications
              </h4>
              <hr />
              <ul className="mt-2 flex flex-col gap-3">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className={`p-2 flex flex-col gap-2 cursor-pointer hover:bg-slate-100 ${notification.read ? '' : 'bg-slate-100/80'}`}
                  >
                    <strong>{notification.title}</strong>
                    <p>{notification.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Profile Icon and Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onMouseEnter={() => setShowProfileMenu(true)}
          onMouseLeave={handleProfileMouseLeave}
        >
          <img
            src="profile.webp"
            className="h-5 w-5 rounded-full object-cover "
            alt="Profile"
          />
          {showProfileMenu ? <FaCaretUp /> : <FaCaretDown />}
          {showProfileMenu && (
            <div
              ref={profileRef}
              className="absolute top-10 right-0 border border-slate-100 bg-slate-50 shadow-md md:w-[20vw] rounded"
              onMouseLeave={handleProfileMouseLeave}
            >
              <ul className="text-sm p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  View Profile
                </li>
                <hr className="my-2" />
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <hr className="my-2" />
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
