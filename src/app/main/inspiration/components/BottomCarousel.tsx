'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchInspiration } from '@/libs';

export default function BottonCarousel() {
  const InterestArray = [
    {
      title: 'What backend are you using and why? : r/FlutterDev',
      link: 'https://www.reddit.com/r/FlutterDev/comments/obubqi/what_backend_are_you_using_and_why/',
      thumbnail_url: '',
    },
    {
      title: 'Swagger Editor shows "Failed to fetch" error - Stack Overflow',
      link: 'https://stackoverflow.com/questions/43375605/swagger-editor-shows-failed-to-fetch-error',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl7zuT3cw_BBRAyhdQEbQuBgqdNHXKHIYKL8S8ly8x9L_XA9sdwSmiHs&s',
    },
    {
      title:
        'Best backend language & framework to use with Flutter in 2023 ...',
      link: 'https://www.reddit.com/r/FlutterDev/comments/15ciou4/best_backend_language_framework_to_use_with/',
      thumbnail_url: '',
    },
    {
      title: 'Python and FastAPI tutorial in Visual Studio Code',
      link: 'https://code.visualstudio.com/docs/python/tutorial-fastapi',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPu43UJ1pdY--GRSH9Bw2HRARIO7DA1v83gSv9heodD6q5J1h1E2CKOu8&s',
    },
    {
      title: 'GitLab CI/CD examples | GitLab',
      link: 'https://docs.gitlab.com/ee/ci/examples/',
      thumbnail_url: '',
    },
    {
      title:
        'Could not send request Error: Request timed out - Help - Postman ...',
      link: 'https://community.postman.com/t/could-not-send-request-error-request-timed-out/33656',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMkL9qs9wwqD2GGfxifh0JH7KLPuSv7wFDua2FXjqNMjq_CHvdMPKLIUa&s',
    },
    {
      title: 'Joseph Orji - RCP | LinkedIn',
      link: 'https://ca.linkedin.com/in/joseph-orji',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6sLIc6RAhFxfkjRujY8EdqkL2HHyLgl2M7r51S-4B8Ub5cXCKa3nP9g&s',
    },
    {
      title:
        'markdown-badges | Badges for your personal developer branding ...',
      link: 'https://ileriayo.github.io/markdown-badges/',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVb2AO6og15fcy-wpbqu2i9_uaLLWDssDuHfVadeP90_rJID_sQQl-I8&s',
    },
    {
      title: 'Stack Overflow Developer Survey 2023',
      link: 'https://survey.stackoverflow.co/2023',
      thumbnail_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHvh3BF03rIN3N_6GMGyjzJBXtxykLhN1-eCoo503TKfdWbeQEziTxGqW&s',
    },
    {
      title: 'Ask HN: Who wants to be hired? (September 2023) | Hacker News',
      link: 'https://news.ycombinator.com/item?id=37351665',
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
        return <BottomComponent data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const url = data.link;

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in bg-white">
      <Link href={`../External?url=${url}`}>
        <img
          src={data.thumbnail_url}
          alt=""
          className="rounded-t-lg w-full h-[50vw] sm:h-[33vw] lg:h-[20vw] flex-2 object-cover"
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
