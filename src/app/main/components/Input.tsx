'use client';

import React, { useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import useTodayStore from '@/modules/todayStore';

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
  const { todoList, addTodo } = useTodayStore();
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
      return axios.post(`${apiKey}/language`, data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    onSuccess: ({ data }) => {
      setInputText('');
      console.log(data);
      const newTodo: TodoItem = {
        title: data.data.title,
        contents: data.data.contents,
        categoryId: 1,
        deadline: data.data.deadline,
        isFinished: false,
      };
      const postTodo = axios.post(`${apiKey}/todos`, newTodo, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      postTodo.then(() => {
        addTodo(newTodo);
      });
    },
    onError: () => {
      alert('전송에 실패했습니다!');
      setInputText('');
    },
  });

  return (
    <>
      <div className="flex sticky z-10 px-2 py-3 bg-white rounded-t-2xl">
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
          onClick={() => mutate(inputText)}
        >
          <IoPaperPlaneOutline className="w-6 h-6" />
          전송
        </button>
        {isPending && (
          <div className="absolute flex bottom-20 w-full z-10">
            <div className="mr-4 pl-4 w-full flex items-center skeleton bg-accent rounded-lg text-white h-12 text-sm">
              {inputText}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
