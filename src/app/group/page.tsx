'use client';

import Link from 'next/link';

import GroupBox from '@/component/group/GroupBox';
import AddGroupModal from '@/container/group/AddGroupModal';

import Cartegory from '../../component/common/Cartegory';
import useGroupStore from '../../modules/groupStore';

export default function Group(): JSX.Element {
  const { groupModalOpen } = useGroupStore();

  return (
    <div className="flex flex-col h-full">
      <Cartegory>그룹</Cartegory>
      <div className="flex flex-col items-center mt-2 bg-gray-200 border-8 border-slate-200 ">
        <Link
          href="../main"
          className=" pl-4 pt-2 flex justify-start w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200 hover:bg-gray-300"
        >
          <button>오늘</button>
        </Link>
        <button className="flex justify-start w-11/12 mb-4 h-12 pt-2 pl-4 text-lg bg-white rounded-b-lg hover:bg-gray-300 ">
          주요 목표
        </button>
      </div>
      <GroupBox />
      {groupModalOpen && <AddGroupModal />}
    </div>
  );
}