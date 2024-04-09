export type Todo = {
  title: string;
  date: string;
  memo: string;
  'end-date': string;
  'end-time': string;
};

// footer 인터페이스
export interface MyLinks {
  id: number;
  path: string;
  text: string;
  icon: JSX.Element;
}
