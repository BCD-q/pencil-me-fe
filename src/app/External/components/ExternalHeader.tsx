'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function ExternalHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sticky top-0 bg-gray-100 h-12">
      <button
        className="absolute top-4 left-0 text-white"
        onClick={() => router.back()}
      >
        <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
          <IoIosArrowBack className="w-5 h-5 mr-[-12px]" />
          그룹
        </button>
      </button>
      <div className="flex mx-auto w-1/3 justify-center h-full items-end text-black text-xl">
        디테일
      </div>
    </div>
  );
}
