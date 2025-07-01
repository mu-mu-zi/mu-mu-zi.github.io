import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { THEME } from '../hooks/useTheme';

type State = {
  theme?: THEME;
};

type Actions = {
  setTheme(e?: THEME): void;
};

const initState: State = {
  theme: undefined
};

const useAppStore = create(
  persist(
    immer<State & Actions>(
      combine(initState, (set) => ({
        setTheme(theme: THEME) {
          set((state) => {
            state.theme = theme;
          });
        }
      }))
    ),
    {
      name: 'theme-storage',
      partialize: (state) => ({
        theme: state.theme
      })
    }
  )
);

export default useAppStore;
