import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Summarize({ url }: { url: string }) {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['summarize'],
    queryFn: () => {
      return axios.get(
        `http://na2ru2.me:6380/inspiration/page-crawler?url=${url}`,
      );
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading)
    return (
      <div className="flex skeleton rounded-b-none flex-col text-gray-400 absolute bottom-[4rem] h-[30vh] w-full bg-white rounded-t-xl shadow-lg">
        <div className=" mx-auto my-8">요약중입니다. 잠시만 기다려주세요!</div>
        <div className="flex w-1/3 mx-auto loading loading-spinner justify-center my-auto text-gray-400 text-md sm:text-2xl md:text-3xl"></div>
      </div>
    );

  if (isFetching)
    return (
      <div className="flex skeleton rounded-b-none flex-col text-gray-400 absolute bottom-[4rem] h-[30vh] w-full bg-white rounded-t-xl shadow-lg">
        <div className=" mx-auto my-8">요약중입니다. 잠시만 기다려주세요!</div>
        <div className="flex w-1/3 mx-auto loading loading-spinner justify-center my-auto text-gray-400 text-md sm:text-2xl md:text-3xl"></div>
      </div>
    );

  return (
    <div className="flex flex-col w-full absolute bottom-[4rem] h-[30vh] bg-white rounded-t-xl">
      <div className="mx-auto my-8 w-3/4 text-gray-400 h-1/6 border-b-2 text-2xl">
        {data?.data?.result.data.title}
      </div>
      <div className="text-gray-400 text-lg sm:text-xl w-5/6 mx-auto">
        {data?.data?.result.data.contents}
      </div>
    </div>
  );
}
