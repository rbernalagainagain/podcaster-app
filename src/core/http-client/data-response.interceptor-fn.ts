import { AxiosInstance } from 'axios'

export function dataResponseInterceptorFn(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => {
      console.log('dataResponseInterceptorFn', response.data.contents)
      return {
        ...response,
        data: JSON.parse(response.data.contents),
      }
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
