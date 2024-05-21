'use client';

import { useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Cartegory from '@/component/common/Cartegory';
import Toast from '@/component/common/Toast';

import TodoBox from '../../components/TodoBox';

export default function ModifyPage() {
  const item: any = JSON.parse(localStorage.getItem('modifyTodo') || '{}');
  const [loca1, loca2] = item.deadline.split('T');
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [group, setGroup] = useState<string>();
  const [title, setTitle] = useState<string>(item.contents);
  const [deadline, setDeadline] = useState<string>(loca1);
  const [endTime, setEndTime] = useState<string>(loca2);

  const { data } = useQuery({
    queryKey: ['groupName'],
    queryFn: () => {
      return axios.get(`${apiKey}/categories`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  const getModify = useMutation({
    mutationFn: () => {
      const modInfo = {
        categoryId: group,
        title: item.title,
        contents: title,
        deadline: deadline + 'T' + endTime,
        isFinished: false,
        isImportant: false,
      };
      return axios.put(`${apiKey}/todos/${item.id}`, modInfo, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
    },
    onSuccess: () => {
      setTimeout(() => {
        history.back();
      }, 1000);
    },
    onError: () => {
      alert('수정에 실패했습니다.');
      console.log(group, title, item.contents, deadline + endTime);
    },
  });

  return (
    <>
      {getModify.isSuccess && <Toast>수정 완료!</Toast>}
      <Cartegory>수정</Cartegory>
      <TodoBox item={item} />
      <div className="flex flex-col h-full">
        <div className="text-xs text-s text-gray-500 m-2 my-4">세부사항</div>
        <div className="flex gap-2 h-44 min-h-fit flex-col w-5/6 rounded-2xl bg-white mx-auto">
          <div className="flex flex-row mt-1 ml-4 h-1/4">
            <div className="text-xs mt-[18px]">그룹</div>
            <select
              className="ml-auto pt-1 select w-1/4 mr-1 text-xs"
              onChange={(e) => setGroup(e.target.value)}
            >
              <option disabled selected className="">
                그룹
              </option>
              {data?.data.data.map((item: any, index: number) => (
                <option key={index} value={item.categoryId} className="">
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <hr />
          <div className="flex flex-row ml-4 h-1/4">
            <div className="text-xs my-auto">종료일</div>
            <input
              type="text"
              className="flex w-1/3 justify-center ml-auto text-end mr-4 text-xs sm:text-sm"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <hr />
          <div className="flex flex-row ml-4 pb-2 mt-1 mb-1 h-1/4">
            <div className="text-xs my-auto">종료시간</div>
            <input
              type="text"
              className="flex w-1/3 h-8 justify-center ml-auto text-end mr-4 text-xs sm:text-sm"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className="text-xs text-gray-500 m-2 my-4">세부사항</div>
        <textarea
          className="textarea w-5/6 h-1/4 mx-auto resize-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <button
          className="btn bg-accent text-white border-none w-[26%] ml-auto my-4 mr-4"
          onClick={() => {
            getModify.mutate();
          }}
        >
          수정 완료
        </button>
      </div>
    </>
  );
}
