import axios from 'axios';

// 默认开启 cookies
axios.defaults.withCredentials = true;

// 创建 axios 实例
const kitsuRequest: any = axios.create({
    // API 请求的默认前缀
    baseURL: 'https://kitsu.io/api',
    timeout: import.meta.env.DEV ? 30000 : 30000, // 请求超时时间
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
kitsuRequest.interceptors.request.use((config: any) => {
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
kitsuRequest.interceptors.response.use((response: any, config: any) => {
    const { data } = response;
    if (data?.code === 403) {
    }

    return data;
}, errorHandler);

export default kitsuRequest;