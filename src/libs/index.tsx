'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const fastKey = apiKey?.substr(0, 16);

export const fetchTodo = async () => {
  await axios.patch(`${apiKey}/language`);
};

// 영감 불러올때 api
export const fetchInspiration = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const memId = localStorage.getItem('memberId');
  const InterestArr: any[] = [];

  const getInterests = async () => {
    const getInterests = await axios.get(
      `${apiKey}/interests-mapping?memberId=${memId}`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );

    getInterests.data.data.map((item: any) => {
      InterestArr.push(item?.keyword);
    });

    console.log(InterestArr);
  };

  getInterests();

  // const Interests = localStorage.getItem('interests');
  const data = {
    keyword: InterestArr,
  };

  try {
    console.log(data);
    return await axios.post(`${fastKey}:6380/inspiration/me?start=1`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    console.log(apiKey);
  }
};

// export const fetchInspiration = async () => {
//   const concatInterests:string = []
//   try {
//     await axios.get(`${apiKey}/interest-mapping`).then((res) => {
//       res.data.map((keyword):string => {
//         return
//       })
//     })
//   } catch (error) {
//     console.error(error);
//   }
// };

// 그룹 불러올때 api
export const fetchCategory = async () => {
  try {
    return await axios.get(`${apiKey}/categories`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  } catch (error) {
    console.error(error);
  }
};
