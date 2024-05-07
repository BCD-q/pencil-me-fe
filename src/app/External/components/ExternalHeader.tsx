'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function ExternalHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sticky top-0 bg-accent h-12">
      <button className="text-white relative" onClick={() => router.back()}>
        <IoIosArrowRoundBack className="w-12 h-12 absolute" />
      </button>
      <div className="flex mx-auto w-1/3 justify-center h-full items-center text-white text-lg">
        디테일
      </div>
    </div>
  );
}
