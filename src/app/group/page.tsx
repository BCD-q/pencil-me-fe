'use client';

import Link from 'next/link';

import AddGroupModal from '@/app/group/components/AddGroupModal';
import GroupBox from '@/app/group/components/GroupBox';

import Cartegory from '../../component/common/Cartegory';
import useGroupStore from '../../modules/groupStore';

export default function Group(): JSX.Element {
  const { groupModalOpen } = useGroupStore();

  return (
    <div className="flex flex-col">
      <Cartegory>그룹</Cartegory>
      <div className="flex flex-col items-center mt-4">
        <Link
          href="../main"
          className=" pl-4 pt-2 flex justify-start w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200 hover:bg-gray-300"
        >
          <button>메인</button>
        </Link>
        <Link
          href="../main/important"
          className="flex justify-start w-11/12 mb-4 h-12 pl-4 text-lg bg-white rounded-b-lg hover:bg-gray-300"
        >
          <button>주요 목표</button>
        </Link>
      </div>
      <GroupBox />
      {groupModalOpen && <AddGroupModal />}
    </div>
  );
}
