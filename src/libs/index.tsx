'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const fastKey = apiKey?.substr(0, 16);

export const fetchTodo = async () => {
  await axios.patch(`${apiKey}/language`);
};

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
