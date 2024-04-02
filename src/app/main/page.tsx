'use client';

import React from 'react';

import WorkBox from '@/app/main/components/workBox';
import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

const TodayPage = () => {
  return (
    <div className="relative flex flex-col h-full">
      <Cartegory>오늘</Cartegory>
      <WorkBar>오늘의 작업들</WorkBar>
      <WorkBox />
    </div>
  );
};

export default TodayPage;
