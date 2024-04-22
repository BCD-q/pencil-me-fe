import Link from 'next/link';
import { useEffect, useState } from 'react';

import useGroupStore from '@/modules/groupStore';

interface category {
  categoryId: number;
  memberId?: number;
  categoryName: string;
  score?: number;
}

const categories: Array<category> = [
  {
    categoryId: 1,
    categoryName: '리액트 쿼리',
    score: 40,
  },
  {
    categoryId: 2,
    categoryName: 'api 연동',
    score: 72,
  },
  {
    categoryId: 3,
    categoryName: '리팩터링',
    score: 55,
  },
  {
    categoryId: 4,
    categoryName: '운동',
    score: 20,
  },
  {
    categoryId: 5,
    categoryName: '발성 연습',
    score: 40,
  },
];

export default function CheckBox() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div className="flex flex-col items-center">
      {categories &&
        categories.map((item, index) => (
          <Link
            href=""
            className={`flex justify-around w-11/12 h-12 text-lg bg-white border-b-[1px] border-gray-200 ${
              index === 0 ? 'rounded-t-lg' : ''
            } ${index === categories.length - 1 ? 'rounded-b-lg mb-8' : ''}`}
            key={index}
          >
            <button className="w-1/4">{item.categoryName}</button>
            <progress
              className="progress progress-accent bg-gray-200 rounded-lg w-2/3 my-auto h-1/2"
              value={item.score}
              max="100"
            ></progress>
          </Link>
        ))}
    </div>
  );
}
