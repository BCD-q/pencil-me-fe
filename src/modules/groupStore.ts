import { create } from 'zustand';

interface GroupStore {
  modModalOpen: boolean;
  groupModalOpen: boolean;
  setGroupModalOpen: () => void;
  setGroupModalClose: () => void;
  setModGroupOpen: () => void;
  setModGroupClose: () => void;
}

const useGroupStore = create<GroupStore>()((set, get) => ({
  modModalOpen: false,
  groupModalOpen: false,
  setGroupModalOpen: () => set({ groupModalOpen: true }),
  setGroupModalClose: () => set({ groupModalOpen: false }),
  setModGroupOpen: () => set({ modModalOpen: true }),
  setModGroupClose: () => set({ modModalOpen: false }),
}));

export default useGroupStore;
