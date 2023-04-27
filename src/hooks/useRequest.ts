import { useGlobalStore } from '@/stores'
import axios from 'axios'
import type {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

class AxiosService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string, token: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: Error) => {
        return Promise.reject(error)
      }
    )
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any, any>) => {
        return response
      },
      (error: Error) => {
        console.error(error)
        return Promise.reject(error)
      }
    )
  }
  public async get<T>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(url, { params, ...config })
  }
  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(url, data, config)
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(url, data, config)
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(url, config)
  }

  public async download<T>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(url, { params, ...config, responseType: 'blob' })
  }

  public async upload<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const formData = new FormData()
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((item: any) => {
          formData.append(`${key}[]`, item)
        })
      } else {
        formData.append(key, data[key])
      }
    }
    return this.axiosInstance.post(url, formData, {
      ...config,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}
export const useRequest = new AxiosService(
  import.meta.env.DEV ? import.meta.env.VTIE_PREFIX : import.meta.env.VITE_URL,
  useGlobalStore().token
)
