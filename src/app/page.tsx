import Image from 'next/image';
import Link from 'next/link';

import PencilMe from '../resources/images/common/pencilMeThumbNail.png';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col my-auto">
        <Image src={PencilMe} alt="" className="w-4/5 mx-auto" />
        <Link
          href="login"
          className="btn bg-[#78be5e] mt-20 mb-6 text-white w-11/12 mx-auto"
        >
          <button>로그인</button>
        </Link>
        <Link
          href="register"
          className="w-11/12 mx-auto btn border-none bg-gray-300"
        >
          <button className="w-11/12 border-none mx-auto">회원 가입</button>
        </Link>
      </div>
    </div>
  );
}
