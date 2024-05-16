'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import BlankText from '@/component/common/BlankText';
import Cartegory from '@/component/common/Cartegory';
import WorkBar from '@/component/common/Workbar';
import { TodoItem } from '@/modules/todayStore';
import useTodayStore from '@/modules/todayStore';

import TodoBox from '../components/TodoBox';

export default function ImportantPage() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { isChanged } = useTodayStore();

  const { data, refetch } = useQuery({
    queryKey: ['important'],
    queryFn: () => {
      return axios.get(`${apiKey}/todos`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChanged]);

  return (
    <>
      <Cartegory>주요 목표</Cartegory>
      <WorkBar>주요 목표들</WorkBar>
      <div className="flex flex-col flex-1 h-screen z-0 overflow-y-hidden">
        <ul className="h-full">
          {data?.data.data.length === 0 && <BlankText />}

          {data &&
            data.data.data
              .filter(
                (item: TodoItem, index: number) => item.isImportant === true,
              )
              .map((item: TodoItem, index: number) => <TodoBox item={item} />)}
        </ul>
      </div>
    </>
  );
}
