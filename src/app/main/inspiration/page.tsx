import dynamic from 'next/dynamic';

import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

const BottomCarousel = dynamic(
  () => import('../inspiration/components/BottomCarousel'),
  {
    loading: () => <p></p>,
  },
);

export default function InspirationPage(): JSX.Element {
  return (
    <div className="h-full flex flex-col">
      <Cartegory>동기 부여</Cartegory>
      <WorkBar>오늘의 제안</WorkBar>

      <div className="flex-1">
        <BottomCarousel />
      </div>
    </div>
  );
}
