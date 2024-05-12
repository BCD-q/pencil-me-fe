'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function ExternalHeader({ title }: { title: string | null }) {
  const router = useRouter();

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div className="flex flex-col justify-center items-center sticky top-0 bg-gray-100 h-16">
      <button
        className="flex absolute top-4 left-0 text-white"
        onClick={() => router.back()}
      >
        <button className="flex mr-auto my-auto items-center border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
          <IoIosArrowBack className="w-5 h-5 mr-[-12px]" />
          영감
        </button>
      </button>
      <div className="flex justify-center w-2/3 items-center text-black text-sm text-center line-clamp-2">
        {title}
      </div>
    </div>
  );
}
