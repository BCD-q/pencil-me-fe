'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchInspiration } from '@/libs';

import BottomCarousel from './BottonComponent';

export default function BottonInspiration() {
  const InspiQuery = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ['inspiration'],
      queryFn: () => fetchInspiration(),
    });

    if (isLoading)
      return <div className="loading loading-spinner loading-md mt-12"></div>;

    return (
      <>
        {data &&
          data.data.message.map((item: any) => {
            return <BottomCarousel data={item} />;
          })}
      </>
    );
  };

  return (
    <div className="flex flex-wrap w-full carousel justify-center bg-white">
      <InspiQuery />
    </div>
  );
}
