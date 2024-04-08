import Image from 'next/image';

import Cartegory from '@/component/common/Cartegory';

import BubbleImage from '../../../../resources/images/common/BubbleImage.png';

export default function Detail() {
  return (
    <div className="w-full h-full">
      <Cartegory>디테일</Cartegory>
      <main className="flex flex-col h-full w-full items-center justify-center shaodw-xl">
        <div className="card w-3/4 h-3/4 bg-base-100 shadow-xl">
          <figure>
            <Image src={BubbleImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hello World</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              ad aperiam corrupti, hic officiis vitae reprehenderit, molestias
              nisi ullam temporibus est nobis? Excepturi neque ullam voluptatem
              ipsa eaque! Numquam, animi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate dolorem laudantium inventore
              consequuntur reiciendis, recusandae ab dolor magnam rem
              accusantium sint ea amet corporis ratione odio error quidem ipsam
              doloremque!
            </p>
            <div className="card-actions justify-end">
              <div className="btn bg-[#78be5e] text-white text-lg px-7">
                추가하기
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
