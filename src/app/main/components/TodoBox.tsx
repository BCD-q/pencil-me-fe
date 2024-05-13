import { FaRegStar, FaStar } from 'react-icons/fa';

import useTodayStore from '@/modules/todayStore';
// Reg는 빈별
import { TodoItem } from '@/modules/todayStore';

export default function TodoBox({ item }: { item: TodoItem }) {
  const { ModifyTodo, setModifyTodo } = useTodayStore();

  const formatDeadline = (deadline?: string | undefined) => {
    return deadline?.replace('T', ' ');
  };

  return (
    <>
      <li
        key={item.categoryId}
        className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200"
      >
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-black">{item.title}</div>
          <div className="text-xs text-gray-400">
            {formatDeadline(item.deadline)}
          </div>
        </div>
        <div className="ml-auto text-xs text-gray-500">{item.categoryName}</div>
        <button className="w-4 h-4 m-2 text-gray-500">
          {item.isImportant ? (
            <FaStar className="text-[#78be5e]" />
          ) : (
            <FaRegStar />
          )}
        </button>
      </li>
    </>
  );
}
