import Image from 'next/image';

import BubbleImage from '@/resources/images/common/BubbleImage.png';

export default function TopCarousel() {
  return (
    <div className="w-screen p-3">
      <div className="carousel w-full gap-2">
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
        <CarouselComponent />
      </div>
    </div>
  );
}

function CarouselComponent() {
  return (
    <>
      <div className="carousel-item rounded-xl flex-col border-2">
        <Image src={BubbleImage} className="w-36 h-36 m-auto" alt="" />
        <div className="bg-white flex justify-between my-1 mx-2 w-36 overflow-hidden">
          <div className="flex-1 overflow-hidden whitespace-nowrap my-auto">
            <div className="text-sm text-ellipsis overflow-hidden">
              서버 기술 블로그
            </div>
            <div className="text-xs text-gray-400 text-ellipsis overflow-hidden">
              인천대학교 앱센터
            </div>
          </div>
          <button className="bg-[#78be5e] w-8 h-8 rounded-full text-white text-xl shadow-xl">
            +
          </button>
        </div>
      </div>
    </>
  );
}
