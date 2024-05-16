import { FaRegStar, FaStar } from 'react-icons/fa';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import useTodayStore from '@/modules/todayStore';
// Reg는 빈별
import { TodoItem } from '@/modules/todayStore';

export default function TodoBox({ item }: { item: TodoItem }) {
  const { setIsChanged } = useTodayStore();

  const formatDeadline = (deadline?: string | undefined) => {
    return deadline?.replace('T', ' ');
  };

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const checkFinished = useMutation({
    mutationFn: () => {
      return axios.put(
        `${apiKey}/todos/${item.id}`,
        {
          ...item,
          isFinished: !item.isFinished,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: ({ data }) => {
      console.log(data);
      setIsChanged();
    },
  });

  const checkImportant = useMutation({
    mutationFn: () => {
      return axios.put(
        `${apiKey}/todos/${item.id}`,
        {
          ...item,
          isImportant: !item.isImportant,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: ({ data }) => {
      console.log(data);
      setIsChanged();
    },
  });

  return (
    <>
      <li
        key={item.categoryId}
        className={`flex items-center h-16 gap-2 p-2  border-gray-200
          ${item.isFinished ? 'bg-gray-200 border-y-gray-300 border-y-[1px] ' : 'bg-white border-y-[1px]'}`}
      >
        {item.isFinished ? (
          <button
            className="w-4 h-4 border-2 border-gray-400 bg-gray-400 rounded-full"
            onClick={() => {
              checkFinished.mutate();
            }}
          />
        ) : (
          <button
            className="w-4 h-4 border-2 border-gray-400 rounded-full"
            onClick={() => {
              checkFinished.mutate();
            }}
          />
        )}
        <div className="flex flex-col">
          <div className="text-black">{item.title}</div>
          <div className="text-xs text-gray-400">
            {formatDeadline(item.deadline)}
          </div>
        </div>
        <div className="ml-auto text-xs text-gray-500">{item.categoryName}</div>
        <button className="w-4 h-4 m-2 text-gray-500">
          {item.isImportant ? (
            <FaStar
              className="text-[#78be5e]"
              onClick={() => {
                checkImportant.mutate();
              }}
            />
          ) : (
            <FaRegStar
              onClick={() => {
                checkImportant.mutate();
              }}
            />
          )}
        </button>
      </li>
    </>
  );
}
