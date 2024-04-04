'use client';

import { RiAddBoxFill } from 'react-icons/ri';

import useGroupStore from '../../../modules/groupStore';

export default function GroupFooter() {
  const { groupModalOpen, setGroupModalOpen } = useGroupStore();

  const toggleModal = () => {
    setGroupModalOpen();
    console.log(groupModalOpen);
  };

  return (
    <div className="flex sticky bottom-0 bg-gray-100 rounded-t-xl">
      <button
        className=" border-none top-2 left-4 btn btn-outline btn-success text-[#78be5e]"
        onClick={toggleModal}
      >
        <RiAddBoxFill className="text-[#78be5e]" />
        그룹 추가
      </button>
    </div>
  );
}
