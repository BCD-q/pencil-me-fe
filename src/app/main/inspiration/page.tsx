import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

export default function InspirationPage(): JSX.Element {
  return (
    <div className="relative h-full">
      <Cartegory>영감</Cartegory>
      <WorkBar>오늘의 제안</WorkBar>
    </div>
  );
}
