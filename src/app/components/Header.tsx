import React from 'react';
import { CgChevronLeft } from "react-icons/cg";
import { IoIosBatteryFull } from "react-icons/io";
import { IoIosWifi } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";

const Header: React.FC = () => {
    return (
        <header className='w-72 h-28 bg-neutral-100'>
            <GiNetworkBars 
                className='text-base absolute ml-[12.9rem] mt-3'
                />
            <IoIosWifi 
                className='text-base absolute ml-[14.2rem] mt-3'
                /> 
            <IoIosBatteryFull
                className='text-base absolute ml-[15.5rem] mt-3' 
                />
            <div className='flex items-end text-sm mt-16 ml-2 text-lime-400 ml-0'>
                <CgChevronLeft
                    className='text-xl'
                />
                그룹
                <div className='flex text-sm ml-20 text-stone-800'>오늘</div>  
            </div>
            <div className='bg-neutral-200 text-xs h-7 text-gray-400 text-[9px] pt-2 pl-3'>
                오늘의 작업들
            </div>
        </header>       
    );
};

export default Header;
