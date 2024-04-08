'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { fetchInspiration } from '@/libs';

import BottomCarousel from './BottonComponent';

export default function BottonInspiration() {
  const fetchInspiration = async () => {
    try {
      return await axios.get(
        'https://dog.ceo/api/breed/hound/images/random/10',
      );
    } catch (error) {
      console.error(error);
    }
  };

  const InspiQuery = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ['inspiration'],
      queryFn: () => fetchInspiration(),
    });

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
