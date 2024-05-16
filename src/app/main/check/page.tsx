import Link from 'next/link';

import Cartegory from '@/component/common/Cartegory';

import CheckBox from './components/CheckBox';

export default function CheckPage(): JSX.Element {
  return (
    <div className="flex flex-col h-full bg-gray-200">
      <Cartegory>목표 점검</Cartegory>
      <div className="flex flex-col items-center h-32 mt-4">
        <Link
          href=""
          className="flex justify-around w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200"
        >
          <button className="w-1/4 text-sm sm:text-md">오늘</button>
          <progress
            className="progress progress-accent bg-gray-200 rounded-lg w-2/3 my-auto h-1/2 mx-2"
            value="40"
            max="100"
          ></progress>
          <div className="flex">
            <button className="w-1/4 text-center flex my-auto text-xs sm:text-sm mx-2">
              50%
            </button>
          </div>
        </Link>
        <Link
          href=""
          className="flex flex-row justify-around w-11/12 h-12 text-lg bg-white rounded-b-lg"
        >
          <button className="w-1/4 text-sm sm:text-md">주요 목표</button>
          <progress
            className=" progress progress-accent bg-gray-200 rounded-lg w-2/3 my-auto h-1/2 mx-2"
            value="50"
            max="100"
          ></progress>
          <div className="flex">
            <button className="w-1/4 text-center flex my-auto text-xs sm:text-sm mx-2">
              50%
            </button>
          </div>
        </Link>
      </div>
      <CheckBox />
    </div>
  );
}
