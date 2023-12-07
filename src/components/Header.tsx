import React from 'react';
import { CgChevronLeft } from 'react-icons/cg';

const Header = () => {
  return (
    <header className="w-full border-b p-4 relative">
      <div className="flex gap-1 text-lime-500">
        <CgChevronLeft className="text-[1.4rem]" />
        <div>그룹</div>
      </div>
      <div className="text-stone-800 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        오늘
      </div>
    </header>
  );
};

export default Header;
