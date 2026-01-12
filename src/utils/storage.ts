import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const TOKEN_KEY = 'auth.token';

export const getToken = () => storage.getString(TOKEN_KEY);
export const setToken = (token: string) => storage.set(TOKEN_KEY, token);
export const removeToken = () => storage.remove(TOKEN_KEY);