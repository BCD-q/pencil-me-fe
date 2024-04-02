import { create } from 'zustand';

export interface TodoItem {
  memberId: number;
  categoryId: number;
  title: string;
  contents: string;
  deadline: string;
  isImportant: boolean;
}

interface TodayStore {
  todoList: TodoItem[];
  addTodo: (newTodo: TodoItem) => void;
}

const useTodayStore = create<TodayStore>((set) => ({
  todoList: [],
  addTodo: (newTodo: TodoItem) =>
    set((prevState) => ({
      todoList: [...prevState.todoList, newTodo],
    })),
}));

export default useTodayStore;
