import Link from 'next/link';

import Cartegory from '@/component/common/Cartegory';
import Container from '@/component/common/Container';

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
          <button className="w-1/4">오늘</button>
          <progress
            className="progress progress-accent bg-gray-200 rounded-lg w-2/3 my-auto h-1/2"
            value="40"
            max="100"
          ></progress>
        </Link>
        <Link
          href=""
          className="flex justify-around w-11/12 h-12 text-lg bg-white rounded-b-lg"
        >
          <button className="w-1/4">주요 목표</button>
          <progress
            className="progress progress-accent bg-gray-200 rounded-lg w-2/3 my-auto h-1/2"
            value="60"
            max="100"
          ></progress>
        </Link>
      </div>
      <CheckBox />
    </div>
  );
}
