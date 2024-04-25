import axios from 'axios'
import { urlRequestInterceptorFn } from './url-request.interceptor-fn.ts'
import { dataResponseInterceptorFn } from './data-response.interceptor-fn.ts'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

urlRequestInterceptorFn(instance)
dataResponseInterceptorFn(instance)

export default instance
