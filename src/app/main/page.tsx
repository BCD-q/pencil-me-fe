import React from 'react';

import WorkBox from '@/app/main/components/workBox';
import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';

const TodayPage = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      <Cartegory>메인</Cartegory>
      <WorkBar>메인 작업들</WorkBar>
      <WorkBox />
    </div>
  );
};

export default TodayPage;
