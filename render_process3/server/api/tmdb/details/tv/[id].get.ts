import tmdbRequest from '~/utils/tmdbRequest'

// 根据 id 获取tv详情
export default defineEventHandler(async (event) => {
    const params = getQuery(event);
    const id = getRouterParam(event, 'id')

    return await tmdbRequest.get(`/movie/${id}`, { params })
})
