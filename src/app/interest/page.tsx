'use client';

import { GiClick } from 'react-icons/gi';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface InterestItem {
  id: number;
  keyword: string;
}

export default function Interest() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { data, isLoading, error } = useQuery({
    queryKey: ['interests'],
    queryFn: () => {
      return axios.get(`${apiKey}/interests`);
    },
  });

  isLoading && (
    <div className="flex loading loading-spinner w-2/5 mx-auto"></div>
  );

  const { mutate } = useMutation({
    mutationFn: (keyword: string) => {
      return axios.post(`${apiKey}/interestIds-mapping/${keyword}`);
    },
  });

  return (
    <div className="flex flex-col bg-gray-200 h-full w-full">
      <header className="w-full h-28 text-black text-2xl flex items-center justify-center">
        <GiClick className="w-14 h-14 mr-2" />
        관심사를 눌러보세요!
      </header>
      <ul className="h-[70vh] w-full overflow-y-auto">
        {data?.data?.data.map((item: InterestItem, index: number) => {
          const isFirst = index === 0;
          const isLast = index === data.data.data.length - 1;
          const clicked = false;
          const buttonClassName = `
          flex mx-auto w-11/12 h-12 pt-2 pl-4 text-lg border-b-[1px] bg-white
          ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}
        `;
          return (
            <button className={buttonClassName} key={index}>
              {item.keyword}
            </button>
          );
        })}
      </ul>
      <div className="flex mt-auto w-full h-16 items-center justify-center ml-auto bg-white">
        <button
          className="ml-auto mr-4 bg-accent text-white w-1/4 h-1/2 rounded-lg"
          onClick={mutate()}
        >
          Done
        </button>
      </div>
    </div>
  );
}
