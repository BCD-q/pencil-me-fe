import React from 'react';
import { FaMicrophone } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { IoPaperPlane } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 p-4 w-72 h-20 flex pb-10 pt-1">
      <div className="relative flex items-center w-full">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none">
          <SiGooglemessages 
            className='text-[#848388]'
          />
        </button>
        <input
          type="text"
          placeholder="이렇게 입력해보세요"
          className="w-full h-7 pl-7 pb-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 placeholder:text-[0.7rem] bg-[#efeef1]"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none">
          <FaMicrophone
            className='text-[#848388]'
          />
        </button>
      </div>
      <button className="ml-4 h-6 mt-1 w-20 bg-[#78be5e] text-white px-4 rounded-2xl text-xs pr-0 hover:bg-lime-400">
        <IoPaperPlane 
          className='absolute ml-[-6px] mt-0.5'
        />
        전송
      </button>
    </footer>
  );
};

export default Footer;


