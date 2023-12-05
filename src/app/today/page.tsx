'use client';

import React, { Fragment, useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';

import { postTodo } from '@/app/apis/todo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Todo } from '@/types';

const TodayPage = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

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

    postTodo(inputText)
      .then((data) => {
        setTodos((prev) => [...prev, data]);

        setInputText('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Header />
      <span className="text-sm text-gray-500 p-2">오늘의 작업들</span>
      <div className="flex flex-col flex-1 overflow-auto">
        <ul className="border-b">
          {Array.from({ length: 20 }).map((_, i) => (
            <li
              key={i}
              className="p-2 flex items-center gap-2 bg-white border-t border-gray-200"
            >
              <button className="w-4 h-4 rounded-full border-2 border-gray-400" />
              <div className="flex flex-col">
                <div className="text-gray-700">캡스톤 디자인 과제 끝내기</div>
                <div className="text-sm text-gray-400">2021-09-01</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white w-full flex gap-2 px-2 py-3 rounded-t-lg">
        <input
          type="text"
          placeholder="이렇게 입력해보세요"
          className="w-full pl-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-[#efeef1]"
          value={inputText}
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
        />
        <button
          className="bg-[#78be5e] flex gap-1 justify-center whitespace-nowrap p-2 items-center text-white rounded-xl hover:bg-lime-400"
          onClick={handleButtonClick}
        >
          <IoPaperPlane />
          전송
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TodayPage;
