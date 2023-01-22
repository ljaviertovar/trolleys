import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { injectToken } from './injectToken';
import { headers } from './headers';

enum StatusCode {
    InternalServerError = 500,
    Forbidden = 403,
    Unauthorized = 401,
    TooManyRequests = 429
}

const request = <T = any, R = AxiosResponse<T>>(instance: AxiosInstance, config: AxiosRequestConfig): Promise<R> => {
    return instance.request(config);
}

const get = <T = any, R = AxiosResponse<T>>(instance: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<R> => {
    return instance.get<T, R>(url, config);
}

const post = <T = any, R = AxiosResponse<T>>(
    instance: AxiosInstance,
    url: string,
    data?: T,
    config?: AxiosRequestConfig
): Promise<R> => {
    return instance.post<T, R>(url, data, config);
}

const put = <T = any, R = AxiosResponse<T>>(
    instance: AxiosInstance,
    url: string,
    data?: T,
    config?: AxiosRequestConfig
): Promise<R> => {
    return instance.put<T, R>(url, data, config);
}

const delete = <T = any, R = AxiosResponse<T>>(instance: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<R> => {
    return instance.delete<T, R>(url, config);
}

const handleError = (error) => {
  const { status } = error;

  switch (status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      break;
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      break;
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      break;
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      break;
    }
  }
  return Promise.reject(error);
}

const instance = axios.create({
  baseURL: "https://api.example.com",
  headers,
  withCredentials: true,
  });

  instance.interceptors.request.use(injectToken, (error) => Promise.reject(error));

  instance.interceptors.response.use(
  (response) => response,
  (error) => handleError(error.response)
  );