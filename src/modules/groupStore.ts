import { create } from 'zustand';

interface GroupStore {
  modModalOpen: boolean;
  groupModalOpen: boolean;
  setGroupModalOpen: () => void;
  setGroupModalClose: () => void;
  setModModalOpen: () => void;
  setModModalClose: () => void;
}

const useGroupStore = create<GroupStore>()((set, get) => ({
  modModalOpen: false,
  groupModalOpen: false,
  setGroupModalOpen: () => set({ groupModalOpen: true }),
  setGroupModalClose: () => set({ groupModalOpen: false }),
  setModModalOpen: () => set({ modModalOpen: true }),
  setModModalClose: () => set({ modModalOpen: false }),
}));

export default useGroupStore;
