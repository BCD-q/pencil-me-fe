import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Cartegory({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="flex flex-row h-12 py-4 justify-center sticky top-0 bg-gray-100 border-b-4 border-gray-100">
      {children === '오늘' ? (
        <Link href="../group" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
            <IoIosArrowBack className="w-5 h-5 mr-[-12px]" />
            그룹
          </button>
        </Link>
      ) : children === '수정' ? (
        <Link href="/main" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500">
            <IoIosArrowBack className="w-4 h-4 mr-[-6px]" />
            오늘
          </button>
        </Link>
      ) : (
        ''
      )}
      <div className="mt-1 text-xl sm:text-2xl">{children}</div>
    </div>
  );
}
