'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function LoginInput() {
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (Info: LoginInfoRequest) => {
      return axios.post(`${apiKey}/members/sign-in`, Info);
    },
    onSuccess: ({ data }) => {
      console.log(data);
      localStorage.setItem('password', password);
      localStorage.setItem('token', data.data.token);
      axios.defaults.headers.common['Authorization'] = data.data.token;

      alert('로그인이 완료되었습니다!');
      router.push('/group');
    },
    onError: () => {
      alert('로그인에 실패했습니다!');
    },
  });

  return (
    <>
      <input
        type="text"
        placeholder="계정명"
        className="w-11/12 mx-auto mt-4 rounded-lg input input-bordered border-gray-300"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered border-gray-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
        onClick={() => mutate({ uid, password })}
      >
        로그인
      </button>
    </>
  );
}

type LoginInfoRequest = {
  uid: string;
  password: string;
};

type LoginInfoResponse = {
  responseCode: string;
  responseMessage: string;
  data: {
    token: string;
  };
};
