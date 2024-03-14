import React, { useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import useTodayStore from '@/modules/todayStore';

export default function Input(): React.ReactElement {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState('');
  const [error, setError] = useState<string | null>(null);

  const todoList = useTodayStore((state) => state.todoList);

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
      console.log(inputText);
      console.log(todoList);
      const res = await fetch(`${apiKey}language`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          memberDialog: inputText,
        }),
      });
      const data = await res.json();
      console.log(data);
      setInputText('');
    }
  };

  return (
    <>
      <div className="flex w-full gap-2 px-2 py-3 bg-white rounded-t-2xl">
        <input
          type="text"
          placeholder="이렇게 입력해보세요"
          className="w-full min-w-24 pl-2 h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1] mx-3 text-sm"
          value={inputText}
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
        />
        <button
          className="bg-[#78be5e] flex justify-center my-auto items-center whitespace-nowrap text-white btn min-h-4 h-10"
          onClick={handleButtonClick}
        >
          <IoPaperPlaneOutline className="w-5 h-5" />
          전송
        </button>
      </div>
    </>
  );
}
