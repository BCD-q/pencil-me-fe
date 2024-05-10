import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Summarize({ url }: { url: string }) {
  const { data, isLoading, error, refetch } = useQuery({
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
      <div className="flex skeleton rounded-b-none flex-col absolute bottom-[4rem] h-[30vh] w-full bg-accent rounded-t-xl shadow-2xl">
        <div className="flex w-full justify-center my-auto text-white text-xl sm:text-2xl md:text-3xl">
          요약중입니다. 잠시만 기다려주세요
        </div>
      </div>
    );

  return (
    <div className="flex flex-col w-full absolute bottom-[4rem] h-[30vh] shadow-2xl bg-accent rounded-t-xl">
      <div className="mx-auto my-8 w-3/4 text-white h-1/6 border-b-2">
        {data?.data?.result.data.title}
      </div>
      <div className="text-white text-md sm:text-lg w-5/6 mx-auto">
        {data?.data?.result.data.contents}
      </div>
    </div>
  );
}
