'use client';

import { useRef, useState } from 'react';

import useProfileStore from '../../../../modules/profileStore';

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
      <div className="flex justify-center  w-full mx-auto text-black bg-gray-300 h-1/6 items-center rounded-t-lg">
        프로필
      </div>
      <div className="flex justify-center mt-4"></div>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        className="flex w-10/12 mx-auto mt-2 text-center rounded-lg just-center input input-bordered"
      />
      <button
        className="flex items-center justify-center w-full bg-gray-200 mx-auto mt-auto text-black rounded-b-lg h-1/6 border-t-gray-300 hover:bg-accent transition ease-in-out delay-150"
        onClick={setProfileModalClose}
      >
        닫기
      </button>
    </div>
  );
}
