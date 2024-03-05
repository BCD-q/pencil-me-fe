import {create} from 'zustand'

interface ProfileStore {
  profileModalOpen: boolean
  setProfileModalOpen: () => void
  setProfileModalClose: () => void
  toggleProfileModal?: () => void
}

const useProfileStore = create<ProfileStore>()((set, get) => ({
  profileModalOpen: false,
  setProfileModalOpen: () => set({profileModalOpen: true}),
  setProfileModalClose: () => set({profileModalOpen: false})
}))

export default useProfileStore
