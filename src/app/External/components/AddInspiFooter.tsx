'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import Summarize from './Summarize';

interface Summary {
  title: string;
  contents: string;
  deadline: string;
  categoryId: number;
}

export default function AddInspiFooter({ url }: { url: string }) {
  const [summarize, setSummarize] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const InspiTodo = useMutation({
    mutationFn: () => {
      return axios.post(`${apiKey}/communicator/summary?url=${url}`, null, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
      SummaryTodo.mutate(data?.data);
    },
    onError: () => {
      alert('요약에 실패했습니다. 다시 시도해주세요!');
    },
  });

  const SummaryTodo = useMutation({
    mutationFn: (data: Summary) => {
      return axios.post(
        `${apiKey}/todos`,
        {
          title: data?.title,
          contents: data?.contents,
          deadline: data?.deadline.substr(0, 19),
          categoryId: data?.categoryId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      alert('할일 추가가 완료되었습니다!');
      router.push('/main');
    },
  });

  if (InspiTodo.isPending) {
    return (
      <div className="absolute bg-white skeleton z-50 shadow-2xl left-[8%] top-1/3 w-5/6 h-1/3">
        <div className="mx-auto text-center text-gray-400 my-16">
          할일 추가중 ...{' '}
        </div>
        <div className="flex w-1/4 mx-auto loading loading-spinner justify-center my-auto text-gray-400 text-md sm:text-2xl md:text-3xl border-t-2"></div>
      </div>
    );
  }

  return (
    <div className="flex bg-white flex-row sticky bottom-0 h-16 z-40">
      {summarize && <Summarize url={url} />}
      <button
        className={`btn relative text-accent w-1/4 border-none my-auto text-sm sm:text-md z-50
        ${clicked ? '' : 'animate-pulse'}`}
        onClick={() => {
          setClicked(!clicked);
          setSummarize(!summarize);
          console.log(summarize);
        }}
      >
        요약하기
      </button>
      <button
        className="flex ml-auto justify-center text-white mr-4 items-center my-auto w-1/5 bg-accent text-sm sm:text-md h-1/2 rounded-3xl"
        onClick={(e) => {
          e.preventDefault();
          InspiTodo.mutate();
        }}
      >
        <FaPlus className="w-1/4 text-white" />
        추가
      </button>
    </div>
  );
}
