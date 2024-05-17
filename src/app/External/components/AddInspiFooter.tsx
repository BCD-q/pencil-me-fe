'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import Summarize from './Summarize';

export default function AddInspiFooter({ url }: { url: string }) {
  const [summarize, setSummarize] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const InspiTodo = useMutation({
    mutationFn: () => {
      return axios.post(`${apiKey}/communicator/summary?url=${url}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
      router.back();
    },
  });

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
        onClick={() => {
          InspiTodo.mutate();
        }}
      >
        <FaPlus className="w-1/4 text-white" />
        추가
      </button>
    </div>
  );
}
