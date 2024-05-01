import { FaRegStar, FaStar } from 'react-icons/fa';

// Reg는 빈별
import { TodoItem } from '@/modules/todayStore';

export default function TodoBox({ item }: { item: TodoItem }) {
  return (
    <>
      <li
        key={item.categoryId}
        className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200"
      >
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-gray-700">{item.title}</div>
          <div className="text-sm text-gray-400">{item.deadline}</div>
        </div>
        <button className="w-4 h-4 ml-auto">
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
