'use client';

import { useRef, useState } from 'react';

import useProfileStore from '../../modules/profileStore';

export type profileProps = {
  profileName: string;
  profileImage: string;
};

export default function ChangeProfileModal(): JSX.Element {
  const { profileModalOpen, setProfileModalClose } = useProfileStore();
  const [profile, setProfile] = useState<profileProps>();
  const modalBackground = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute z-10 flex flex-col w-4/5 max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl border-2 min-h-48 h-1/5 top-1/2 left-1/2 rounded-xl"
      ref={modalBackground}
    >
      <div className="flex justify-center my-4">프로필</div>
      <div className="flex justify-center"></div>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        className="flex w-10/12 mx-auto mt-2 text-center rounded-lg just-center input input-bordered"
      />
      <button
        className="flex items-end justify-center flex-1 my-2 "
        onClick={setProfileModalClose}
      >
        닫기
      </button>
    </div>
  );
}
