module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/config': './src/config',
          '@/features': './src/features',
          '@/hooks': './src/hooks',
          '@/lib': './src/lib',
          '@/navigation': './src/navigation',
          '@/store': './src/store',
          '@/theme': './src/theme',
          '@/types': './src/types',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
};
