import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(
  config => {
    if (config.data && config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
