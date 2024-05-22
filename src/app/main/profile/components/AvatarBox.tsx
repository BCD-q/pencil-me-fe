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
      return axios.delete(`${apiKey}/interests-mapping/999`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    onSuccess: () => {
      router.push('/interest/999');
    },
  });

  return (
    <div className="flex flex-col w-11/12 my-4 bg-white h-3/4 min-h-[280px] rounded-2xl">
      <Avatar />
      <button
        className="mx-auto border-none w-36 md:w-72 my-4 btn min-h-[6%] h-[8%] btn-primary bg-[#78be5e] text-white text-sm rounded-3xl"
        onClick={setProfileModalOpen}
      >
        프로필 변경하기
      </button>
      <button
        className="bottom-12 flex btn ml-auto mt-auto w-full text-accent rounded-xl border-none bg-gray-100 rounded-t-none"
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
