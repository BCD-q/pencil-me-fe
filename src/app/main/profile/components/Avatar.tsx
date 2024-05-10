import Image from 'next/image';
import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useProfileStore from '@/modules/profileStore';

import Odegaard from '../../../../resources/images/common/Odegaard.jpg';

export default function Avatar() {
  const { profileModalOpen, setProfileModalOpen } = useProfileStore();
  const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { data, refetch } = useQuery({
    queryKey: ['member'],
    queryFn: () => {
      return axios.get(`${ApiKey}/members`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  useEffect(() => {
    refetch();
  }, [profileModalOpen]);

  return (
    <>
      <div className="flex mt-8 justify-center avatar">
        <div className="flex flex-col w-40 mt-4 rounded-full">
          <Image
            src={Odegaard}
            alt="avatar"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="mx-auto my-2 text-xl text-black">
        {data?.data.data.nickname}
      </div>
    </>
  );
}
