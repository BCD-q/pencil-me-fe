import AvatarBox from '@/app/main/profile/components/AvatarBox';
import Cartegory from '@/component/common/Cartegory';

export default function ProfilePage(): JSX.Element {
  return (
    <div className="flex flex-col h-full">
      <Cartegory>프로필</Cartegory>
      <div className="flex flex-col items-center flex-grow mt-2 bg-gray-200 border-8 border-slate-200 ">
        <AvatarBox />
      </div>
    </div>
  );
}
