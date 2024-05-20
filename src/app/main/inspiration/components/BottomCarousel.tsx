'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import useInterestsStore from '@/modules/interestsStore';

interface InterestItem {
  thumbnail_url?: string;
  title?: string;
  link?: string;
}

interface Summary {
  title: string;
  contents: string;
  deadline: string;
  categoryId: number;
}

export default function BottonCarousel() {
  const { InterestsArray, setInterests } = useInterestsStore();

  const { data, isPending, mutate } = useMutation({
    mutationFn: () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const memId = localStorage.getItem('memberId');
      const InterestArr: any[] = [];

      const getInterests = async () => {
        const getInterests = await axios.get(
          `${apiKey}/interests-mapping?memberId=${memId}`,
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          },
        );

        getInterests.data.data.map((item: any) => {
          InterestArr.push(item?.keyword);
        });

        console.log(InterestArr);
      };

      getInterests();

      // const Interests = localStorage.getItem('interests');

      return axios.post(
        `${apiKey}/communicator/inspiration?start=1`,
        {
          keyword: InterestArr,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      setInterests(data?.data.data);
      console.log(data?.data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (InterestsArray.length === 0) {
      mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isPending)
    return (
      <ul className="inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-2 gap-2 w-full mx-auto">
        {Array.from({ length: 25 }).map((_, index) => (
          <>
            <li
              key={index}
              className="skeleton w-11/12 h-[20vh] sm:h-[33vw] lg:h-[23vw] bg-gray-200 mt-4 mx-auto"
            ></li>
          </>
        ))}
      </ul>
    );

  return (
    <ul className="relative inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {InterestsArray.map((item: InterestItem, index: number) => {
        return <BottomComponent key={index} data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const NoImage = 'https://www.svgrepo.com/show/340721/no-image.svg';
  const url = data?.link;
  const title = data?.title;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const router = useRouter();

  const InspiTodo = useMutation({
    mutationFn: (url) => {
      return axios.post(`${apiKey}/communicator/summary?url=${url}`, null, {
        headers: {
          Authorization: localStorage.getItem('token'),
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
          deadline: data?.deadline,
          categoryId: data?.categoryId,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
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
      <div className="flex flex-col rounded-xl skeleton bg-accent shadow-xl hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in text-white">
        <div className="mx-auto flex h-1/6 my-auto text-center">
          할일 추가중 ...
        </div>
      </div>
    );
  }

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in bg-white">
      <Link href={`../External?url=${url}&title=${title}`}>
        {data.thumbnail_url !== '' ? (
          <div className="relative w-full h-40">
            <Image
              src={data?.thumbnail_url}
              alt="thumbnail"
              fill={true}
              className="object-cover rounded-t-xl"
            />
          </div>
        ) : (
          <div className="flex w-full h-40">
            <Image
              src={NoImage}
              alt="thumbnail"
              width={500}
              height={500}
              className="object-cover flex mx-auto my-auto w-1/2 h-1/2 rounded-t-xl"
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
        <button
          className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl text-white text-xl"
          onClick={() => {
            InspiTodo.mutate(data?.link);
          }}
        >
          +
        </button>
      </div>
    </li>
  );
}
