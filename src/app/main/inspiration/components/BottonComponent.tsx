import Image from 'next/image';

import BubbleImage from '../../../../resources/images/common/BubbleImage.png';

export default function BottomCarousel() {
  return (
    <div>
      <main className="flex my-2">
        <div className="rounded-xl h-4/6 w-1/3 my-auto shadow-md mx-2 flex-col border-2">
          <Image src={BubbleImage} alt="" className="" />
          <div className="bg-gray-100 flex h-1/4">
            <div className="flex-col w-2/3 whitespace-nowrap overflow-hidden text-ellipsis">
              <div className="text-xs w-20 ml-1">서버 기술 블로그</div>
              <div className="text-xs w-20 ml-1 text-gray-300">
                인천대학교 앱센터
              </div>
            </div>
            <button className=" bg-[#78be5e] w-8 h-8 rounded-full mx-auto my-auto text-white text-xl">
              +
            </button>
          </div>
        </div>
        <div className="rounded-xl h-4/6 w-1/3 my-auto shadow-md mx-2 flex-col border-2">
          <Image src={BubbleImage} alt="" className="" />
          <div className="bg-gray-100 flex h-1/4">
            <div className="flex-col w-2/3 whitespace-nowrap overflow-hidden text-ellipsis">
              <div className="text-xs w-20 ml-1">서버 기술 블로그</div>
              <div className="text-xs w-20 ml-1 text-gray-300">
                인천대학교 앱센터
              </div>
            </div>
            <button className=" bg-[#78be5e] w-8 h-8 rounded-full mx-auto my-auto text-white text-xl">
              +
            </button>
          </div>
        </div>
        <div className="rounded-xl h-4/6 w-1/3 my-auto shadow-md mx-2 flex-col border-2">
          <Image src={BubbleImage} alt="" className="" />
          <div className="bg-gray-100 flex h-1/4">
            <div className="flex-col w-2/3 whitespace-nowrap overflow-hidden text-ellipsis">
              <div className="text-xs w-20 ml-1">서버 기술 블로그</div>
              <div className="text-xs w-20 ml-1 text-gray-300">
                인천대학교 앱센터
              </div>
            </div>
            <button className=" bg-[#78be5e] w-8 h-8 rounded-full mx-auto my-auto text-white text-xl">
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
