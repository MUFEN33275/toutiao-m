/*
  请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
  // baseURL: 'http://toutiao.itheima.net/v1_0/'
})
// 请求拦截器

// 响应拦截器

export default request
