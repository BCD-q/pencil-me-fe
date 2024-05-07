import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import * as D from '../../../../resources/data';
import Odegaard from '../../../../resources/images/common/Odegaard.jpg';

export default function Avatar() {
  const ApiKey = process.env.REACT_APP_API_KEY;
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['avatar'],
    queryFn: () => {
      return axios.get(`${ApiKey}/avatar`);
    },
  });

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
      <div className="mx-auto my-2 text-xl text-black">홍정우</div>
    </>
  );
}
