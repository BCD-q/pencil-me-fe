import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'swiper/css';
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
  const {
    groupModalOpen,
    setGroupModalClose,
    modModalOpen,
    setModModalOpen,
    setModModalClose,
  } = useGroupStore();

  const router = useRouter();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  useEffect(() => {
    router.refresh();
    refetch();
  }, [groupModalOpen, modModalOpen]);

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  const deleteCategory = async (id: number | undefined) => {
    try {
      await axios.delete(`${apiKey}/categories/${id}`);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ul className="w-full mx-auto overflow-hidden">
      {data?.data?.data.map((item: category, index: number) => {
        const isFirst = index === 0;
        const isLast = index === data?.data?.data.length - 1;
        const buttonClassName = `
          flex mx-auto w-11/12 h-12 items-center pl-4 text-lg border-b-[1px] bg-white hover:bg-gray-300
          ${isFirst && data?.data?.data.length !== 1 ? 'rounded-t-lg' : ''} ${isLast && data?.data?.data.length !== 1 ? 'rounded-b-lg' : ''}
        `;
        return (
          <Swiper key={index}>
            <SwiperSlide key={item.categoryId}>
              <button className={buttonClassName}>{item.categoryName}</button>
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
                    className={`w-1/6 bg-red-500  ${isFirst && data?.data?.data.length !== 1 ? 'rounded-t-lg rounded-l-none' : ''} ${isLast && data?.data?.data.length !== 1 ? 'rounded-b-lg rounded-l-none' : ''}`}
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
