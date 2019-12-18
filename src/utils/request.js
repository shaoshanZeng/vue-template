import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    // timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // console.log(config)
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    const { data, config } = response
    if(config.baseURL != process.env.VUE_APP_BASE_URL) {
        return response;
    }
    if (data && data.code == 100) {
        return data
    } else {
        return Promise.reject(response);
    }
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service