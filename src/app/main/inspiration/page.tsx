import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

import BottomCarousel from './components/BottomCarousel';

export default function InspirationPage(): JSX.Element {
  return (
    <div className="h-full flex flex-col">
      <Cartegory>영감</Cartegory>
      <WorkBar>오늘의 제안</WorkBar>

      <div className="flex-1">
        <BottomCarousel />
      </div>
    </div>
  );
}
