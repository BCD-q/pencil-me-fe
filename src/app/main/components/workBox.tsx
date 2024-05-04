'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// reg는 빈별
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import BlankText from '@/component/common/BlankText';
import useTodayStore from '@/modules/todayStore';

import TodoBox from './TodoBox';

interface TodoItem {
  memberId?: number;
  categoryId?: number;
  title?: string;
  contents?: string;
  deadline?: string;
  isFinished?: boolean;
}

export default function WorkBox(): JSX.Element {
  const { todoList, addTodo } = useTodayStore();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { data, refetch } = useQuery({
    queryKey: ['todoList'],
    queryFn: () => {
      try {
        return axios.get(`${apiKey}/todos`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  useEffect(() => {
    console.log(todoList);
    refetch();
  }, [todoList]);

  const deleteTodo = async (id: number | undefined) => {
    try {
      await axios.delete(`${apiKey}/todos/${id}`);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-screen z-0 overflow-y-hidden">
      <ul className="h-full">
        {data?.data.data.length === 0 && <BlankText />}
        {data &&
          data.data.data.map((item: TodoItem, index: number) => (
            <Swiper key={index}>
              <SwiperSlide key={index}>
                <TodoBox item={item} />
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center w-full bg-white">
                  <div className="flex flex-row w-full h-16 text-sm text-white border-t">
                    <div className="flex-1"></div>
                    <button className="w-1/6 bg-orange-400">미루기</button>
                    <button
                      className="w-1/6 bg-red-500"
                      onClick={() => {
                        deleteTodo(item.categoryId);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ))}
      </ul>
      {/* <div className="text-xs ml-2 text-gray-400">처리 중인 작업들</div>
      <div className="flex flex-col w-5/6 mb-1 mx-auto rounded-sm text-white">
        <ul>
          {todoList.map((item, index) => (
            <li
              key={index}
              className="bg-[#78be5e] skeleton p-3 mt-2 mb-2 rounded-md"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
