import { create } from 'zustand';

interface TodoItem {
  memberId: number;
  categoryId: number;
  title: string;
  contents: string;
  deadline: string;
  isImportant: boolean;
}

interface TodayStore {
  todoList: TodoItem[];
}

const useTodayStore = create<TodayStore>((set) => ({
  todoList: [],
}));

export default useTodayStore;
