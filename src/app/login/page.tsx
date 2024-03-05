import Image from 'next/image';

import LoginInput from '@/container/Login/LoginInput';

import BubbleImage from '../../resources/images/common/BubbleImage.png';

export default function LoginPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col my-auto">
        <Image src={BubbleImage} alt="" className="w-3/5 mx-auto" />
        <div className="mx-auto text-2xl font-bold">다시 만났네요!</div>
        <LoginInput />
      </div>
    </div>
  );
}
