'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

// useState 추가
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ErrorToast from '@/component/common/ErrorToast';
import useInterestsStore from '@/modules/interestsStore';

interface InterestItem {
  id: number;
  keyword: string;
}

export default function Interest() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const router = useRouter();
  const memId = localStorage.getItem('memberId');

  const { setInterests } = useInterestsStore();

  const { data } = useQuery({
    queryKey: ['interests'],
    queryFn: () => {
      return axios.get(`${apiKey}/interests`);
    },
  });

  // 클릭된 관심사 아이템을 추적하기 위한 상태
  const [clickedItems, setClickedItems] = useState<number[]>([]);
  const [interests, setMyInterests] = useState<string[]>([]);

  const toggleClicked = (id: number, keyword: string) => {
    if (clickedItems.includes(id)) {
      // 이미 클릭된 경우 클릭 해제
      setClickedItems(clickedItems.filter((item) => item !== id));
      setMyInterests(interests.filter((item) => item !== keyword));
    } else {
      // 클릭되지 않은 경우 클릭
      setClickedItems([...clickedItems, id]);
      setMyInterests([...interests, keyword]);
    }
  };

  useEffect(() => {
    console.log(clickedItems);
  }, [clickedItems]);

  const addInterest = async () => {
    if (clickedItems.length > 3) {
      alert('3개 이상 선택할 수 없습니다.');
    } else {
      const queryString = convertToQueryString(clickedItems); // 클릭된 아이템의 ID 목록을 쿼리 스트링으로 변환
      await axios.post(
        `${apiKey}/interests-mapping?memberId=${memId}&${queryString}`,
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      );
      localStorage.setItem('interests', JSON.stringify(interests)); // 로컬스토리지에 관심사 저장
      setInterests([]);
      router.push('/main');
    }
  };

  const convertToQueryString = (clickedItems: number[]) => {
    return clickedItems.map((itemId) => `interestIds=${itemId}`).join('&');
  };

  return (
    <>
      {clickedItems.length > 3 && (
        <ErrorToast>3개 이상 선택할 수 없습니다!</ErrorToast>
      )}
      <div className="flex flex-col bg-accent h-full w-full">
        <header className="w-full h-1/3 text-black bg-white flex items-center justify-center text-md">
          취향 설정
        </header>
        <div className="m-4 flex bg-accent text-white text-xl w-full">
          관심있는 주제를 탭하세요
        </div>
        <ul className=" inline-grid grid-cols-3 gap-2 overflow-y-scroll">
          {data?.data?.data.map((item: InterestItem, index: number) => {
            const clicked = clickedItems.includes(item.id); // 클릭 여부 확인

            const buttonClassName = `
          relative flex mx-auto w-[25vw] h-[25vw] m-2 gap-2 h-1/2 justify-center items-center  text-sm sm:text-md bg-white rounded-full transition-color ease-in-out delay-75
          ${clicked ? 'opacity-50 text-black' : ''}`; // 클릭된 상태에 따라 배경색 변경

            return (
              <button
                className={buttonClassName}
                key={index}
                onClick={() => {
                  toggleClicked(item.id, item.keyword); // 클릭 토글 함수 호출
                }}
              >
                {clicked && (
                  <FaCheck className="absolute top-1/3 left-1/3 w-1/3 h-1/3 opacity-80" />
                )}
                {item.keyword}
              </button>
            );
          })}
        </ul>
        <div className="flex mt-auto w-full h-1/3 sticky bottom-0 items-center justify-center ml-auto bg-white">
          <button
            className="ml-auto mr-4 bg-accent text-white w-1/4 h-2/3 rounded-3xl"
            onClick={addInterest}
          >
            완료
          </button>
        </div>
      </div>
    </>
  );
}
