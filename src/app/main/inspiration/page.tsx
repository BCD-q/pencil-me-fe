import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

import BottomCarousel from './components/BottomCarousel';
import TopCarousel from './components/TopCarousel';

export default function InspirationPage(): JSX.Element {
  return (
    <div className="h-full flex flex-col">
      <Cartegory>영감</Cartegory>
      <WorkBar>오늘의 제안</WorkBar>
      <div className="bg-white">
        <TopCarousel />
      </div>
      <WorkBar>이런건 어때요?</WorkBar>
      <div className="flex-1">
        <BottomCarousel />
      </div>
    </div>
  );
}
