import axios from 'axios';

// 默认开启 cookies
axios.defaults.withCredentials = true;

// 创建 axios 实例
const request: any = axios.create({
    // API 请求的默认前缀
    baseURL: 'http://localhost:3330',
    timeout: 30000, // 请求超时时间
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
    },
    // proxy: {
    //     protocol: 'http',
    //     host: '127.0.0.1',
    //     port: 7890,
    // },
});

// 异常拦截处理器
const errorHandler = (error: any) => Promise.reject(error)

// request interceptor
request.interceptors.request.use((config: any) => {
    // get 请求方式统一加上 时间戳
    if (config.method === 'get') {
        config.params = {
            _t: new Date().getTime(),
            ...(config.params || {}),
        };
    }

    return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response: any, config: any) => {
    const { data } = response;
    if (data?.code === 403) {
    }

    return data;
}, errorHandler);

export default request;