import { useEffect, useRef, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import useGroupStore from '../../../modules/groupStore';

export type categoryProps = {
  categoryName?: string;
};

export default function ModifyGroupModal({ id }: { id?: number }): JSX.Element {
  const { modModalOpen, setModModalClose } = useGroupStore();

  const [groupName, setGroupName] = useState<categoryProps | undefined>();
  const modalBackground = useRef<HTMLDivElement>(null);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { mutate } = useMutation({
    mutationFn: (groupName: categoryProps | undefined) => {
      return axios.put(
        `${apiKey}/categories/${id}`,
        {
          name: groupName?.categoryName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: () => {
      setModModalClose();
    },
  });

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      mutate(groupName);
    }
  };

  return (
    <div
      className="absolute z-10 flex flex-col w-4/5  h-48 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl top-1/2 left-1/2 rounded-xl md:w-2/5 md:h-52 opacity-100"
      ref={modalBackground}
    >
      <div className="flex justify-center my-4">그룹명</div>
      <input
        type="text"
        placeholder="그룹명을 입력해주세요"
        className="flex w-10/12 mx-auto mb-8 text-center rounded-lg just-center input input-bordered"
        onChange={(e) => setGroupName({ categoryName: e.target.value })}
        onKeyUp={handleKeyUpInput}
      />
      <div className="flex justify-evenly flex-1 bg-accent items-center rounded-b-lg">
        <button
          className=" w-1/2 bg-accent border-none text-white hover:bg-gray-200 h-full rounded-b-lg"
          onClick={() => mutate(groupName)}
        >
          수정
        </button>

        <button
          className="w-1/2 bg-accent border-none text-white hover:bg-gray-200 h-full rounded-b-lg"
          onClick={setModModalClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
