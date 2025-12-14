import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppStore = {
  hasOnboarded: boolean;
  setHasOnboarded: (value: boolean) => void;
  hasHydrated: boolean;
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      setHasOnboarded: (value) => set({ hasOnboarded: value }),
      hasHydrated: false,
    }),
    {
      name: 'hubx-app-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ hasOnboarded: state.hasOnboarded }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.hasHydrated = true;
      },
    },
  ),
);
