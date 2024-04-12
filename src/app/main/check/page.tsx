import Link from 'next/link';

import Cartegory from '@/component/common/Cartegory';
import Container from '@/component/common/Container';

export default function CheckPage(): JSX.Element {
  return (
    <div className="flex flex-col h-[100vh] bg-gray-200">
      <Cartegory>목표 점검</Cartegory>
      <div className="flex flex-col items-center h-36 mt-4">
        <Link
          href=""
          className="flex justify-around w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200"
        >
          <button className="w-1/6">오늘</button>
          <progress
            className="progress rounded-lg bg-white progress-success w-4/5 my-auto h-1/2"
            value="40"
            max="100"
          ></progress>
        </Link>
        <Link
          href=""
          className="flex justify-around w-11/12 h-12 text-lg bg-white rounded-b-lg"
        >
          <button className="w-1/6">목표점검</button>
          <progress
            className="progress rounded-lg bg-white progress-success w-4/5 my-auto h-1/2"
            value="75"
            max="100"
          ></progress>
        </Link>
      </div>
    </div>
  );
}
