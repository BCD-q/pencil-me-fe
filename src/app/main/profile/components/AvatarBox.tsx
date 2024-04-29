'use client';

import useProfileStore from '../../../../modules/profileStore';
import Avatar from './Avatar';
import ChangeProfileModal from './ChangeProfileModal';

export default function AvatarBox(): JSX.Element {
  const { profileModalOpen, setProfileModalOpen } = useProfileStore();

  return (
    <div className="flex flex-col w-11/12 my-4 bg-white h-2/3 rounded-box">
      <Avatar />
      <button
        className="mx-auto border-none w-44 my-4 btn btn-primary bg-[#78be5e] text-white text-lg"
        onClick={setProfileModalOpen}
      >
        프로필 변경하기
      </button>
      {profileModalOpen && <ChangeProfileModal />}
    </div>
  );
}
