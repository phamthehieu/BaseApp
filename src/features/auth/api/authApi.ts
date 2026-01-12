import { useMutation } from '@tanstack/react-query';
import { LoginPayload, LoginResponse } from '../types/authType';
import { useAuthStore } from '../store/authStore';
import { postRequest } from '@/api/apiClient';
import { Endpoints } from '@/constants/endpoints';

export const useLoginMutation = () => {
  const { setToken, setUser } = useAuthStore();

  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await postRequest<LoginResponse>(Endpoints.auth.login, {
        ...data
      });
      return response;
    },
    onSuccess: (data) => {
      console.log('Login Success:', data);
      setToken(data.token);
      setUser({ id: data.id });
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });
};