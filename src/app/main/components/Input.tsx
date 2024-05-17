'use client';

import React, { useEffect, useState } from 'react';
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
  const [text, setText] = useState('');
  const { todoList, addTodo } = useTodayStore();
  const [inputText, setInputText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    '✉️ 이렇게 입력해보세요',
    '다른 문장을 입력해보세요',
    '더 많은 예시를 입력해보세요',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (inputText: string) => {
      if (inputText === '') {
        alert('내용을 입력해주세요!');
        return Promise.reject();
      } else {
        const data: LanguageData = {
          memberDialog: inputText,
        };
        setText(inputText);
        setInputText('');
        return axios.post(`${apiKey}/communicator/language`, data, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
      }
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
      <div className="flex sticky items-center z-10 h-20 px-2 py-3 bg-white rounded-t-3xl">
        <input
          type="text"
          placeholder={placeholders[placeholderIndex]}
          className="flex w-full min-w-24 pl-2 h-2/3 rounded-md border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1] mx-3 text-sm"
          value={inputText}
          onChange={handleChangeInput}
          // onKeyUp={handleKeyUpInput}
        />
        <button
          className="bg-[#78be5e] rounded-3xl flex justify-center my-auto items-center whitespace-nowrap text-white text-md h-8 w-[30%]"
          onClick={() => mutate(inputText)}
        >
          <IoPaperPlaneOutline className="w-6" />
          전송
        </button>
        {isPending && (
          <div className="absolute flex bottom-24 w-full z-10">
            <div className="mr-4 pl-4 w-full flex items-center skeleton bg-accent rounded-lg text-white h-12 text-sm">
              {text}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
