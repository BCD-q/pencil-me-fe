'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { Info } from '@/libs/useRegister';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function RegisterInput(): JSX.Element {
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [submit, setSubmit] = useState(false);

  const mutation = useMutation({
    mutationFn: (Info: Info) => {
      return axios.post(`${apiKey}/members`, Info);
    },
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!');
      router.push('/login');
    },
    onError: () => {
      alert('회원가입에 실패했습니다!');
    },
  });

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

  const IsValid = (): void => {
    setSubmit(true);
    console.log(submit);
  };

  return (
    <>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="아이디"
          value={uid}
          className="w-7/12 mx-auto mt-1 rounded-lg input input-bordered"
          onChange={(e) => setUid(e.target.value)}
        />
        <button className="btn w-3/12 px-0 my-auto mx-auto bg-[#78be5e] text-white text-lg rounded-2xl">
          중복 확인
        </button>
      </div>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호 재입력"
        value={confirmPassword}
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
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
