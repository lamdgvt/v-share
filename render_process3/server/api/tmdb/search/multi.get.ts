import tmdbRequest from '~/utils/tmdbRequest'

export default defineEventHandler(async (event) => {
    const params = getQuery(event);

    return await tmdbRequest.get('/search/multi', { params })
})
