import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Cartegory({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="flex flex-row h-12 py-4 justify-center items-center sticky top-0 bg-gray-100 border-b-4 border-gray-100 z-50">
      {children !== '동기 부여' &&
        children !== '목표 점검' &&
        children !== '프로필' &&
        children !== '그룹' &&
        children !== '회원가입' &&
        children !== '로그인' &&
        children !== '수정' && (
          <Link href="../group" className="absolute left-0">
            <button className="mr-auto mt-1 border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
              <IoIosArrowBack className="w-6 h-6 mr-[-12px]" />
              그룹
            </button>
          </Link>
        )}
      {children === '로그인' || children === '회원가입' ? (
        <button
          onClick={() => history.back()}
          className="absolute left-0 m-2 text-accent"
        >
          뒤로
        </button>
      ) : (
        ''
      )}
      {children === '수정' && (
        <button
          className="absolute left-0 mr-auto mt-1 border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg"
          onClick={() => history.back()}
        >
          <IoIosArrowBack className="w-6 h-6 mr-[-12px]" />할 일
        </button>
      )}
      <div className="flex text-lg sm:text-xl truncate w-3/5 justify-center">
        {children == null ? '메인' : children}
      </div>
    </div>
  );
}
