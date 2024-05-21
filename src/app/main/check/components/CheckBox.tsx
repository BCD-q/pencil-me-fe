import Link from 'next/link';
import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface category {
  name?: string;
  percentage: string;
}

export default function CheckBox() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const getCheck = useQuery({
    queryKey: ['checkDetail'],
    queryFn: () => {
      return axios.get(`${apiKey}/anaylsis`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  useEffect(() => {
    getCheck.refetch();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {getCheck.data &&
        getCheck.data.data.data
          .slice(2)
          .map((item: category, index: number) => (
            <Link
              href=""
              className={`flex justify-around w-11/12 h-12 text-lg bg-white border-b-[1px] border-gray-200 ${
                index === 0 && getCheck.data.data.data.slice(2).length !== 1
                  ? 'rounded-t-lg'
                  : ''
              } ${index === getCheck.data.data.data.slice(2).length - 1 && getCheck.data.data.data.slice(2).length !== 1 ? 'rounded-b-lg mb-8' : ''}`}
              key={index}
            >
              <button className="ml-2 w-1/5 truncate text-sm sm:text-md">
                {item.name}
              </button>
              <progress
                className="progress progress-accent bg-gray-200 rounded-xl w-3/5 my-auto h-1/2 mx-2 hover:animate-pulse"
                value={item.percentage}
                max="100"
              ></progress>
              <div className="flex">
                <button className="w-8 justify-end flex my-auto text-xs sm:text-md mx-3">
                  {isNaN(parseInt(item.percentage))
                    ? 0
                    : parseInt(item.percentage)}
                  %
                </button>
              </div>
            </Link>
          ))}
    </div>
  );
}
