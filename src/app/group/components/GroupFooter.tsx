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
    <div className="flex w-full sticky bottom-0 bg-inherit">
      <button
        className="absolute border-none top-2 left-4 btn btn-outline btn-success text-[#78be5e]"
        onClick={toggleModal}
      >
        <RiAddBoxFill className="absolute left-0 text-[#78be5e]" />
        그룹 추가
      </button>
    </div>
  );
}
