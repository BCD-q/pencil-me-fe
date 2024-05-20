import AvatarBox from '@/app/main/profile/components/AvatarBox';
import Cartegory from '@/component/common/Cartegory';

import LogOut from './components/LogOut';

export default function ProfilePage(): JSX.Element {
  return (
    <div className="flex flex-col h-[100vh]">
      <Cartegory>프로필</Cartegory>
      <div className="flex flex-col items-center h-[70vh] bg-gray-200 border-8 border-slate-200 ">
        <AvatarBox />
      </div>
      <LogOut />
    </div>
  );
}
