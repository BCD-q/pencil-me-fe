'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { Info } from '@/libs/useRegister';

export default function RegisterInput(): JSX.Element {
  const [inputs, setInputs] = useState({
    uid: '',
    password1: '',
    password2: '',
    email: '',
    nickname: '',
  });

  const [submit, setSubmit] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  // 비밀번호 중복 확인
  const IsPassword = () => {
    const { password1, password2 } = inputs;
    if (password2 == '') return;
    else if (password1 === password2) {
      return (
        <span className="mt-2 text-[#78be5e] mx-auto">
          비밀번호가 일치합니다!
        </span>
      );
    } else if (password1 !== password2)
      return (
        <span className="mt-2 text-red-600 mx-auto">
          비밀번호가 일치하지 않습니다. 다시 입력해주세요
        </span>
      );
  };

  const IsRegister = ({ Info }: { Info: Info }) => {
    const mutation = useMutation({
      mutationFn: (Info: Info) => {
        return axios.post(`${apiKey}members`, Info);
      },
    });

    return (
      <button
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
        onClick={() => {
          mutation.mutate(Info);
        }}
      >
        회원가입
      </button>
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
          placeholder="계정명"
          className="w-7/12 mx-auto mt-1 rounded-lg input input-bordered"
          onChange={(e) => setInputs({ ...inputs, uid: e.target.value })}
        />
        <button className="btn w-3/12 px-0 my-auto mx-auto bg-[#78be5e] text-white text-lg rounded-2xl">
          중복 확인
        </button>
      </div>
      <input
        type="text"
        placeholder="이메일"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="닉네임"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setInputs({ ...inputs, nickname: e.target.value })}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setInputs({ ...inputs, password1: e.target.value })}
      />
      <input
        type="password"
        placeholder="비밀번호 재입력"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered"
        onChange={(e) => setInputs({ ...inputs, password2: e.target.value })}
      />
      {IsPassword()}
      {/* <Link
        href="../main"
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
        onClick={IsRegister}
      >
        <button>회원가입</button>
      </Link> */}
      <IsRegister Info={inputs} />
    </>
  );
}
