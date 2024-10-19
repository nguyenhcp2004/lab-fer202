import envConfig from '@/constants/config'
import axios, { AxiosInstance } from 'axios'
export class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: envConfig.VITE_API_ENDPOINT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
