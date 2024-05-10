'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import LoginInput from '@/app/login/components/LoginInput';

import BubbleImage from '../../resources/images/common/BubbleImage.png';

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <button onClick={() => router.back()} className="mr-auto m-2 text-accent">
        back
      </button>
      <div className="flex flex-col my-auto">
        <Image src={BubbleImage} alt="" className="w-3/5 mx-auto" />
        <div className="mx-auto text-2xl font-bold">다시 만났네요!</div>
        <LoginInput />
      </div>
    </div>
  );
}
