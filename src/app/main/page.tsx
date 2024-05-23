'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import WorkBox from '@/app/main/components/workBox';
import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

const TodayPage = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const id = searchParams.get('id');

  return (
    <div className="flex flex-col w-[100vw]">
      <div className="sticky top-0 z-50">
        <Cartegory>{category}</Cartegory>
        <WorkBar>{category == null ? '모든' : category} 할 일들</WorkBar>
      </div>
      <WorkBox id={id} />
    </div>
  );
};

export default TodayPage;
