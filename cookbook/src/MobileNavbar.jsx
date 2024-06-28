import React from 'react';
import Icons from './Icons';

const MobileNavbar = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="flex-col flex fixed bg-primary gap-4 py-5 left-1/3 right-2 rounded min-h-[20vh] text-white">
        <ul className="flex flex-col justify-center gap-2 text-lg">
          <Icons />
        </ul>
      </div>
    )
  );
};

export default MobileNavbar;
