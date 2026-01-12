import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/colors';

/**
 * Custom hook to get theme colors based on system color scheme
 * @returns Theme colors object
 */
export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    colors: {
      primary: Colors.primary,
      background: isDark ? Colors.backgroundDark : Colors.background,
      surface: isDark ? Colors.surfaceDark : Colors.surface,
      text: isDark ? Colors.textDark : Colors.text,
      textSecondary: isDark ? Colors.textDarkSecondary : Colors.textSecondary,
      border: isDark ? Colors.borderDark : Colors.border,
    },
  };
};
