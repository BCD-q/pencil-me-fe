'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Toast from '@/component/common/Toast';

export default function LogOut() {
  const router = useRouter();
  const [isclicked, setIsclicked] = useState(false);

  return (
    <>
      {isclicked && <Toast>로그아웃 되었습니다.</Toast>}
      <div
        className="flex sticky border-none h-[5%] top-auto mb-2 bg-accent rounded-xl w-1/4 mx-auto justify-center items-center"
        onClick={() => {
          setIsclicked(true);
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        }}
      >
        <div className="text-sm sm:text-md text-white">로그아웃</div>
      </div>
    </>
  );
}
