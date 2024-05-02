import { useEffect } from 'react';

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
  const {
    groupModalOpen,
    setGroupModalClose,
    modModalOpen,
    setModGroupOpen,
    setModGroupClose,
  } = useGroupStore();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  useEffect(() => {
    refetch();
  }, [groupModalOpen, modModalOpen]);

  if (isLoading)
    return <div className="flex loading loading-spinner w-2/5 mx-auto"></div>;

  return (
    // <ul className="h-full w-full">
    //   {data?.data?.data.map((item: category, index: number) => {
    //     const isFirst = index === 0;
    //     const isLast = index === data.data.data.length - 1;
    //     const buttonClassName = `
    //       flex mx-auto w-11/12 h-12 pt-2 pl-4 text-lg border-b-[1px] bg-white
    //       ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}
    //     `;
    //     return (
    //       <button className={buttonClassName} key={index}>
    //         {item.categoryName}
    //       </button>
    //     );
    //   })}
    // </ul>
    <ul>
      {testData.map((item: category, index: number) => {
        const isFirst = index === 0;
        const isLast = index === testData.length - 1;
        const buttonClassName = `
          flex mx-auto w-11/12 h-12 items-center pl-4 text-lg border-b-[1px] bg-white
          ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}
        `;
        return (
          <Swiper key={index}>
            <SwiperSlide key={index}>
              <button className={buttonClassName}>{item.categoryName}</button>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center w-11/12 mx-auto bg-white">
                <div className="flex flex-row w-full h-12 text-sm text-white border-t">
                  <div className="flex-1"></div>
                  <button
                    className="w-1/6 bg-orange-400"
                    onClick={setModGroupOpen}
                  >
                    수정
                  </button>
                  <button className="w-1/6 bg-red-500">삭제</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        );
      })}
      {modModalOpen && <ModifyGroupModal />}
    </ul>
  );
}
