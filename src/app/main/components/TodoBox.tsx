'use client';

import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

// Reg는 빈별
import useTodayStore from '@/modules/todayStore';

export default function TodoBox() {
  const todoList = useTodayStore((state) => state.todoList);
  const { categoryId, title, deadline, isImportant } = todoList[0];
  const [important, setImportant] = useState<boolean>(isImportant);

  const handleStarClick = () => {
    if (isImportant === true) {
      useTodayStore.getState().todoList[0].isImportant = false;
    } else {
      useTodayStore.getState().todoList[0].isImportant = true;
    }
    console.log(isImportant);
    setImportant(!important);
  };
  return (
    <>
      <li
        key={categoryId}
        className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200"
      >
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-gray-700">{title}</div>
          <div className="text-sm text-gray-400">{deadline}</div>
        </div>
        <button className="w-4 h-4 ml-auto" onClick={handleStarClick}>
          {isImportant ? <FaStar className="text-[#78be5e]" /> : <FaRegStar />}
        </button>
      </li>
    </>
  );
}
