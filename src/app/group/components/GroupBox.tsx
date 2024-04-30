import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '@/libs';

import useGroupStore from '../../../modules/groupStore';

interface category {
  categoryId?: number;
  memberId?: number;
  categoryName?: string;
}

export default function GroupDataBox() {
  const { groupModalOpen, setGroupModalClose } = useGroupStore();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  useEffect(() => {
    refetch();
  }, [groupModalOpen]);

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  return (
    <ul className="h-full w-full">
      {data?.data?.data.map((item: category, index: number) => {
        const isFirst = index === 0;
        const isLast = index === data.data.data.length - 1;
        const buttonClassName = `
          flex mx-auto w-11/12 h-12 pt-2 pl-4 text-lg border-b-[1px] bg-white
          ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}
        `;
        return (
          <button className={buttonClassName} key={index}>
            {item.categoryName}
          </button>
        );
      })}
    </ul>
  );
}
