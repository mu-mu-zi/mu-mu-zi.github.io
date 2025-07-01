import useAppStore from '../store/useAppStore';
import { lightColors, darkColors } from '../styles/theme';
export default function useTheme() {
  const theme = useAppStore((state) => state.theme);
  const isLight = theme === THEME.light;

  return {
    theme: isLight ? lightColors : darkColors,
    isLight
  };
}

export enum THEME {
  dark = 'dark',
  light = 'light'
}
