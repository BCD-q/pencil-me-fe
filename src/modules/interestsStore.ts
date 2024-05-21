import { create } from 'zustand';

interface InterestItem {
  thumbnail_url?: string;
  title?: string;
  link?: string;
}
interface InterestStore {
  InterestsArray: InterestItem[];
  setInterests: (item: any) => void;
}

const useInterestsStore = create<InterestStore>((set) => ({
  InterestsArray: [],
  setInterests: (item: InterestItem[]) => {
    set({ InterestsArray: item });
    // set((state) => ({
    //   InterestsArray: [...state.InterestsArray, ...item],
    // }));
  },
}));

export default useInterestsStore;
