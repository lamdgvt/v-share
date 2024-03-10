import kitsuRequest from '~/utils/kitsuRequest'

// 根据 id 获取动漫详情
export default defineEventHandler(async (event) => {
    const params = getQuery(event);
    const id = getRouterParam(event, 'id')

    return await kitsuRequest.get(`/edge/anime/${id}`, { params })
})
