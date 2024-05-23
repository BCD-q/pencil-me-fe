import { create } from 'zustand';

interface InterestItem {
  thumbnail_url?: string;
  title?: string;
  link?: string;
}
interface InterestStore {
  InterestsBoolean: boolean;
  setInterestBoolean: () => void;
}

const useInterestsStore = create<InterestStore>((set) => ({
  InterestsBoolean: false,
  setInterestBoolean: () =>
    set((state) => ({ InterestsBoolean: !state.InterestsBoolean })),
}));

export default useInterestsStore;
