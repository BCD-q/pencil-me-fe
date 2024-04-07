import { useQuery } from '@tanstack/react-query';

import { fetchInspiration } from '@/libs';

import BottomCarousel from './BottonComponent';

export default function BottonInspiration() {
  const InspiQuery = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ['inspiration'],
      queryFn: () => fetchInspiration,
    });

    return (
      <div>
        {data?.message?.map((item: any) => <BottomCarousel data={item} />)}
      </div>
    );
  };
  return (
    <div className="flex flex-wrap w-full carousel justify-center bg-white">
      <InspiQuery />
    </div>
  );
}
