import kitsuRequest from '~/utils/kitsuRequest'

export default defineEventHandler(async (event) => {
    const params = getQuery(event);

    return await kitsuRequest.get('/edge/trending/anime?limit=30', { params })
})
