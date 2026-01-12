import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  storage,
  getToken,
  setToken as setTokenStorage,
  removeToken,
} from '@/utils/storage';
import { AuthState } from '../types/authType';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: getToken() ?? null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setToken: (token) => {
        setTokenStorage(token);
        set({ 
          token,
          isAuthenticated: true 
        });
      },

      logout: () => {
        removeToken();
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (name: string) => {
          const value = storage.getString(name);
          return value ?? null;
        },
        setItem: (name: string, value: string) => {
          storage.set(name, value);
        },
        removeItem: (name: string) => {
          storage.remove(name);
        },
      })),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
