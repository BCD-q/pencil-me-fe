"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaMicrophone } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { IoPaperPlane } from 'react-icons/io5';

interface ResponseData {
    user_statement: string;
  }

const TodayPage: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [response, setResponse] = useState<ResponseData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleButtonClick = async () => {
        try {
            // HTTP POST 요청을 보낼 URL
            const apiUrl = 'http://ai.na2ru2.me/v1/openai';
      
            // 요청 데이터
            const requestData = {
              user_statement: inputText,
            };
      
            // HTTP POST 요청 보내기
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            });
      
            // HTTP 응답 확인
            if (!response.ok) {
              throw new Error('서버 응답에 실패했습니다.');
            }
      
            // JSON 형식으로 응답 데이터 파싱
            const responseData: ResponseData = await response.json();
      
            // 응답 데이터를 상태에 저장
            setResponse(responseData);
          } catch (error) {
            // 오류 발생 시 오류 상태에 저장
            setError(error.message);
          }
          console.log(response);
          setInputText("");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <div className='flex h-96'>

                <div className='bg-white p-4 w-72 h-16 pt-3 flex mt-80 rounded-t-lg'>
                    <div className="relative flex items-center w-full">
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none">
                            <SiGooglemessages 
                                className='text-[#848388]'
                            />
                        </button>
                        <input
                            type="text"
                            placeholder="이렇게 입력해보세요"
                            className="w-full h-7 pl-7 pb-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 placeholder:text-[0.7rem] bg-[#efeef1]"
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none">
                            <FaMicrophone
                                className='text-[#848388]'
                            />
                        </button>
                    </div>
                    <button className="ml-4 h-6 mt-1 w-20 bg-[#78be5e] text-white px-4 rounded-2xl text-xs pr-0 mt-[5.5px] hover:bg-lime-400" onClick={handleButtonClick}>
                        <IoPaperPlane 
                            className='absolute ml-[-6px] mt-0.5'
                        />
                        전송
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TodayPage;
