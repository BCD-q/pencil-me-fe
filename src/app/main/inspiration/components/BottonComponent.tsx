import Image from 'next/image';

import BubbleImage from '../../../../resources/images/common/BubbleImage.png';

export default function BottomCarousel({ data }: { data: any }) {
  return (
    <div className="h-fit">
      <main className="flex my-2">
        <div className="rounded-xl h-1/2 w-36 xs:w-36 sm:w-44 shadow-xl mx-2 flex-col border-2">
          <Image src={data.message} alt="" className="" />
          <div className="bg-gray-100 flex h-1/4">
            <div className="flex-col w-2/3 whitespace-nowrap overflow-hidden text-ellipsis mx-2">
              <div className="text-xs w-20 ml-1">서버 기술 블로그</div>
              <div className="text-xs w-20 ml-1 text-gray-300">
                인천대학교 앱센터
              </div>
            </div>
            <button className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl mx-auto my-auto text-white text-xl">
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
