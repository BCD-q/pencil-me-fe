import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchCategory } from '@/libs';

import useGroupStore from '../../../modules/groupStore';
import ModifyGroupModal from './ModifyGroupModal';

interface category {
  categoryId?: number;
  memberId?: number;
  categoryName?: string;
}

const testData = [
  {
    categoryId: 1,
    categoryName: 'category1',
  },
  {
    categoryId: 2,
    categoryName: 'category2',
  },
  {
    categoryId: 3,
    categoryName: 'category3',
  },
];

export default function GroupDataBox() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [key, setKey] = useState<number>();
  const { groupModalOpen, modModalOpen, setModModalOpen } = useGroupStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupModalOpen, modModalOpen]);

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  const deleteCategory = async (id: number | undefined) => {
    try {
      await axios.delete(`${apiKey}/categories/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const getInterests = async () => {
    const Interests = await axios.get(
      `${apiKey}/interests-mapping?memberId=${localStorage.getItem('memberId')}`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
    const InterArr: string[] = [];
    Interests.data.data.map((item: any) => {
      InterArr.push(item.keyword);
    });

    localStorage.setItem('interests', JSON.stringify(InterArr));
  };

  getInterests();

  return (
    <ul className="w-full mx-auto overflow-hidden">
      {data?.data?.data.map((item: category, index: number) => {
        const isFirst = index === 0;
        const isLast = index === data?.data?.data.length - 1;
        const buttonClassName = `
          flex mx-auto w-11/12 h-12 items-center pl-4 text-lg border-b-[1px] bg-white truncate hover:bg-gray-300
          ${isFirst && data?.data?.data.length !== 1 ? 'rounded-t-lg' : ''} ${isFirst && data?.data?.data.length == 1 ? 'rounded-lg' : ''} ${isLast && data?.data?.data.length !== 1 ? 'rounded-b-lg' : ''}
        `;
        return (
          <Swiper
            key={index}
            modules={[EffectFade]}
            effect="fade"
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide key={item.categoryId}>
              <Link
                href={`/main?id=${item.categoryId}&category=${item.categoryName}`}
              >
                <button className={buttonClassName}>
                  <p className="flex text-left truncate w-11/12">
                    {item.categoryName}
                  </p>
                </button>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <div className={buttonClassName}>
                <div className="flex flex-row w-full h-12 text-sm text-white border-t">
                  <div className="flex-1 text-black"></div>
                  <button
                    className="w-1/6 bg-orange-400"
                    onClick={() => {
                      console.log(item.categoryId);
                      setKey(item.categoryId);
                      setModModalOpen();
                    }}
                  >
                    수정
                  </button>
                  <button
                    className={`w-1/6 bg-red-500  ${isFirst && data?.data?.data.length !== 1 ? 'rounded-t-lg rounded-tl-none' : ''} ${isLast && data?.data?.data.length !== 1 ? 'rounded-b-lg rounded-bl-none' : ''}`}
                    onClick={() => {
                      deleteCategory(item.categoryId);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        );
      })}
      {modModalOpen && <ModifyGroupModal id={key} />}
    </ul>
  );
}
