'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoMdCalendar } from 'react-icons/io';
import { MdChecklist } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

import Input from '@/app/main/components/Input';
import { MyLinks } from '@/types';

const links: Array<MyLinks> = [
  {
    id: 1,
    path: '../../main',
    text: '오늘',
    icon: <IoMdCalendar className="w-10 h-6" />,
  },
  {
    id: 2,
    path: '../../main/inspiration',
    text: '동기 부여',
    icon: <FaRegLightbulb className="w-10 h-5" />,
  },
  {
    id: 3,
    path: '../../main/check',
    text: '목표 점검',
    icon: <MdChecklist className="w-10 h-6" />,
  },
  {
    id: 4,
    path: '../../main/profile',
    text: '프로필',
    icon: <RxAvatar className="w-10 h-6" />,
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`flex flex-col sticky bottom-0 bg-gray-200 ${pathname == '/main' && ''}`}
    >
      {pathname === '/main' || pathname === '/main/modify' ? <Input /> : ''}
      <div className="flex px-4 pb-6 pt-3 bg-slate-50 border-t-[1px] border-gray-300">
        {links.map((link) => {
          const { id, path, text, icon } = link;
          return (
            <Link
              key={`footer-${id}`}
              href={path}
              className={`flex flex-1 flex-col items-center justify-center ${
                `../..${pathname}` === path ? 'text-[#78be5e]' : 'text-gray-500'
              }`}
            >
              {icon}
              <div className="text-[12px]">{text}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
