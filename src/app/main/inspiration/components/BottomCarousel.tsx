'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchInspiration } from '@/libs';

export default function BottonCarousel() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: fetchInspiration,

    onSuccess: (data) => {
      console.log(data);
      console.log(localStorage.getItem('interests'));
    },
    onError: (error) => {
      console.log(error);
      console.log('data', localStorage.getItem('interests'));
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isPending)
    return (
      <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-2 gap-2 w-full mx-auto">
        {Array.from({ length: 25 }).map((_, index) => (
          <>
            <div className="skeleton w-11/12 h-[40vh] sm:h-[40vw] lg:h-[23vw] bg-gray-200 mt-4 mx-auto"></div>
          </>
        ))}
      </ul>
    );

  // const { mutate } = useMutation({
  //   mutationFn: (item) => {
  //     return axios.post(
  //       `${apiKey}/todos`,
  //       {
  //         title: 'title',
  //         contents: 'contents',
  //         categoryId: 1,
  //         deadline: '2022-12-31',
  //         isFinished: false,
  //       },
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem('token'),
  //         },
  //       },
  //     );
  //   },
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  return (
    <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {data?.data.result.data.map((item: any) => {
        return <BottomComponent data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const url = data.link;

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in">
      <Link href={`../External?url=${url}`}>
        <img
          src={data.thumbnail_url}
          alt=""
          className="rounded-t-lg w-full h-[85vw] sm:h-[33vw] lg:h-[20vw] flex-2 object-cover"
        />
      </Link>
      <div className="flex justify-between items-center p-2">
        <div className="flex-1 overflow-hidden whitespace-nowrap my-auto">
          <div className="text-md text-ellipsis overflow-hidden">
            {data.title}
          </div>
          <div className="text-sm text-gray-400 text-ellipsis overflow-hidden">
            인천대학교 앱센터
          </div>
        </div>
        <button className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl text-white text-xl">
          +
        </button>
      </div>
    </li>
  );
}
