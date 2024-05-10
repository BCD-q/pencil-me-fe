'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GiClick } from 'react-icons/gi';

// useState 추가
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface InterestItem {
  id: number;
  keyword: string;
}

export default function Interest() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['interests'],
    queryFn: () => {
      return axios.get(`${apiKey}/interests`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  // 클릭된 관심사 아이템을 추적하기 위한 상태
  const [clickedItems, setClickedItems] = useState<number[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const toggleClicked = (id: number, keyword: string) => {
    if (clickedItems.includes(id)) {
      // 이미 클릭된 경우 클릭 해제
      setClickedItems(clickedItems.filter((item) => item !== id));
      setInterests(interests.filter((item) => item !== keyword));
    } else {
      // 클릭되지 않은 경우 클릭
      setClickedItems([...clickedItems, id]);
      setInterests([...interests, keyword]);
    }
  };

  useEffect(() => {
    console.log(clickedItems);
  }, [clickedItems]);

  const addInterest = async () => {
    const keywordsString = clickedItems.join(','); // 클릭된 키워드를 쉼표로 구분된 문자열로 변환
    console.log(keywordsString);
    await axios.get(`${apiKey}/interestIds-mapping/${keywordsString}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }); // 쿼리스트링으로 요청 전송
    alert('관심사 등록이 완료되었습니다!');
    localStorage.setItem('interests', JSON.stringify(interests)); // 로컬스토리지에 관심사 저장
    router.push('/group');
  };

  return (
    <div className="flex flex-col bg-accent h-full w-full">
      <header className="w-full h-14 text-black text-2xl bg-white flex items-center justify-center text-md">
        취향 설정
      </header>
      <div className="ml-4 m-4 bg-accent text-white text-xl w-full">
        좋아하는 주제를 탭하세요
      </div>
      <ul className="m-2 inline-grid grid-cols-3 gap-2 overflow-y-auto">
        {data?.data?.data.map((item: InterestItem, index: number) => {
          const isFirst = index === 0;
          const isLast = index === data.data.data.length - 1;
          const clicked = clickedItems.includes(item.id); // 클릭 여부 확인

          const buttonClassName = `
          flex mx-auto w-[25vw] h-[25vw] m-2 gap-2 h-1/2 justify-center items-center  text-md bg-white rounded-full transition-color ease-in-out delay-75
          ${clicked ? 'bg-gray-300 text-white' : ''}`; // 클릭된 상태에 따라 배경색 변경

          return (
            <button
              className={buttonClassName}
              key={index}
              onClick={() => {
                toggleClicked(item.id, item.keyword); // 클릭 토글 함수 호출
              }}
            >
              {item.keyword}
            </button>
          );
        })}
      </ul>
      <div className="flex mt-auto w-full h-16 items-center justify-center ml-auto bg-white ">
        <button
          className="ml-auto mr-4 bg-accent text-white w-1/4 h-1/2 rounded-3xl"
          onClick={addInterest}
        >
          완료
        </button>
      </div>
    </div>
  );
}
