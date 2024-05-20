'use client';

import React, { useEffect, useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';

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
  const { addTodo } = useTodayStore();
  const [inputText, setInputText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const datefns = new Date();
  const datefnsAddday7 = new Date(datefns.setDate(datefns.getDate() + 7));

  const formatting = format(datefnsAddday7, "yyyy-MM-dd'T'HH:mm:ss");

  const placeholders = [
    '✉️ 이렇게 입력해보세요',
    '오늘 저녁 9시에 친구와 저녁먹기',
    '내일 오전 7시에 조깅하기',
    '다음 주 월요일 오후 2시에 회의 참석하기',
    '금요일 저녁 6시에 영화 보기',
    '수요일 오후 3시에 치과 예약',
    '다음 달 15일에 가족 여행 가기',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const getGroup = useQuery({
    queryKey: ['groupName'],
    queryFn: () => {
      return axios.get(`${apiKey}/categories`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    enabled: false, // 처음에는 비활성화 상태로 설정
  });

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
    onError: async () => {
      console.log('자연어 처리 실패');
      await getGroup.refetch();

      const newTodo: TodoItem = {
        title: text,
        contents: text,
        categoryId: getGroup.data?.data.data[0]?.categoryId || 1,
        deadline: formatting,
      };
      console.log(newTodo);
      const postTodo = axios.post(`${apiKey}/todos`, newTodo, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      postTodo.then(() => {
        addTodo(newTodo);
      });
    },
  });

  return (
    <>
      <div className="flex sticky items-center z-10 h-20 px-2 py-3 bg-white rounded-t-3xl border-t-[1px]">
        <input
          type="text"
          placeholder={placeholders[placeholderIndex]}
          className="flex w-full min-w-24 pl-2 h-2/3 rounded-md border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1] mx-3 text-sm"
          value={inputText}
          onChange={handleChangeInput}
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
