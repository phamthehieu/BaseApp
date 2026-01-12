export interface User {
    id: string | number;
    email?: string;
    name?: string;
    avatar?: string;
    [key: string]: any;
  }
  
  export interface AuthState {
    // State
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  
    // Actions
    setUser: (user: User | null) => void;
    setToken: (token: string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
  }

export interface LoginPayload {
    username: string;
    password?: string;
    deviceCode?: string;
    pushToken?: string;
    osName?: string;
  }
  
  export interface LoginResponse {
    token: string;
    id: number;
    refreshToken: string | null;
  }
  