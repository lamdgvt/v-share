import axios from 'axios';

// const auth = '56bd1bf073cb6e1c4c6981766e025b2d';
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmJkMWJmMDczY2I2ZTFjNGM2OTgxNzY2ZTAyNWIyZCIsInN1YiI6IjY1OWFiOTFkY2E0ZjY3MDI1YTU3NzRhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9Tvs1md5kbZ4uWjuY3LhlQvs58GdpdprMwfAQubp6A'

// 创建 axios 实例
const request: any = axios.create({
    // API 请求的默认前缀
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
    },
});

// 异常拦截处理器
const errorHandler = (error: any) => {
    return Promise.reject(error);
};

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

request.interceptors.response.use((response: any) => {
    const { data } = response;

    return data;
}, errorHandler);

export default request;

