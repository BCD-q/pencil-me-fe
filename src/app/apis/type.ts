import { Todo } from '@/types';

export type API = {
  postToday: {
    request: {
      user_statement: string;
    };
    response: Todo;
  };
};
