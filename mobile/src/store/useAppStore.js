import { create } from 'zustand';

export const useAppStore = create((set) => ({
  hasOnboarded: false,
  setHasOnboarded: (value) => set({ hasOnboarded: value }),
}));


