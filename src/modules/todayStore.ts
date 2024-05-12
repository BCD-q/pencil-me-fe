import { create } from 'zustand';

export interface TodoItem {
  memberId?: number;
  categoryId?: number;
  categoryName?: string;
  title?: string;
  contents?: string;
  deadline?: string;
  isImportant?: boolean;
}

interface TodayStore {
  todoList: TodoItem[];
  ModifyTodo: boolean;
  setModifyTodo: () => void;
  addTodo: (newTodo: TodoItem) => void;
}

const useTodayStore = create<TodayStore>((set) => ({
  todoList: [],
  ModifyTodo: false,
  setModifyTodo: () =>
    set((prevState) => ({
      ModifyTodo: !prevState.ModifyTodo,
    })),
  addTodo: (newTodo: TodoItem) =>
    set((prevState) => ({
      todoList: [...prevState.todoList, newTodo],
    })),
}));

export default useTodayStore;
