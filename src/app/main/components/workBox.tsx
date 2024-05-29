'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import BlankText from '@/component/common/BlankText';
import useGroupStore from '@/modules/groupStore';
import useTodayStore from '@/modules/todayStore';

import TodoBox from './TodoBox';
import './workBox.style.css';

export interface TodoItem {
  id?: number;
  memberId?: number;
  categoryId?: number;
  title?: string;
  contents?: string;
  deadline?: string;
  isFinished?: boolean;
  isImportant?: boolean;
}

export default function WorkBox({ id }: { id: string | null }): JSX.Element {
  const { todoList, isChanged } = useTodayStore();
  const { groupModalOpen } = useGroupStore();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const router = useRouter();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['todoList'],
    queryFn: () => {
      try {
        return axios.get(`${apiKey}/todos/${id == null ? '' : id}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  const setModifyTodo = (item: TodoItem): void => {
    localStorage.setItem('modifyTodo', JSON.stringify(item));
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupModalOpen, todoList, isChanged]);

  if (isLoading)
    return (
      <div className="flex-1 loading loading-spinner w-1/6 m-auto text-gray-600"></div>
    );

  const deleteTodo = async (id: number | undefined) => {
    try {
      await axios.delete(`${apiKey}/todos/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      refetch();
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col flex-1 z-0 overflow-y-auto">
      <ul className="h-full">
        {data?.data.data.length === 0 && <BlankText />}
        {data &&
          data?.data.data.map((item: TodoItem, index: number) => (
            <Swiper key={index} slidesPerView={'auto'}>
              <SwiperSlide>
                <TodoBox item={item} />
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white text-white">
                  <button
                    className="p-5 bg-orange-400"
                    onClick={() => {
                      setModifyTodo(item);
                      router.push('/main/modify/999');
                    }}
                  >
                    수정
                  </button>
                  <button
                    className="p-5 bg-red-500 "
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          ))}
      </ul>
    </div>
  );
}
