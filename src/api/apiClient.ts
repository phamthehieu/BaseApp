import axios, { AxiosRequestConfig } from 'axios';
import { ENV } from '@/config/env';
import { getToken } from '@/utils/storage';

export interface PaginationParams {
  pageIndex?: number;
  pageSize?: number;
  [key: string]: any;
}

export interface PaginationResponse<T> {
  data: T[];
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const postRequest = async <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.post<T>(url, data, config);
  return response.data;
};

export const getRequest = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.get<T>(url, config);
  return response.data;
};

export const getRequestWithPagination = async <T = any>(
  url: string,
  params?: PaginationParams,
  config?: AxiosRequestConfig
): Promise<PaginationResponse<T>> => {
  const queryParams: Record<string, any> = {
    pageIndex: params?.pageIndex ?? 1,
    pageSize: params?.pageSize ?? 20,
    ...params,
  };

  const response = await api.get<PaginationResponse<T>>(url, {
    ...config,
    params: queryParams,
  });
  
  return response.data;
};

export const putRequest = async <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.put<T>(url, data, config);
  return response.data;
};

export const deleteRequest = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.delete<T>(url, config);
  return response.data;
};

export { api };
