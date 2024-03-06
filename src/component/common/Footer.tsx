'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoMdCalendar } from 'react-icons/io';
import { MdChecklist } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

interface MyLinks {
  id: number;
  path: string;
  text: string;
  icon: JSX.Element;
}

const links: Array<MyLinks> = [
  {
    id: 1,
    path: '../../main',
    text: '오늘',
    icon: <IoMdCalendar className="w-10 h-6 pr-2" />,
  },
  {
    id: 2,
    path: '../../main/inspiration',
    text: '영감',
    icon: <FaRegLightbulb className="w-10 h-5 pr-2" />,
  },
  {
    id: 3,
    path: '../../main/check',
    text: '목표 점검',
    icon: <MdChecklist className="w-10 mr-3 h-6 pl-1" />,
  },
  {
    id: 4,
    path: '../../main/profile',
    text: '프로필',
    icon: <RxAvatar className="w-10 mr-1 h-6 pr-1" />,
  },
];

const Footer: React.FC = () => {
  const router = useRouter();

  const pathname = usePathname();

  const onClick = () => {
    console.log(pathname);
  };

  return (
    <div className="flex w-full h-20 bg-gray-100 md:hidden">
      {links.map((link) => {
        const { id, path, text, icon } = link;

        return (
          <Link key={id} href={path} legacyBehavior>
            <a
              className={`relative flex flex-col w-1/4 h-12 border-none mx-auto rounded-md shadow-none btn bg-inherit ${
                `../..${pathname}` === path ? 'text-[#78be5e] bg-inherit' : ''
              }`}
              onClick={onClick}
            >
              {icon}
              <div className="text-[8px] absolute mr-2 bottom-0">{text}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
