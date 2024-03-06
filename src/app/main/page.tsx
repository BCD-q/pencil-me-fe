'use client';

import React from 'react';

import Cartegory from '@/component/common/Cartegory';
import WorkBox from '@/container/today/workBox';

const TodayPage = () => {
  return (
    <div className="relative flex flex-col h-full">
      <Cartegory>오늘</Cartegory>
      <div className="pt-2 pb-1 px-2 text-xs text-gray-400 bg-gray-200 border-[1px] border-gray-300 ">
        오늘의 작업들
      </div>
      <div className="flex-1 h-full">
        <WorkBox />
      </div>
    </div>
  );
};

export default TodayPage;
