'use client';

import { useRouter } from 'next/navigation';

export default function LogOut() {
  const router = useRouter();

  return (
    <div
      className="flex sticky border-none h-[7%] top-auto mb-2 bg-accent rounded-xl w-1/4 mx-auto justify-center items-center"
      onClick={() => {
        router.push('/login');
      }}
    >
      <div className="text-sm sm:text-md text-white">로그아웃</div>
    </div>
  );
}
