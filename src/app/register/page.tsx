'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import RegisterInput from '@/app/login/components/RegisterInput';

import BubbleImage from '../../resources/images/common/BubbleImage.png';

export default function Register() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <button onClick={() => router.back()} className="mr-auto m-2 text-accent">
        back
      </button>
      <div className="flex flex-col my-auto">
        <Image src={BubbleImage} alt="" className="w-3/5 mx-auto" />
        <div className="mx-auto mb-6 text-2xl font-bold">만나서 반가워요!</div>
        <RegisterInput />
      </div>
    </div>
  );
}
