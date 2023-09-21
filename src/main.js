import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 引入所有的ElementUI组件库
import ElementUI from 'element-ui'
import axios from 'axios'
// 引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
// 配置token
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
  return config
}, error => {
  error.data = {
    message: '服务器异常~'
  }
  return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
