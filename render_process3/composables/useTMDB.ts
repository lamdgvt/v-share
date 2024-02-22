// composables/getData.ts
import type { LocationQuery } from 'vue-router'
import type { NitroFetchRequest } from 'nitropack'
// import fs from 'fs'

interface Params {
    url: NitroFetchRequest
    // opts: FetchOptions<any>
    method?: 'get' | 'post' | 'put' | 'delete'
    key?: any
}

const token = ref('Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmJkMWJmMDczY2I2ZTFjNGM2OTgxNzY2ZTAyNWIyZCIsInN1YiI6IjY1OWFiOTFkY2E0ZjY3MDI1YTU3NzRhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9Tvs1md5kbZ4uWjuY3LhlQvs58GdpdprMwfAQubp6A');

const headers = reactive({
    accept: 'application/json',
    Authorization: token.value,
    'Content-Type': 'application/json;charset=utf-8',
})

export async function useTMDBFetch({ url, method = 'get', key }: Params) {
    // 接口传参要求
    interface QueryItem {
        uid?: string
        token?: LocationQuery
    }
    const route = useRoute()
    // const query: QueryItem = route.query
    
    // const config = useRuntimeConfig()
    const res = await useFetch(url, {
        // 缓存key  用于缓存数据
        key,
        // method此处仅仅只处理了get与post请求
        method,
        lazy: false,
        // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
        baseURL: 'https://api.themoviedb.org/3',
        // onRequest相当于请求拦截
        onRequest({ request, options }) {
            options.headers = { ...headers, ...options.headers, }

            // console.warn(options.headers)
        },
        // onResponse相当于响应拦截
        onResponse({ response }) {
            debugger;
            console.log(response);
            debugger;
            // 处理响应数据
            // console.log(response)

            return response._data
        },
        onRequestError({ request, options, error }) {
            // 处理请求错误
            // console.warn('request error', error)
            // ElMessage.warning('Request Error')
        },
        onResponseError({ request, response, options }) {
            // 处理响应错误
            // console.warn('response error', response)
            // ElMessage.warning('Request Error')
        },
    })
    // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。

    console.log(res)

    debugger;

    return res.data.value
}