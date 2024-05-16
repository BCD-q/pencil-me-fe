'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';

import { fetchInspiration } from '@/libs';
import useInterestsStore from '@/modules/interestsStore';

interface InterestItem {
  thumbnail_url?: string;
  title?: string;
  link?: string;
}

export default function BottonCarousel() {
  const { InterestsArray, setInterests } = useInterestsStore();

  const { data, isPending, mutate } = useMutation({
    mutationFn: fetchInspiration,

    onSuccess: (data) => {
      console.log(data);
      setInterests(data?.data.result.data);
      console.log(localStorage.getItem('interests'));
    },
    onError: (error) => {
      alert('관심사가 없습니다. ');
    },
  });

  useEffect(() => {
    if (InterestsArray.length === 0) {
      mutate();
    }
    console.log('interests', InterestsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isPending)
    return (
      <ul className="inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-2 gap-2 w-full mx-auto">
        {Array.from({ length: 25 }).map((_, index) => (
          <>
            <div className="skeleton w-11/12 h-[20vh] sm:h-[33vw] lg:h-[23vw] bg-gray-200 mt-4 mx-auto"></div>
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

  // data?.data.result.data.

  return (
    <ul className="relative inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {InterestsArray?.map((item: any) => {
        return <BottomComponent key={item.id} data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const NoImage = 'https://www.svgrepo.com/show/340721/no-image.svg';
  const url = data?.link;
  const title = data?.title;

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in bg-white">
      <Link href={`../External?url=${url}&title=${title}`}>
        {data.thumbnail_url !== '' ? (
          <img
            src={data?.thumbnail_url}
            alt="thumbnail"
            className="w-full h-40 object-cover rounded-t-xl"
          />
        ) : (
          <div className="flex w-full h-40">
            <img
              src={NoImage}
              alt="thumbnail"
              className="flex mx-auto my-auto w-1/2 h-1/2 object-cover rounded-t-xl"
            />
          </div>
        )}
      </Link>
      <div className="flex justify-between items-center p-2 border-t-2 border-gray-200">
        <div className="flex-1 overflow-hidden whitespace-nowrap my-auto">
          <div className="text-md text-ellipsis overflow-hidden">
            {data?.title}
          </div>
          <div className="text-sm text-gray-400 text-ellipsis overflow-hidden">
            {data?.subtitle}
          </div>
        </div>
        <button className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl text-white text-xl">
          +
        </button>
      </div>
    </li>
  );
}
