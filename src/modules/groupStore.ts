import {create} from 'zustand'

interface GroupStore {
  groupModalOpen: boolean
  setGroupModalOpen: () => void
  setGroupModalClose: () => void
  toggleGroupModal?: () => void
}

const useGroupStore = create<GroupStore>()((set, get) => ({
  groupModalOpen: false,
  setGroupModalOpen: () => set({groupModalOpen: true}),
  setGroupModalClose: () => set({groupModalOpen: false})
}))

export default useGroupStore
