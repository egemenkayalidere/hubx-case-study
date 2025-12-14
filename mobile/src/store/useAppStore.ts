import { create } from 'zustand';

type AppStore = {
  hasOnboarded: boolean;
  setHasOnboarded: (value: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  hasOnboarded: false,
  setHasOnboarded: (value) => set({ hasOnboarded: value }),
}));
