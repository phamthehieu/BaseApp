import Config from 'react-native-config';

const getEnvVar = (key: string, defaultValue: string): string => {
  return Config[key] || defaultValue;
};

export const ENV = {
  API_BASE_URL: getEnvVar('API_BASE_URL', ''),
  APP_NAME: getEnvVar('APP_NAME', 'BaseApp'),
  APP_VERSION: getEnvVar('APP_VERSION', '0.0.1'),
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
} as const;
