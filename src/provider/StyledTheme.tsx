import { useMemo } from 'react';
import useTheme, { THEME } from '../hooks/useTheme';
import useAppStore from '../store/useAppStore';
import { darkColors, lightColors } from '../styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const _theme = useAppStore((state) => state.theme);
  const { isLight } = useTheme();

  const theme = useMemo(
    () => ({
      colors: isLight === THEME.dark ? darkColors : lightColors,
      isDark: isLight === THEME.dark
    }),
    [_theme]
  );

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
