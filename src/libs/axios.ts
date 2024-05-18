import Router from 'next/router';

import axios from 'axios';

const instance = axios.create({
  // 기본 설정
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Router.push('/login');
    }
    return Promise.reject(error);
  },
);

export default instance;
