import React, { useRef, useState } from 'react';

// reg는 빈별
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import Input from '../../component/today/Input';
import TodoBox from '../../component/today/TodoBox';

export interface todoList {
  id: number;
  title: string;
  date: string;
  isImportant: boolean;
}

const todoList: todoList[] = [
  {
    id: 1,
    title: '캡스톤 디자인 과제 끝내기',
    date: '2021-09-01',
    isImportant: false,
  },
  {
    id: 2,
    title: '프로젝트 발표자료 만들기',
    date: '2021-09-01',
    isImportant: false,
  },
  {
    id: 3,
    title: '집밥 먹기',
    date: '2021-09-01',
    isImportant: false,
  },
  {
    id: 4,
    title: '초콜릿 먹기',
    date: '2021-09-01',
    isImportant: false,
  },
];

export default function WorkBox(): JSX.Element {
  return (
    <div className="flex flex-col flex-1 h-full overflow-auto">
      <ul className="h-full">
        {todoList.map((item) => (
          <Swiper key={item.id}>
            <SwiperSlide key={item.id}>
              <TodoBox item={item} />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center w-full bg-white">
                <div className="flex flex-row w-full h-16 text-sm text-white border-t">
                  <div className="flex-1"></div>
                  <button className="w-1/6 bg-orange-400">미루기</button>
                  <button className="w-1/6 bg-red-500">삭제</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
      </ul>
      <div className="text-xs text-gray-400">처리 중인 작업들</div>
      <div className="flex flex-col w-5/6 mb-1 mx-auto rounded-sm text-white">
        <ul>
          {todoList.map((item) => (
            <li
              key={item.id}
              className="bg-[#78be5e] skeleton p-3 mt-2 mb-2 rounded-md"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end w-full">
        <Input />
      </div>
    </div>
  );
}
