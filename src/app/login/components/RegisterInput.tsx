'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import Toast from '@/component/common/Toast';
import { Info } from '@/libs/useRegister';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function RegisterInput(): JSX.Element {
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const [clicked, setClicked] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (Info: Info) => {
      return axios.post(`${apiKey}/members/sign-up`, Info);
    },
    onSuccess: ({ data }) => {
      localStorage.setItem('memberId', data.data.id);
      onLogin.mutate();

      setTimeout(() => {
        router.push(`/interest/${data.data.id}`);
      }, 2000);
    },
  });

  const onLogin = useMutation({
    mutationFn: () => {
      return axios.post(`${apiKey}/members/sign-in`, {
        uid: uid,
        password: password,
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.data.token);
    },
  });

  useEffect(() => {
    if (clicked === true) {
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    }
    console.log(clicked);
  }, [clicked]);

  // 비밀번호 중복 확인
  const IsPassword = () => {
    if (confirmPassword == '') return;
    else if (password === confirmPassword) {
      return (
        <span className="mt-2 text-[#78be5e] mx-auto">
          비밀번호가 일치합니다!
        </span>
      );
    } else if (password !== confirmPassword)
      return (
        <span className="mt-2 text-red-600 mx-auto">
          비밀번호가 일치하지 않습니다. 다시 입력해주세요
        </span>
      );
  };

  return (
    <>
      {clicked && <Toast>중복되지 않았습니다.</Toast>}
      {mutation.isSuccess && <Toast>회원가입 성공!</Toast>}
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="아이디"
          value={uid}
          className="w-8/12 mr-[-13px] mx-auto mt-1 rounded-lg input input-bordered border-gray-300"
          onChange={(e) => setUid(e.target.value)}
        />
        <button
          className="btn w-[22%] mx-auto px-0 my-auto bg-[#78be5e] text-white text-md rounded-2xl"
          onClick={() => {
            if (uid.length !== 0) setClicked(true);
          }}
        >
          중복 확인
        </button>
      </div>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered border-gray-300"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered border-gray-300"
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered border-gray-300"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호 재입력"
        value={confirmPassword}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered border-gray-300"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {IsPassword()}

      <button
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
        onClick={() => {
          mutation.mutate({
            uid,
            password,
            email,
            nickname,
          });
        }}
      >
        회원가입
      </button>
    </>
  );
}
