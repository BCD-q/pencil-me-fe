import Cartegory from '@/component/common/Cartegory';

export default function InspirationPage(): JSX.Element {
  return (
    <div className="relative h-full">
      <Cartegory>영감</Cartegory>
      <div className="pt-2 pb-1 px-2 text-xs text-gray-400 bg-gray-200 border-[1px] border-gray-300 ">
        오늘의 제안
      </div>
    </div>
  );
}
