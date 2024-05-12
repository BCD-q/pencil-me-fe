'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchInspiration } from '@/libs';

export default function BottonCarousel() {
  const InterestArray = [
    {
      title:
        'react-query에 typescript 적용하기 - 리액트 쿼리, 타입스크립트 ...',
      subtitle: 'React-query',
      link: 'https://gusrb3164.github.io/web/2022/01/23/react-query-typescript/',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYc6SGcmKDZ4fvqI2CQAWpo_sB4J6ug7g6DsW1RKEq2b9SMtOlmvO3u_A&s',
    },
    {
      title: 'TypeScript | TanStack Query React Docs',
      subtitle: 'TypeScript',
      link: 'https://tanstack.com/query/latest/docs/framework/react/typescript',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbdTD0xRGSSF4ANGkwoCBCz3eW9JOJ0ebnGD4v3eZe21bGr7K-IJwfWw&s',
    },
    {
      title: 'React Query(TypeScript + React v18)',
      subtitle: 'React-query',
      link: 'https://velog.io/@gkj8963/React-Query',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAec3uSmQjDJcCFgjc6_K3iceAg0U2p5We0562RQfC653VFRjI5bPE6Y&s',
    },
    {
      title:
        'TypeScript로 React Query 시작하기. Getting Started with React ...',
      subtitle: 'TypeScript',
      link: 'https://medium.com/@daori/typescript%EB%A1%9C-react-query-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-c7622d2c3258',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSeZ7LRsUKDRyIt_VDvCT7TXJsv2JuJT-0A5g0qIcN_BEdje1fZ3TllM&s',
    },
    {
      title: 'React Query and TypeScript - DEV Community',
      subtitle: 'React-query',
      link: 'https://dev.to/tkdodo/react-query-and-typescript-34ai?comments_sort=top',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5Av4KuEWYYQ0ndUqoPh0R9QJObENZnB1GwH0SrZGwiBDhJYvHriKXbI&s',
    },
    {
      title: 'Usage With TypeScript | Redux Toolkit',
      subtitle: 'Redux Toolkit',
      link: 'https://redux-toolkit.js.org/rtk-query/usage-with-typescript',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4_4_RxeABTOGhOlzXrpjznR4c_NVLajoXa376OqGmbbEdjtmXJgcj4E&s',
    },
    {
      title: 'TanStack Query v5 정식 버전 살펴보기 (리액트 쿼리) | moonkorea',
      subtitle: 'TansTack Query',
      link: 'https://www.moonkorea.dev/React-TanStack-Query-v5-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-(%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%BF%BC%EB%A6%AC)',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbdTD0xRGSSF4ANGkwoCBCz3eW9JOJ0ebnGD4v3eZe21bGr7K-IJwfWw&s',
    },
    {
      title: 'TypeScript React-Query (GraphQL-Codegen)',
      subtitle: 'TansTack Query',
      link: 'https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query',
      thumbnail_url: '',
    },
    {
      title:
        'reactjs - react-query useQuery typescript No overload matches this ...',
      subtitle: 'TansTack Query',
      link: 'https://stackoverflow.com/questions/73122294/react-query-usequery-typescript-no-overload-matches-this-call',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl7zuT3cw_BBRAyhdQEbQuBgqdNHXKHIYKL8S8ly8x9L_XA9sdwSmiHs&s',
    },
    {
      title: 'TypeScript React Apollo (GraphQL-Codegen)',
      subtitle: 'TansTack Query',
      link: 'https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo',
      thumbnail_url: '',
    },
  ];

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

  if (isPending)
    return (
      <ul className="inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-2 gap-2 w-full mx-auto">
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

  // data?.data.result.data.

  return (
    <ul className="relative inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {InterestArray.map((item: any) => {
        return <BottomComponent key={item.id} data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const NoImage = 'https://www.svgrepo.com/show/340721/no-image.svg';
  const url = data.link;
  const title = data.title;

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in bg-white">
      <Link href={`../External?url=${url}&title=${title}`}>
        {data.thumbnail_url !== '' ? (
          <Image
            src={data.thumbnail_url}
            alt="thumbnail"
            className="w-full h-40 object-cover rounded-t-xl"
          />
        ) : (
          <div className="flex w-full h-40">
            <Image
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
            {data.title}
          </div>
          <div className="text-sm text-gray-400 text-ellipsis overflow-hidden">
            {data.subtitle}
          </div>
        </div>
        <button className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl text-white text-xl">
          +
        </button>
      </div>
    </li>
  );
}
