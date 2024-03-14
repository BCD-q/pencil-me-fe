import Link from 'next/link';
import { useEffect, useState } from 'react';

import useGroupStore from '@/modules/groupStore';

interface category {
  categoryId: number;
  memberId: number;
  categoryName: string;
}

export default function GroupBox(): JSX.Element {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [category, setCategory] = useState<category[]>();
  const { groupModalOpen } = useGroupStore();

  const viewCategory = async () => {
    const res = await fetch(`${apiKey}categories`, {
      method: 'GET',
    });
    const data = await res.json();
    setCategory(data.data);
  };

  useEffect(() => {
    viewCategory();
  }, [groupModalOpen]);

  return (
    <div className="flex flex-col items-center justify-start flex-grow bg-gray-200 border-8">
      {category &&
        category.map((item, index) => (
          <button
            className={`flex justify-start w-11/12 h-12 pt-2 pl-4 text-lg border-b-[1px] bg-white rounded-sm ${
              index === 0 ? 'rounded-t-lg' : ''
            } ${index === category.length - 1 ? 'rounded-b-lg' : ''}`}
            key={index}
          >
            {item.categoryName}
          </button>
        ))}
    </div>
  );
}
