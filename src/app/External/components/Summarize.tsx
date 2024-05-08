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
      <div className="flex flex-col absolute bottom-[4rem] h-[30vh] w-full bg-accent rounded-t-xl">
        <div className="w-1/2 mx-auto h-1/3 my-auto text-white">
          요약중입니다. 잠시만 기다려주세요
        </div>
      </div>
    );

  return (
    <div className="flex flex-col w-full absolute bottom-[4rem] h-[30vh] bg-accent rounded-t-xl">
      <div className="mx-auto my-8 w-3/4 text-white h-1/6 border-b-2">
        {data?.data?.result.data.title}
      </div>
      <div className="text-white text-md sm:text-lg w-5/6 mx-auto">
        {data?.data?.result.data.contents}
      </div>
    </div>
  );
}
