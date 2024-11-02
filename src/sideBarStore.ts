import { create } from "zustand";

interface ISideBarState {
  isActive: boolean;
  toggleSideBar: () => void;
  closeSideBar: () => void;
}

const useSideBarStore = create<ISideBarState>((set) => ({
  isActive: false,
  toggleSideBar: () => set((state) => ({ isActive: !state.isActive })),
  closeSideBar: () => set({ isActive: false }),
}));

export default useSideBarStore;
