'use client';

import { MdAddBox } from 'react-icons/md';

import useGroupStore from '../../../modules/groupStore';

export default function GroupFooter() {
  const { groupModalOpen, setGroupModalOpen } = useGroupStore();

  const toggleModal = () => {
    setGroupModalOpen();
    console.log(groupModalOpen);
  };

  return (
    <div className="flex sticky bottom-0 h-16 shadow-xl border-t-8 border-gray-100 bg-gray-100 rounded-t-xl">
      <button
        className=" border-none top-2 left-4 btn btn-outline rounded-2xl text-[#78be5e] text-lg"
        onClick={toggleModal}
      >
        <MdAddBox className="text-xl" />
        그룹 추가
      </button>
    </div>
  );
}
