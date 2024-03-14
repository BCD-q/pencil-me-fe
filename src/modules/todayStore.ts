import { create } from 'zustand';

interface TodayStore {
  memberId: number;
  categoryId: number;
  title: string;
  contents: string;
  deadline: string;
  isImportant: boolean;
}

const useTodayStore = create<TodayStore>((set, get) => ({
  memberId: 0,
  categoryId: 0,
  title: '',
  contents: '',
  deadline: '',
  isImportant: false,
  setMemberId: (newMemberId: number) => set({ memberId: newMemberId }),
  setCategoryId: (newCategoryId: number) => set({ categoryId: newCategoryId }),
  setTitle: (newTitle: string) => set({ title: newTitle }),
  setContents: (newContents: string) => set({ contents: newContents }),
  setDeadline: (newDeadline: string) => set({ deadline: newDeadline }),
  setIsImportant: (newIsImportant: boolean) =>
    set({ isImportant: newIsImportant }),
}));

export default useTodayStore;
