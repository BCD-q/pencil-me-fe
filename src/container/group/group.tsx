'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';

import GroupBox from '@/component/group/GroupBox';

import Cartegory from '../../component/common/Cartegory';
import useGroupStore from '../../modules/groupStore';
import AddGroupModal from './AddGroupModal';

export default function Group(): React.ReactElement {
  const { groupModalOpen, setGroupModalOpen } = useGroupStore();
  const [group, setGroup] = useState<string>('');

  return (
    <div className="flex flex-col h-full">
      <Cartegory>그룹</Cartegory>
      <div className="flex flex-col items-center flex-grow mt-2 bg-gray-200 border-8 border-slate-200 ">
        <Link
          href="../main"
          className="pl-4 pt-2 flex justify-start w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200 hover:bg-gray-300"
        >
          <button>오늘</button>
        </Link>
        <button className="flex justify-start w-11/12 h-12 pt-2 pl-4 text-lg bg-white rounded-b-lg hover:bg-gray-300 ">
          주요 목표
        </button>
        <GroupBox />
      </div>

      {groupModalOpen && <AddGroupModal />}
    </div>
  );
}
