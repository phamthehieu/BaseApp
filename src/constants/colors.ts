/**
 * Color constants for the application
 * Define your app's color palette here
 */

export const Colors = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  
  // Secondary colors
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',
  
  // Status colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  grayLight: '#C7C7CC',
  grayDark: '#636366',
  
  // Background colors
  background: '#F2F2F7',
  backgroundDark: '#000000',
  surface: '#FFFFFF',
  surfaceDark: '#1C1C1E',
  
  // Text colors
  text: '#000000',
  textSecondary: '#8E8E93',
  textDark: '#FFFFFF',
  textDarkSecondary: '#8E8E93',
  
  // Border colors
  border: '#C6C6C8',
  borderLight: '#E5E5EA',
  borderDark: '#38383A',
} as const;

export type ColorKey = keyof typeof Colors;
