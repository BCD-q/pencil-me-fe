import React, { useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchTodo } from '@/libs';
import useTodayStore from '@/modules/todayStore';

interface TodoItem {
  memberId: number;
  categoryId: number;
  title: string;
  contents: string;
  deadline: string;
  isImportant: boolean;
}

export default function Input() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { todoList, addTodo } = useTodayStore();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleButtonClick = async () => {
    if (inputText === '') return;

    if (inputText) {
      setInputText('');
      const res = await fetch(`${apiKey}/language`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // prettier-ignore
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          memberDialog: inputText,
        }),
      });
      const data = await res.json();
      console.log(data);

      const newTodo: TodoItem = {
        memberId: data.data.memberId,
        categoryId: data.data.categoryId,
        title: data.data.title,
        contents: data.data.contents,
        deadline: data.data.deadline,
        isImportant: false,
      };

      addTodo(newTodo);
      console.log(todoList);
    }
  };

  return (
    <>
      <div className="flex w-full sticky gap-2 px-2 py-3 bg-white rounded-t-2xl">
        <input
          type="text"
          placeholder="이렇게 입력해보세요"
          className="w-full min-w-24 pl-2 h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1] mx-3 text-sm"
          value={inputText}
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
        />
        <button
          className="bg-[#78be5e] flex justify-center my-auto items-center whitespace-nowrap text-white text-lg btn min-h-4 h-10"
          onClick={handleButtonClick}
        >
          <IoPaperPlaneOutline className="w-6 h-6" />
          전송
        </button>
      </div>
    </>
  );
}
