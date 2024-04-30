'use client';

import React, { useEffect, useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface TodoItem {
  memberId?: number;
  categoryId?: number;
  title?: string;
  contents?: string;
  deadline?: string;
  isFinished?: boolean;
}

export default function Input() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [inputText, setInputText] = useState('');

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
        },
        body: JSON.stringify({
          memberDialog: inputText,
        }),
      });
      const makeData = await res.json();
      console.log(makeData);

      const newTodo: TodoItem = {
        title: makeData.data.title,
        contents: makeData.data.contents,
        categoryId: makeData.data.categoryId,
        deadline: makeData.data.deadline,
        isFinished: false,
      };
      mutate(newTodo);
    }
  };

  const { mutate } = useMutation({
    mutationFn: (todo: TodoItem) => {
      return axios.post(`${apiKey}/todos`, todo);
    },
    onSuccess: ({ data }) => {
      console.log(data);
    },
  });

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
