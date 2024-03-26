import { IoChatboxEllipsesOutline } from 'react-icons/io5';

export default function BlankText() {
  return (
    <div className="w-5/6 flex mx-auto  bg-inherit rounded-md text-center mt-16 h-1/3 text-gray-500">
      <div className="flex flex-col mx-auto text-xl items-center justify-center">
        <IoChatboxEllipsesOutline className="w-40 h-40" />
        일정을 등록해보세요!
      </div>
    </div>
  );
}
