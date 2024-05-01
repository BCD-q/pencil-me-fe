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

interface LanguageData {
  memberDialog: string;
}

export default function Input() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [inputText, setInputText] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      mutate(inputText);
    }
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (inputText: string) => {
      const data: LanguageData = {
        memberDialog: inputText,
      };
      return axios.post(`${apiKey}/language`, data);
    },
    onSuccess: ({ data }) => {
      console.log(data);
      const newTodo: TodoItem = {
        title: data.data.title,
        contents: data.data.contents,
        categoryId: data.data.categoryId,
        deadline: data.data.deadline,
        isFinished: false,
      };
      setInputText('');
      return axios.post(`${apiKey}/todos`, newTodo);
    },
  });

  return (
    <>
      <div className="flex w-full sticky gap-2 px-2 py-3 bg-white rounded-t-2xl">
        <input
          type="text"
          placeholder="이렇게 입력해보세요"
          className="relative w-full min-w-24 pl-2 h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1] mx-3 text-sm"
          value={inputText}
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
        />
        <button
          className="bg-[#78be5e] flex justify-center my-auto items-center whitespace-nowrap text-white text-lg btn min-h-4 h-10"
          onClick={() => mutate(inputText)}
        >
          <IoPaperPlaneOutline className="w-6 h-6" />
          전송
        </button>
        {isPending && (
          <div className="absolute bottom-20 w-[100vw]">
            <div className="mx-auto pl-4 flex items-center skeleton bg-accent rounded-lg text-white w-11/12 h-12">
              {inputText}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
