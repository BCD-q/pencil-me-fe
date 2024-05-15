import { create } from 'zustand';

export interface TodoItem {
  id?: number;
  categoryId?: number;
  categoryName?: string;
  title?: string;
  contents?: string;
  deadline?: string;
  isImportant?: boolean;
  isFinished?: boolean;
}

interface TodayStore {
  todoList: TodoItem[];
  isChanged: boolean;
  ModifyTodo: boolean;
  setModifyTodo: () => void;
  setIsChanged: () => void;
  addTodo: (newTodo: TodoItem) => void;
}

const useTodayStore = create<TodayStore>((set) => ({
  todoList: [],
  ModifyTodo: false,
  isChanged: false,
  setIsChanged: () =>
    set((prevState) => ({
      isChanged: !prevState.isChanged,
    })),
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
