import dynamic from 'next/dynamic';

import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

import BottonCarousel from './components/BottomCarousel';
import InfinityCarousel from './components/InfinityCarousel';

export default function InspirationPage(): JSX.Element {
  return (
    <div className="h-full flex flex-col">
      <div className="sticky top-0 z-50">
        <Cartegory>동기 부여</Cartegory>
        <WorkBar>오늘의 제안</WorkBar>
      </div>

      <div className="flex-1">
        <InfinityCarousel />
      </div>
    </div>
  );
}
