import { http } from '@/app/apis/http';
import { API } from '@/app/apis/type';

type Response = API['postToday']['response'];
type Request = API['postToday']['request'];

export const postTodo = async (userStatement: string) =>
  await http.post<Response, Request>('', { user_statement: userStatement });
