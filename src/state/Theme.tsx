import { useEffect } from 'react';
import useTheme from '../hooks/useTheme';
import useAppStore from '../store/useAppStore';
import { THEME } from '../hooks/useTheme';

export default function ThemeProvider() {
  const theme = useAppStore((state) => state.theme);
  const { isLight } = useTheme();
  const setTheme = useAppStore((state) => state.setTheme);
  useEffect(() => {
    if (theme === undefined) {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.dark : THEME.light);
    }
  }, []);
  useEffect(() => {
    console.log('hello');
    const root = document.documentElement;
    if (isLight) {
      root.classList.remove(THEME.dark);
      root.classList.add(THEME.light);
    } else {
      root.classList.remove(THEME.light);
      root.classList.add(THEME.dark);
    }
  }, [theme]);

  // localStorage.theme = 'light';

  // localStorage.theme = 'dark';

  // localStorage.removeItem('theme');

  return null;
}
