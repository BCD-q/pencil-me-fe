'use client';

import { useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useProfileStore from '../../../../modules/profileStore';

export type profileProps = {
  profileName: string;
  profileImage: string;
};

export default function ChangeProfileModal(): JSX.Element {
  const { profileModalOpen, setProfileModalClose } = useProfileStore();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { mutate } = useMutation({
    mutationFn: () => {
      console.log(email);
      console.log(nickname);
      console.log(data?.data.data.uid);
      console.log(localStorage.getItem('password'));
      return axios.put(
        `${apiKey}/members`,
        {
          uid: data?.data.data.uid,
          email: email,
          password: localStorage.getItem('password'),
          nickname: nickname,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: () => {
      setProfileModalClose();
    },
  });

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      try {
        return axios.get(`${apiKey}/members`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div className="absolute z-10 flex flex-col w-4/5 max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl border-2 max-h-96 h-1/2 top-1/2 left-1/2 rounded-xl">
      <div className="flex justify-center w-full mx-auto text-white text-lg bg-accent h-1/6 items-center rounded-t-lg md:text-xl">
        프로필 변경
      </div>
      <div className="flex flex-col my-auto">
        <div className="flex justify-center w-full mt-4 h-6">이메일</div>
        <input
          type="text"
          placeholder={data?.data.data.email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex w-10/12 mx-auto mt-2 text-center rounded-lg just-center input input-bordered border-gray-300"
        />
        <div className="flex justify-center w-full mt-4 h-6">닉네임</div>
        <input
          type="text"
          placeholder={data?.data.data.nickname}
          className="flex w-10/12 mx-auto mt-2 mb-2 text-center rounded-lg just-center input input-bordered border-gray-300"
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div className="flex flex-row h-1/6 mt-auto">
        <button
          className="flex items-center justify-center rounded-br-none w-full bg-gray-200 mx-auto mt-auto border-r-2 border-gray-100 text-black rounded-b-lg h-full border-t-gray-300 hover:bg-accent transition ease-in-out delay-150"
          onClick={() => mutate()}
        >
          수정
        </button>
        <button
          className="flex items-center justify-center w-full rounded-bl-none bg-gray-200 mx-auto mt-auto text-black rounded-b-lg h-full border-t-gray-300 hover:bg-accent transition ease-in-out delay-150"
          onClick={setProfileModalClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
