import axios from 'axios';

export const getInterests = (pageParam: number) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  return axios.post(
    `${apiKey}/communicator/inspiration?start=${pageParam}`,
    null,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    },
  );
};
