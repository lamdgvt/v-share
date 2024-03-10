// 获取 token
const getToken = async () => {
    const kitsuToken = useCookie('kitsuAccessToken')

    if (!kitsuToken.value) {
        const body = {
            grant_type: 'password',
            username: '491801318@qq.com',
            password: 'lin520wei',
        }

        const data: any = await useRequest('/api/kitsu/oauth', { method: 'post', body })
        kitsuToken.value = data.access_token
    }

    return kitsuToken.value
}

export default async function useRequest<T>(url: string, config: any = {}) {
    const defaultConfig = {
        lazy: true,
        onRequest({ request, options }: any) {

            // kitsu token 设置
            if (request.match('/api/kitsu') && request !== '/api/kitsu/oauth') {
                options.headers = options.headers || {}
                options.headers.authorization = getToken()
            }
        },
        onRequestError() { },
        onResponse() { },
        onResponseError() { }
    }

    // 后续处理错误弹出框和权限 401 控制

    return await useFetch<T>(url, { ...defaultConfig, ...config })
}
