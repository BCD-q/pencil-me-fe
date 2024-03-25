'use client';

import React from 'react';

import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';
import WorkBox from '@/container/today/workBox';

const TodayPage = () => {
  return (
    <div className="relative flex flex-col h-full">
      <Cartegory>오늘</Cartegory>
      <WorkBar>오늘의 작업들</WorkBar>
      <div className="flex-1 h-full">
        <WorkBox />
      </div>
    </div>
  );
};

export default TodayPage;
