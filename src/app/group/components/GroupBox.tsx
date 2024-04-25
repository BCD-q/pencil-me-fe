'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '@/libs';

interface category {
  categoryId?: number;
  memberId?: number;
  categoryName?: string;
}

export default function GroupDataBox() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['category'],
    queryFn: () => fetchCategory(),
  });

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  return (
    <div className="flex flex-col items-center ">
      {data &&
        data.data.map((item: category, index) => (
          <button
            className={`flex justify-start w-11/12 h-12 pt-2 pl-4 text-lg border-b-[1px] bg-white rounded-sm ${
              index === 0 ? 'rounded-t-lg' : ''
            } ${index === data.data.length - 1 ? 'rounded-b-lg ' : ''}`}
            key={index}
          >
            {item.categoryName}
          </button>
        ))}
    </div>
  );
}
