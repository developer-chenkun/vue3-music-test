import axios, { type AxiosRequestConfig } from 'axios'
// axios.defaults.baseURL = localStorage.getItem('BASE_URL')?.toString()
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 20 * 1000
axios.defaults.maxBodyLength = 5 * 1024 * 1024
axios.defaults.withCredentials = true

/**
 * 请求拦截
 */
axios.interceptors.request.use(
	(config: AxiosRequestConfig | any) => {
		config.params = {
			...config.params,
			t: new Date(),
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
	response => {
		return response
	},
	err => {
		return Promise.reject(err)
	}
)

const http = axios.create()
export default http
