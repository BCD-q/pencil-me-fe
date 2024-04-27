'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchInspiration } from '@/libs';

export default function BottonCarousel() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['inspiration'],
    queryFn: () => fetchInspiration(),
  });

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  return (
    <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {data?.data.message.map((item: any) => {
        return <BottomComponent key={Symbol(item).toString()} data={item} />;
      })}
    </ul>
  );
}

function BottomComponent({ data }: { data: any }) {
  const AddInspi = () => {};

  return (
    <li className="rounded-xl shadow-xl flex-col">
      <img
        src={data}
        alt=""
        className="rounded-t-lg w-full h-[100vw] sm:h-[33vw] lg:h-[20vw] flex-2 object-cover"
      />
      <div className="flex justify-between items-center p-2">
        <div className="flex-1 overflow-hidden whitespace-nowrap my-auto">
          <div className="text-md text-ellipsis overflow-hidden">
            서버 기술 블로그
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
