import { create } from 'zustand';

interface InterestItem {
  thumbnail_url?: string;
  title?: string;
  link?: string;
}
interface InterestStore {
  InterestsArray: InterestItem[];
  setInterests: (item: any) => void;
  Interests: boolean;
  addInterest: () => void;
}

const useInterestsStore = create<InterestStore>((set) => ({
  InterestsArray: [],
  setInterests: (item: InterestItem[]) => {
    set({ InterestsArray: item });
  },
  Interests: false,
  addInterest: () =>
    set((Interests) => ({
      Interests: !Interests,
    })),
}));

export default useInterestsStore;
