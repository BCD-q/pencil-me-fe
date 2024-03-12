'use client';

import { useEffect, useState } from 'react';

export default function GroupBox(): JSX.Element {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [category, setCategory] = useState<string[]>();

  const viewCategory = async () => {
    const res = await fetch(`${apiKey}categories`, {
      method: 'GET',
    });
    const data = await res.json();
    setCategory(data.data);
  };

  useEffect(() => {
    viewCategory();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start flex-grow bg-gray-200 border-8">
      {category &&
        category.map((item) => (
          <button className="flex justify-start w-11/12 h-12 pt-2 pl-4 text-lg border-b-2 bg-white hover:bg-gray-300 rounded-sm">
            {item.categoryName}
          </button>
        ))}
    </div>
  );
}
