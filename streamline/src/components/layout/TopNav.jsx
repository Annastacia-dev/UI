/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

const TopNav = ({ collapsed }) => {
  return (
    <nav
      className={`bg-slate-50 py-3 px-16 rounded ${collapsed ? 'ml-12' : 'ml-36'} flex justify-between text-sm rounded`}
    >
      <div className="relative">
        <input
          className="px-4 py-2 bg-slate-100 rounded"
          placeholder="Search..."
        />
        <IoSearch className="absolute right-4 top-2 text-lg text-gray-500" />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-slate-100 flex items-center gap-2 px-4 py-2 rounded">
          <FaPlus />
          New
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
