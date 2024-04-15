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
    categoryName: '집에',
    score: 40,
  },
  {
    categoryId: 2,
    categoryName: '가고',
    score: 80,
  },
  {
    categoryId: 3,
    categoryName: '싶다',
    score: 35,
  },
  {
    categoryId: 4,
    categoryName: '젠장할',
    score: 65,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
  {
    categoryId: 5,
    categoryName: '인생',
    score: 81,
  },
];

export default function CheckBox() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <div className="flex flex-col items-center h-[100vh]">
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
              className="progress rounded-lg bg-white progress-success w-4/5 my-auto h-1/2"
              value={item.score}
              max="100"
            ></progress>
          </Link>
        ))}
    </div>
  );
}
