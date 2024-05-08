'use client';

import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import useProfileStore from '../../../../modules/profileStore';
import Avatar from './Avatar';
import ChangeProfileModal from './ChangeProfileModal';

export default function AvatarBox(): JSX.Element {
  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { profileModalOpen, setProfileModalOpen } = useProfileStore();

  const { mutate } = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`${apiKey}/interestIds-mapping?interestIds=999`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    onSuccess: () => {
      router.push('/interest');
    },
  });

  return (
    <div className="flex flex-col w-11/12 my-4 bg-white h-2/3 rounded-box">
      <Avatar />
      <button
        className="mx-auto border-none w-44 my-4 btn btn-primary bg-[#78be5e] text-white text-lg"
        onClick={setProfileModalOpen}
      >
        프로필 변경하기
      </button>
      <button
        className="bottom-12 flex btn ml-auto mt-auto w-full text-accent rounded-xl border-none bg-gray-100 rounded-t-none rounded-l-none"
        onClick={() => {
          mutate(999);
        }}
      >
        관심사 변경하기
      </button>
      {profileModalOpen && <ChangeProfileModal />}
    </div>
  );
}
