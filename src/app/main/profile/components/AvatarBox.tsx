'use client';

import useProfileStore from '../../../../modules/profileStore';
import * as D from '../../../../resources/data';
import ChangeProfileModal from './ChangeProfileModal';

export default function AvatarBox(): JSX.Element {
  const { profileModalOpen, setProfileModalOpen } = useProfileStore();

  return (
    <div className="flex flex-col w-11/12 my-4 bg-white min-h-full rounded-box">
      <div className="flex justify-center avatar">
        <div className="flex flex-col w-40 mt-4 rounded-full">
          <img src={D.randomAvatar()} alt="" />
        </div>
      </div>
      <div className="mx-auto my-2 text-xl text-black">{D.randomName()}</div>
      <button
        className="mx-auto w-44 my-4 btn btn-primary bg-[#78be5e] text-white text-lg"
        onClick={setProfileModalOpen}
      >
        프로필 변경하기
      </button>
      {profileModalOpen && <ChangeProfileModal />}
    </div>
  );
}
