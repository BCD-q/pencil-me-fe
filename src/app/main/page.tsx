'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';

import WorkBox from '@/app/main/components/workBox';
import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

const TodayPage = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const id = searchParams.get('id');

  useEffect(() => {
    console.log(id);
    console.log(category);
  }, [id, category]);

  return (
    <div className="flex flex-col w-[100vw]">
      <Cartegory>{category}</Cartegory>
      <WorkBar>{category} 할 일들</WorkBar>
      <WorkBox id={id} />
    </div>
  );
};

export default TodayPage;
