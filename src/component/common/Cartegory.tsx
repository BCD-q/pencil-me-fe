import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Cartegory({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="flex flex-row h-12 py-4 justify-center sticky top-0 bg-gray-100 border-b-4 border-gray-100 z-50">
      {children !== '그룹' && (
        <Link href="../group" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
            <IoIosArrowBack className="w-5 h-5 mr-[-12px]" />
            그룹
          </button>
        </Link>
      )}
      <div className=" text-lg sm:text-xl">
        {children == null ? '메인' : children}
      </div>
    </div>
  );
}
